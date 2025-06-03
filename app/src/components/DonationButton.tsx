"use client";

import { useState } from "react";
import { useTranslation } from "@/contexts/TranslationContext";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe only if the key is available
const stripePromise = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  ? loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  : null;

// Debug: Check if environment variable is loaded (only in development)
if (process.env.NODE_ENV === "development") {
  console.log(
    "Stripe Publishable Key available:",
    !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );
  console.log(
    "Stripe Publishable Key starts with pk_:",
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.startsWith("pk_")
  );
}

interface DonateButtonProps {
  compact?: boolean;
  className?: string;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  showButton?: boolean;
}

export default function DonateButton({
  compact = false,
  className = "",
  isOpen,
  onOpenChange,
  showButton = true,
}: DonateButtonProps) {
  const { language } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("5");
  const [isSubscription, setIsSubscription] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  // Modal state management
  const isControlled = isOpen !== undefined;
  const isModalOpen = isControlled ? isOpen : internalIsOpen;
  const handleModalChange = (newState: boolean) => {
    if (isControlled) {
      onOpenChange?.(newState);
    } else {
      setInternalIsOpen(newState);
    }
  };

  const handleDonateClick = async () => {
    const donationAmount = customAmount || amount;
    if (!donationAmount || parseFloat(donationAmount) < 1) {
      return;
    }

    // Check if Stripe is properly configured
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      alert(
        language === "fr"
          ? "Erreur: Stripe non configuré. Vérifiez votre fichier .env.local"
          : "Error: Stripe not configured. Check your .env.local file"
      );
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/create-donation-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: parseFloat(donationAmount),
          isSubscription,
          success_url: `${window.location.origin}/${language}/donation/success`,
          cancel_url: window.location.href,
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.error("Error creating donation session:", data.error);
        alert(
          language === "fr" ? `Erreur: ${data.error}` : `Error: ${data.error}`
        );
        return;
      }

      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      if (stripe && data.sessionId) {
        const result = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });

        if (result.error) {
          console.error("Stripe checkout error:", result.error);
          alert(
            language === "fr"
              ? `Erreur de paiement: ${result.error.message}`
              : `Payment error: ${result.error.message}`
          );
        }
      } else {
        console.error("Stripe not loaded or session ID missing");
        alert(
          language === "fr"
            ? "Erreur: impossible de charger le système de paiement"
            : "Error: unable to load payment system"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      alert(language === "fr" ? "Erreur inattendue" : "Unexpected error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      {/* Donation Button */}
      {showButton && (
        <button
          onClick={() => handleModalChange(true)}
          className={`${
            compact ? "px-3 py-2 text-sm" : "px-6 py-3 text-base"
          } bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2`}
        >
          <span className="text-xl">💖</span>
          <span>{language === "fr" ? "Faire un don" : "Donate"}</span>
        </button>
      )}

      {/* Modal/Popup UI */}
      {isModalOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => handleModalChange(false)}
          />

          {/* Modal Container */}
          <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[calc(100vw-2rem)] max-w-md">
            <div className="flex flex-col gap-4 p-6 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-700">
              {/* Modal Header */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-white">
                  {language === "fr" ? "Faire un don" : "Make a donation"}
                </h3>
                <button
                  onClick={() => handleModalChange(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Subscription Toggle */}
              <div className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg">
                <span className="text-sm text-gray-300">
                  {language === "fr" ? "Don ponctuel" : "One-time"}
                </span>
                <button
                  onClick={() => setIsSubscription(!isSubscription)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    isSubscription ? "bg-orange-500" : "bg-gray-600"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      isSubscription ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
                <span className="text-sm text-gray-300">
                  {language === "fr" ? "Mensuel" : "Monthly"}
                </span>
              </div>

              {/* Donation Amount Selection */}
              <div className="flex flex-col gap-3">
                <label className="text-base font-semibold text-white">
                  {language === "fr"
                    ? `Montant ${isSubscription ? "mensuel" : ""}`
                    : `${isSubscription ? "Monthly amount" : "Amount"}`}
                </label>

                {/* Predefined Amounts */}
                <div className="grid grid-cols-2 gap-2">
                  {["1", "5", "10", "20"].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => {
                        setAmount(preset);
                        setCustomAmount("");
                      }}
                      className={`py-3 px-4 rounded-lg transition-colors font-medium ${
                        amount === preset && !customAmount
                          ? "bg-orange-500 text-white"
                          : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                      }`}
                    >
                      {preset}$ CAD
                    </button>
                  ))}
                </div>

                {/* Custom Amount Input */}
                <div className="mt-2">
                  <input
                    type="number"
                    min="1"
                    step="1"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setAmount("");
                    }}
                    placeholder={
                      language === "fr"
                        ? "Autre montant (minimum 1$)"
                        : "Other amount (minimum $1)"
                    }
                    className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Donation Button */}
              <button
                onClick={handleDonateClick}
                disabled={loading || (!amount && !customAmount)}
                className={`w-full py-3 px-4 rounded-lg transition-all font-medium ${
                  loading || (!amount && !customAmount)
                    ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white"
                } disabled:opacity-50`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>
                      {language === "fr" ? "Chargement..." : "Loading..."}
                    </span>
                  </div>
                ) : (
                  `${
                    isSubscription
                      ? language === "fr"
                        ? "S'abonner"
                        : "Subscribe"
                      : language === "fr"
                      ? "Faire un don"
                      : "Donate"
                  } (${customAmount || amount}$ CAD${
                    isSubscription
                      ? language === "fr"
                        ? "/mois"
                        : "/month"
                      : ""
                  })`
                )}
              </button>

              {/* Note about Stripe */}
              <p className="text-xs text-gray-400 text-center">
                {language === "fr"
                  ? "Paiement sécurisé via Stripe"
                  : "Secure payment via Stripe"}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
