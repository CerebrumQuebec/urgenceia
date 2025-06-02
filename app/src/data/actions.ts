import { Action } from "@/types/actions";

export const actions: Action[] = [
  {
    id: 1,
    slug: "ia-locales",
    status: "coming-soon",
    title: {
      fr: "Créer nos propres IA locales",
      en: "Create our own local AI",
    },
    description: {
      fr: "Former un grand modèle francophone entraîné sur des corpus culturels québécois",
      en: "Train a large francophone model on Quebec cultural corpus",
    },
    shortDescription: {
      fr: "Développer une IA québécoise souveraine",
      en: "Develop sovereign Quebec AI",
    },
    meta: {
      difficulty: "medium",
      timeframe: "long-term",
      impact: "national",
      category: "technical",
    },
  },
  {
    id: 2,
    slug: "taxe-punitive",
    status: "coming-soon",
    title: {
      fr: "Inverser la découvrabilité avec une taxe punitive",
      en: "Reverse discoverability with punitive tax",
    },
    description: {
      fr: "Appliquer une contribution sur la consommation de contenus non-locaux par les plateformes",
      en: "Apply a contribution on non-local content consumption by platforms",
    },
    shortDescription: {
      fr: "Taxer les contenus non-locaux",
      en: "Tax non-local content",
    },
    meta: {
      difficulty: "medium",
      timeframe: "medium-term",
      impact: "national",
      category: "economic",
    },
  },
  {
    id: 3,
    slug: "modele-economique",
    status: "coming-soon",
    title: {
      fr: "Développer un nouveau modèle économique centré sur la création",
      en: "Develop a new creation-centered economic model",
    },
    description: {
      fr: "Mettre en place des mécanismes de revenus autonomes basés directement sur l'acte créatif",
      en: "Implement autonomous revenue mechanisms based directly on creative acts",
    },
    shortDescription: {
      fr: "Nouveaux revenus pour les créateurs",
      en: "New revenue for creators",
    },
    meta: {
      difficulty: "medium",
      timeframe: "medium-term",
      impact: "national",
      category: "economic",
    },
  },
  {
    id: 4,
    slug: "plateformes-souveraines",
    status: "coming-soon",
    title: {
      fr: "Protéger nos œuvres via des plateformes souveraines",
      en: "Protect our works via sovereign platforms",
    },
    description: {
      fr: "Déployer une infrastructure numérique québécoise garantissant le consentement actif des créateurs",
      en: "Deploy Quebec digital infrastructure guaranteeing active creator consent",
    },
    shortDescription: {
      fr: "Infrastructure numérique québécoise",
      en: "Quebec digital infrastructure",
    },
    meta: {
      difficulty: "hard",
      timeframe: "long-term",
      impact: "national",
      category: "technical",
    },
  },
  {
    id: 5,
    slug: "badge-ia",
    status: "in-progress",
    title: {
      fr: "Rendre l'IA visible dans les œuvres (BadgeIA.org)",
      en: "Make AI visible in works (BadgeIA.org)",
    },
    description: {
      fr: "Développer un système standardisé de badges de transparence IA inspiré de Creative Commons, permettant aux créateurs d'indiquer précisément le niveau d'implication de l'IA dans leurs œuvres (Sons, Visuel, Texte) avec 5 niveaux de contribution",
      en: "Develop a standardized AI transparency badge system inspired by Creative Commons, allowing creators to precisely indicate AI involvement in their works (Audio, Visual, Text) with 5 contribution levels",
    },
    shortDescription: {
      fr: "Système de badges de transparence IA",
      en: "AI transparency badge system",
    },
    content: {
      text: {
        fr: `# Badge IA - Système de Transparence (En Développement)

## État Actuel du Projet

**🚀 Site web actif :** [badgeIA.org](https://badgeIA.org)

**Phase 1 - Auto-déclaration :** ✅ **Fonctionnel**
- Interface web permettant aux créateurs de générer des badges IA
- 5 catégories de transparence (0 = Humain uniquement, 4 = IA uniquement)  
- 3 types de médias : Sons (S), Visuel (V), Texte (T)
- Système inspiré de Creative Commons

**Phase 2 - Détection automatique :** 🔄 **En développement (très difficile)**
- Intégration dans les logiciels de création (Photoshop, ChatGPT, etc.)
- Métadonnées automatiques avec signature cryptographique
- API standardisée pour les plateformes
- Détection en temps réel de l'utilisation d'IA

## Le Système Badge IA

### 5 Niveaux de Contribution
- **0** : Humain Uniquement
- **1** : Humain avec Assistance IA
- **2** : Collaboration IA (équilibrée)
- **3** : IA Dirigée (prompts humains)
- **4** : IA Uniquement

### 3 Types de Médias
- **S-AI-0-4** : Sons (Audio, musique, voix, effets)
- **V-AI-0-4** : Visuel (Images, vidéos, animations)
- **T-AI-0-4** : Texte (Contenu écrit, code, données)

### Vision Technique
- Métadonnées intégrées dans les fichiers (EXIF, ID3, HTML meta)
- Interopérabilité entre plateformes
- Historique complet des modifications IA
- Signatures cryptographiques anti-falsification

## Défis Techniques Majeurs

### ✅ **Facile - Déjà implémenté**
- Interface web de génération de badges
- Auto-déclaration par les créateurs
- Système de notation standardisé

### 🔥 **Très Difficile - En cours**
- Détection automatique dans les logiciels
- Intégration native dans Adobe, Google, OpenAI
- Métadonnées persistantes inter-plateformes
- Prévention de la falsification des badges

## Impact Potentiel

- **Transparence universelle** : Chaque contenu IA clairement identifié
- **Confiance du public** : Distinction claire humain/IA
- **Protection des créateurs** : Valorisation du travail humain
- **Standard international** : Adoption par l'industrie tech

---

*Projet développé par Philippe Bourque (Cérebrum) - Contribuer sur GitHub*`,
        en: `# Badge AI - Transparency System (In Development)

## Current Project Status

**🚀 Active website:** [badgeIA.org](https://badgeIA.org)

**Phase 1 - Self-declaration:** ✅ **Functional**
- Web interface allowing creators to generate AI badges
- 5 transparency categories (0 = Human only, 4 = AI only)
- 3 media types: Audio (S), Visual (V), Text (T)
- System inspired by Creative Commons

**Phase 2 - Automatic detection:** 🔄 **In development (very difficult)**
- Integration into creation software (Photoshop, ChatGPT, etc.)
- Automatic metadata with cryptographic signature
- Standardized API for platforms
- Real-time AI usage detection

## The Badge AI System

### 5 Contribution Levels
- **0**: Human Only
- **1**: Human with AI Assistance
- **2**: AI Collaboration (balanced)
- **3**: AI Directed (human prompts)
- **4**: AI Only

### 3 Media Types
- **S-AI-0-4**: Audio (Audio, music, voice, effects)
- **V-AI-0-4**: Visual (Images, videos, animations)
- **T-AI-0-4**: Text (Written content, code, data)

### Technical Vision
- Metadata embedded in files (EXIF, ID3, HTML meta)
- Cross-platform interoperability
- Complete history of AI modifications
- Anti-tampering cryptographic signatures

## Major Technical Challenges

### ✅ **Easy - Already implemented**
- Web badge generation interface
- Creator self-declaration
- Standardized notation system

### 🔥 **Very Difficult - In progress**
- Automatic detection in software
- Native integration in Adobe, Google, OpenAI
- Persistent cross-platform metadata
- Badge tampering prevention

## Potential Impact

- **Universal transparency**: Every AI content clearly identified
- **Public trust**: Clear human/AI distinction
- **Creator protection**: Human work valorization
- **International standard**: Tech industry adoption

---

*Project developed by Philippe Bourque (Cérebrum) - Contribute on GitHub*`,
      },
      resources: [
        {
          title: {
            fr: "Badge IA - Site officiel",
            en: "Badge AI - Official site",
          },
          type: "link",
          url: "https://badgeIA.org",
          description: {
            fr: "Interface de génération de badges de transparence IA",
            en: "AI transparency badge generation interface",
          },
        },
        {
          title: {
            fr: "Vision technique Badge IA",
            en: "Badge AI technical vision",
          },
          type: "link",
          url: "https://badgeIA.org/vision",
          description: {
            fr: "Feuille de route pour l'intégration universelle",
            en: "Roadmap for universal integration",
          },
        },
      ],
    },
    meta: {
      difficulty: "hard",
      timeframe: "medium-term",
      impact: "international",
      category: "technical",
    },
  },
  {
    id: 6,
    slug: "loi-25",
    status: "ready",
    title: {
      fr: "Utiliser les lois existantes (Loi 25, RGPD)",
      en: "Leverage existing laws (Law 25, GDPR)",
    },
    description: {
      fr: "Utiliser pleinement les cadres juridiques actuels pour exiger le consentement explicite",
      en: "Fully utilize current legal frameworks to require explicit consent",
    },
    shortDescription: {
      fr: "Application des lois actuelles",
      en: "Apply current laws",
    },
    content: {
      letter: {
        fr: `**IA et données personnelles : le Québec face au pillage algorithmique**

L'intelligence artificielle transforme notre monde à une vitesse vertigineuse, mais dans l'ombre de cette révolution se cache une réalité méconnue : l'entraînement d'un modèle d'IA est un acte techniquement irréversible. Une fois nos données intégrées aux poids mathématiques de ces systèmes, il devient impossible d'en effacer précisément la trace. Lorsque ces modèles sont ensuite distribués en code source ouvert, chaque copie se multiplie à travers le monde, rendant toute violation initiale permanente et globale.

D'ici à un mois, Meta commencera à ingérer les publications européennes pour entraîner son intelligence artificielle. En Australie, c'est déjà chose faite, sans possibilité d'opposition réelle : photos de famille, visages d'enfants, créations artistiques, tout devient carburant algorithmique. Pourquoi penser que le Québec serait épargné? Rien n'indique que Meta ou d'autres géants technologiques aient respecté leur obligation légale d'obtenir un consentement explicite des Québécois pour cette utilisation radicalement nouvelle de leurs données personnelles.

Or, au Québec, la Loi 25 est particulièrement claire et rigoureuse : tout usage commercial nouveau de renseignements personnels exige un consentement manifeste, libre et éclairé. L'entraînement d'une IA commerciale ne faisait certainement pas partie des intentions initiales des utilisateurs de plateformes comme Facebook, Instagram, ou YouTube. Toute collecte sans consentement constituerait donc une violation majeure de notre législation. Les sanctions potentielles sont considérables : jusqu'à 4% du chiffre d'affaires mondial pour les infractions graves pour les entreprises (plus de 7 milliards de dollars canadiens pour Meta seule) et jusqu'à 100 000 dollars d'amende personnelle pour les dirigeants, assortie d'un casier judiciaire au Québec.

Au-delà de la protection des données personnelles, le droit d'auteur canadien protège également chaque œuvre diffusée sur ces plateformes, avec des indemnisations pouvant atteindre 20 000 dollars par infraction. Considérant les millions d'œuvres québécoises concernées, l'ampleur du préjudice potentiel est stupéfiante.

Plus alarmant encore : plusieurs de ces entreprises ont déjà reconnu utiliser massivement des données de réseaux sociaux. Meta exploite ouvertement les contenus de Facebook et Instagram pour ses modèles LLaMA. Google a modifié sa politique pour pouvoir utiliser toutes les données publiques du web, incluant YouTube. OpenAI a conclu un partenariat avec Reddit après avoir exploité ses données pendant des années. xAI de Elon Musk puise directement dans X/Twitter. Anthropic, bien que plus discret, invoque le « fair use » pour justifier l'utilisation de contenus protégés.

Cet argument du « fair use », brandi par certaines entreprises comme bouclier juridique, s'effondre toutefois face à notre cadre légal. La Loi 25 ne s'intéresse pas à la transformation des données, mais à l'existence d'un consentement explicite pour leur utilisation. Sur ce point fondamental, la loi est limpide : sans consentement, l'infraction est caractérisée, peu importe que les données soient « transformées » plutôt que « copiées ».

J'appelle donc la Commission d'accès à l'information du Québec à exiger sans délai la publication des Évaluations des facteurs relatifs à la vie privée (EFVP) de ces entreprises pour leurs projets d'IA concernant des données québécoises. Je demande que toute collecte soit suspendue jusqu'à l'obtention du consentement explicite requis par la loi. J'invite le ministre Gilles Bélanger, responsable de la Cybersécurité et du Numérique, et le ministre Mathieu Lacombe, responsable de la Culture et des Communications, à unir leurs efforts pour protéger notre patrimoine numérique et culturel.

Je sollicite également tous les partis politiques afin qu'ils déposent une motion unanime pour défendre les droits fondamentaux des Québécois face à cette extraction massive de données personnelles et culturelles. Les géants technologiques, qui accumulent des fortunes colossales grâce à cette exploitation sans frein, doivent comprendre que personne n'est au-dessus des lois québécoises.

La situation est d'autant plus préoccupante que chaque modèle d'IA entraîné pourrait constituer une infraction distincte. Avec Meta, Google, OpenAI et autres qui déploient de nouvelles versions de leurs modèles tous les quelques mois, le préjudice et les pénalités potentielles se multiplient à un rythme vertigineux – possiblement plus d'une centaine de milliards de dollars.

Agir, oui, mais agir maintenant. Chaque jour perdu nous rapproche d'un point de non-retour. Si la CAI manque de ressources ou hésite à affronter seule ces géants, alors créons une coalition de citoyens, d'artistes, de juristes et d'experts pour l'appuyer. Collectivement, le Québec s'est doté d'une loi robuste et d'institutions capables de la faire respecter. Il est temps de démontrer que notre souveraineté numérique n'est pas qu'un concept abstrait.

Ces propos sont formulés de bonne foi dans le cadre d'un débat public essentiel pour la protection des droits fondamentaux des citoyens québécois et pour la préservation de notre patrimoine culturel à l'ère numérique.

**Philippe Bourque, Bs. ING**  
Artiste, entrepreneur et scientifique  
Saint-François-de-l'île-d'Orléans  
6 mai 2025`,
        en: `**AI and personal data: Quebec facing algorithmic pillaging**

Artificial intelligence is transforming our world at a dizzying pace, but in the shadow of this revolution lies an unknown reality: training an AI model is a technically irreversible act. Once our data is integrated into the mathematical weights of these systems, it becomes impossible to precisely erase its trace. When these models are then distributed as open source, each copy multiplies across the world, making any initial violation permanent and global.

Within a month, Meta will begin ingesting European publications to train its artificial intelligence. In Australia, this is already done, without any real possibility of opposition: family photos, children's faces, artistic creations, everything becomes algorithmic fuel. Why think that Quebec would be spared? Nothing indicates that Meta or other tech giants have respected their legal obligation to obtain explicit consent from Quebecers for this radically new use of their personal data.

Yet, in Quebec, Law 25 is particularly clear and rigorous: any new commercial use of personal information requires manifest, free and informed consent. Training a commercial AI was certainly not part of the initial intentions of users of platforms like Facebook, Instagram, or YouTube. Any collection without consent would therefore constitute a major violation of our legislation. The potential sanctions are considerable: up to 4% of worldwide revenue for serious infractions for companies (more than 7 billion Canadian dollars for Meta alone) and up to 100,000 dollars in personal fines for executives, with a criminal record in Quebec.

Beyond personal data protection, Canadian copyright also protects every work broadcast on these platforms, with compensation that can reach 20,000 dollars per infringement. Considering the millions of Quebec works concerned, the magnitude of the potential damage is staggering.

Even more alarming: several of these companies have already acknowledged using social media data massively. Meta openly exploits Facebook and Instagram content for its LLaMA models. Google has modified its policy to be able to use all public web data, including YouTube. OpenAI has concluded a partnership with Reddit after exploiting its data for years. Elon Musk's xAI draws directly from X/Twitter. Anthropic, while more discreet, invokes "fair use" to justify the use of protected content.

This "fair use" argument, brandished by some companies as a legal shield, however collapses in the face of our legal framework. Law 25 is not interested in data transformation, but in the existence of explicit consent for its use. On this fundamental point, the law is clear: without consent, the infraction is characterized, regardless of whether the data is "transformed" rather than "copied".

I therefore call on Quebec's Commission d'accès à l'information to immediately demand the publication of Privacy Impact Assessments (PIAs) from these companies for their AI projects concerning Quebec data. I demand that all collection be suspended until obtaining the explicit consent required by law. I invite Minister Gilles Bélanger, responsible for Cybersecurity and Digital, and Minister Mathieu Lacombe, responsible for Culture and Communications, to unite their efforts to protect our digital and cultural heritage.

I also solicit all political parties to table a unanimous motion to defend the fundamental rights of Quebecers against this massive extraction of personal and cultural data. Tech giants, who accumulate colossal fortunes thanks to this unbridled exploitation, must understand that no one is above Quebec laws.

The situation is all the more worrying as each trained AI model could constitute a distinct infraction. With Meta, Google, OpenAI and others deploying new versions of their models every few months, the damage and potential penalties multiply at a dizzying pace – possibly more than a hundred billion dollars.

Act, yes, but act now. Each lost day brings us closer to a point of no return. If the CAI lacks resources or hesitates to face these giants alone, then let's create a coalition of citizens, artists, lawyers and experts to support it. Collectively, Quebec has equipped itself with robust law and institutions capable of enforcing it. It's time to demonstrate that our digital sovereignty is not just an abstract concept.

These remarks are made in good faith as part of an essential public debate for the protection of the fundamental rights of Quebec citizens and for the preservation of our cultural heritage in the digital age.

**Philippe Bourque, Bs. ENG**  
Artist, entrepreneur and scientist  
Saint-François-de-l'île-d'Orléans  
May 6, 2025`,
      },
      form: {
        type: "cyberimpact",
        config: {
          frenchGroupId: "5",
          englishGroupId: "2",
          accountId: "4eafd57b-a9ce-4713-31b5-9b4ec3d86605",
        },
      },
    },
    meta: {
      difficulty: "easy",
      timeframe: "immediate",
      impact: "national",
      category: "legal",
    },
  },
  {
    id: 7,
    slug: "identite-numerique",
    status: "coming-soon",
    title: {
      fr: "Obtenir rapidement une identité numérique souveraine",
      en: "Rapidly obtain sovereign digital identity",
    },
    description: {
      fr: "Mettre en place une infrastructure d'identité numérique certifiée par l'État québécois",
      en: "Implement digital identity infrastructure certified by the Quebec State",
    },
    shortDescription: {
      fr: "Identité numérique québécoise",
      en: "Quebec digital identity",
    },
    meta: {
      difficulty: "hard",
      timeframe: "long-term",
      impact: "national",
      category: "political",
    },
  },
];
