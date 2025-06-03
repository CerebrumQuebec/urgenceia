# Environment Setup Guide

## Required Environment Variables

To enable Stripe donations, you need to create a `.env.local` file in the `app` directory with the following variables:

### 1. Create `.env.local` file

Create a file called `.env.local` in the `app` directory and add the following content:

```env
# Stripe Configuration (Replace with your real test/live keys)
# Get your keys from: https://dashboard.stripe.com/test/apikeys
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key_here

# Optional: Stripe Webhook Secret (for production)
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Optional: Firebase Configuration (for future features)
# NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
# NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
# NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
# NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
# NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789012
# NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789012:web:abc123def456ghi789

# Optional: Analytics
# NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-analytics-id
```

### 2. Get Stripe Test Keys

1. Sign up for a Stripe account at https://stripe.com
2. Go to your Stripe Dashboard: https://dashboard.stripe.com
3. Make sure you're in "Test mode" (toggle in the left sidebar)
4. Go to "Developers" > "API keys"
5. Copy your **Publishable key** and **Secret key**
6. Replace the placeholder values in your `.env.local` file

### 3. Install Required Packages

Install the Stripe packages by running:

```bash
npm install stripe @stripe/stripe-js @stripe/react-stripe-js
```

### 4. Update Stripe Integration

Once you have real Stripe keys, you'll need to:

1. Uncomment the Stripe code in `src/app/api/create-donation-session/route.ts`
2. Update the DonationButton component to use real Stripe integration
3. Test with Stripe's test card numbers:
   - Success: `4242 4242 4242 4242`
   - Decline: `4000 0000 0000 0002`

## Development vs Production

### Development (localhost)

- Use Stripe **test** keys (start with `pk_test_` and `sk_test_`)

### Production (deployed)

- Use Stripe **live** keys (start with `pk_live_` and `sk_live_`)
- Set up Stripe webhooks for payment confirmation

## Security Notes

- ✅ `.env.local` is already in `.gitignore` - it will NOT be committed to Git
- ✅ Only `NEXT_PUBLIC_*` variables are exposed to the browser
- ✅ `STRIPE_SECRET_KEY` stays server-side only
- ⚠️ Never commit real API keys to version control
- ⚠️ Always use test keys during development

## Testing the Donation Flow

1. Start your development server: `npm run dev`
2. Click the donation button in the header (💖 Faire un don)
3. Try different amounts and subscription options
4. Use Stripe test card numbers for testing

For detailed Stripe integration instructions, see `documentations/stripe.md`.
