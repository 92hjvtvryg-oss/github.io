/*
  All the text on the site, per language.

  Changing text: edit it here (not in index.html), in every language.

  Adding a language: copy the whole "nl" block, change "nl" to the new
  language code (for example "de"), and translate the text. A button for
  the new language then appears in the menu automatically.
*/
const TRANSLATIONS = {
  en: {
    "language.button": "EN",

    "meta.title": "Moonpage — Portfolio and projects",
    "meta.description": "Moonpage is my portfolio: mini-tools, experiments and everything I learn along the way.",

    "skip": "Skip to content",
    "nav.label": "Main navigation",
    "nav.menu": "Open or close menu",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "lang.label": "Choose language",

    "hero.eyebrow": "Signal from a developer in training",
    "hero.subtitle": "My portfolio and projects",
    "hero.text": "Small tools, big ideas, and everything I learn on the way to the moon.",
    "hero.ctaProjects": "Explore projects",
    "hero.ctaContact": "Make contact",

    "about.eyebrow": "About me",
    "about.title": "Still learning. Already launching.",
    "about.p1": "Welcome aboard Moonpage, my small corner of the internet and the launch pad for everything I'm building.",
    "about.p2": "I like turning ideas into tools people can actually use. Every project starts as a \"what if\", and with enough curiosity and bug fixing it might just reach orbit.",
    "about.p3": "I'm early in my journey, and I'm sharing it as I go. Some experiments work the first time. Most don't. That's the fun part.",
    "about.fact1Label": "Now learning",
    "about.fact2Label": "Now building",
    "about.fact2": "Three mini-tools",
    "about.fact3Label": "Fuelled by",
    "about.fact3": "Curiosity",

    "projects.eyebrow": "Projects",
    "projects.title": "Mini-tools in the launch bay",
    "projects.intro": "Three tools I'm building. Each one will open and work right here on this page once it's ready.",
    "projects.soon": "Coming soon",
    "projects.open": "Open tool",
    "status.dev": "In development",
    "status.live": "Live",
    "tool.close": "Close",
    "tag.finance": "Finance",
    "tag.design": "Design",
    "tag.astronomy": "Astronomy",
    "p1.title": "Simple Bookkeeping",
    "p1.text": "A simple platform to keep track of income and expenses, so you can see where you stand without wrestling a spreadsheet.",
    "p2.title": "Theme Studio",
    "p2.text": "Pick and adjust themes for your socials, and shape a look that's unmistakably yours.",
    "p3.title": "Moon Phase Tracker",
    "p3.text": "See tonight's moon phase and count down to the next full moon. The obvious tool for a site with this name.",

    "skills.eyebrow": "Skills",
    "skills.title": "Current toolkit",
    "skills.intro": "Everything here is still growing, and that's the point.",
    "skills.web": "Building for the web",
    "skills.learning": "Now learning",
    "skills.beginner": "Beginner",
    "skills.people": "People skills",
    "skills.problem": "Problem solving",
    "skills.creative": "Creative thinking",
    "skills.curiosity": "Curiosity",
    "skills.languages": "Languages",
    "skills.dutch": "Dutch",
    "skills.english": "English",

    "contact.eyebrow": "Contact",
    "contact.title": "Open a channel",
    "contact.text": "Got an idea, a question or feedback on one of my tools? I'd love to hear it.",
    "contact.pending": "A dedicated email address is on its way. Check back soon.",

    "footer.built": "Built with HTML, CSS and JavaScript."
  },

  nl: {
    "language.button": "NL",

    "meta.title": "Moonpage — Portfolio en projecten",
    "meta.description": "Moonpage is mijn portfolio: mini-tools, experimenten en alles wat ik onderweg leer.",

    "skip": "Direct naar de inhoud",
    "nav.label": "Hoofdmenu",
    "nav.menu": "Menu openen of sluiten",
    "nav.about": "Over mij",
    "nav.projects": "Projecten",
    "nav.skills": "Vaardigheden",
    "nav.contact": "Contact",
    "lang.label": "Kies een taal",

    "hero.eyebrow": "Signaal van een developer in opleiding",
    "hero.subtitle": "Mijn portfolio en projecten",
    "hero.text": "Kleine tools, grote ideeën en alles wat ik leer op weg naar de maan.",
    "hero.ctaProjects": "Bekijk projecten",
    "hero.ctaContact": "Neem contact op",

    "about.eyebrow": "Over mij",
    "about.title": "Nog aan het leren. Nu al aan het lanceren.",
    "about.p1": "Welkom aan boord van Moonpage, mijn eigen plekje op internet en het lanceerplatform voor alles wat ik bouw.",
    "about.p2": "Ik vind het leuk om ideeën om te zetten in tools die mensen echt kunnen gebruiken. Elk project begint met een \"wat als\", en met genoeg nieuwsgierigheid en bugs oplossen komt het misschien wel in een baan om de aarde.",
    "about.p3": "Ik sta nog aan het begin en deel mijn reis gewoon onderweg. Sommige experimenten werken meteen. De meeste niet. Dat maakt het juist leuk.",
    "about.fact1Label": "Nu aan het leren",
    "about.fact2Label": "Nu aan het bouwen",
    "about.fact2": "Drie mini-tools",
    "about.fact3Label": "Draait op",
    "about.fact3": "Nieuwsgierigheid",

    "projects.eyebrow": "Projecten",
    "projects.title": "Mini-tools op het lanceerplatform",
    "projects.intro": "Drie tools waar ik aan werk. Zodra ze klaar zijn, openen en werken ze gewoon hier op deze pagina.",
    "projects.soon": "Binnenkort",
    "projects.open": "Open tool",
    "status.dev": "In ontwikkeling",
    "status.live": "Live",
    "tool.close": "Sluiten",
    "tag.finance": "Financiën",
    "tag.design": "Design",
    "tag.astronomy": "Astronomie",
    "p1.title": "Simpele Boekhouding",
    "p1.text": "Een simpel platform om je inkomsten en uitgaven bij te houden, zodat je ziet hoe je ervoor staat zonder te worstelen met een spreadsheet.",
    "p2.title": "Theme Studio",
    "p2.text": "Kies en pas thema's aan voor je socials, en creëer een uitstraling die helemaal van jou is.",
    "p3.title": "Maanfase Tracker",
    "p3.text": "Zie de maanfase van vanavond en tel af naar de volgende volle maan. De logische tool voor een site met deze naam.",

    "skills.eyebrow": "Vaardigheden",
    "skills.title": "Mijn huidige toolkit",
    "skills.intro": "Alles hier groeit nog, en dat is precies de bedoeling.",
    "skills.web": "Bouwen voor het web",
    "skills.learning": "Nu aan het leren",
    "skills.beginner": "Beginner",
    "skills.people": "Persoonlijke vaardigheden",
    "skills.problem": "Problemen oplossen",
    "skills.creative": "Creatief denken",
    "skills.curiosity": "Nieuwsgierigheid",
    "skills.languages": "Talen",
    "skills.dutch": "Nederlands",
    "skills.english": "Engels",

    "contact.eyebrow": "Contact",
    "contact.title": "Open een kanaal",
    "contact.text": "Heb je een idee, een vraag of feedback op een van mijn tools? Ik hoor het graag.",
    "contact.pending": "Er komt binnenkort een apart e-mailadres. Kom snel nog eens terug.",

    "footer.built": "Gebouwd met HTML, CSS en JavaScript."
  }
};
