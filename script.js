/* ==========================================================
   Your settings
   Once your new email address exists, put it between the quotes,
   like "hello@example.com". The contact button then appears by itself.
   ========================================================== */
const CONTACT_EMAIL = "";

// Tells the CSS that JavaScript is running
document.documentElement.classList.add("js");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


/* ==========================================================
   Languages
   ========================================================== */
const DEFAULT_LANGUAGE = "en";
const languageSwitch = document.getElementById("language-switch");

// Remembering the choice can fail in private windows, so we use try/catch
function getSavedLanguage() {
  try {
    const saved = localStorage.getItem("language");
    return saved in TRANSLATIONS ? saved : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function saveLanguage(code) {
  try {
    localStorage.setItem("language", code);
  } catch {
    // Not a problem: the site still works, it just won't remember the choice
  }
}

function setLanguage(code) {
  const text = TRANSLATIONS[code];

  document.documentElement.lang = code;
  document.title = text["meta.title"];
  document.querySelector('meta[name="description"]').content = text["meta.description"];

  // Every element with data-i18n="key" gets the text belonging to that key
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text[element.dataset.i18n];
  });

  // The same for labels that only screen readers announce
  document.querySelectorAll("[data-i18n-label]").forEach((element) => {
    element.setAttribute("aria-label", text[element.dataset.i18nLabel]);
  });

  languageSwitch.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === code));
  });

  // Keeps the title of an open tool in the current language
  if (toolDialog.open && activeCard) {
    showToolTitle(activeCard);
  }
}

// Makes one button for each language in translations.js
function buildLanguageButtons() {
  Object.keys(TRANSLATIONS).forEach((code) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = TRANSLATIONS[code]["language.button"];
    button.dataset.language = code;
    button.addEventListener("click", () => {
      setLanguage(code);
      saveLanguage(code);
    });
    languageSwitch.append(button);
  });
}


/* ==========================================================
   Mobile menu
   ========================================================== */
const menuButton = document.getElementById("menu-button");
const siteNav = document.getElementById("site-nav");

function setMenuOpen(isOpen) {
  siteNav.classList.toggle("is-open", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

menuButton.addEventListener("click", () => {
  setMenuOpen(!siteNav.classList.contains("is-open"));
});

// Closes the menu after choosing a section
siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});


/* ==========================================================
   Project cards and the mini-tool window
   A card with a filled-in data-tool="..." becomes a working tool.
   ========================================================== */
const toolDialog = document.getElementById("tool-dialog");
const toolFrame = document.getElementById("tool-frame");
const toolTitle = document.getElementById("tool-dialog-title");
let activeCard = null;

function showToolTitle(card) {
  const title = card.querySelector("h3").textContent;
  toolTitle.textContent = title;
  toolFrame.title = title;
}

function openTool(card) {
  activeCard = card;
  showToolTitle(card);
  toolFrame.src = card.dataset.tool;
  toolDialog.showModal();
}

function setUpProjectCards() {
  document.querySelectorAll(".card[data-tool]").forEach((card) => {
    if (!card.dataset.tool) return; // This tool isn't ready yet

    const button = card.querySelector(".card-button");
    card.classList.add("is-live");
    card.querySelector("[data-status]").dataset.i18n = "status.live";
    button.dataset.i18n = "projects.open";
    button.disabled = false;
    button.classList.replace("button-secondary", "button-primary");
    button.addEventListener("click", () => openTool(card));
  });
}

document.getElementById("tool-dialog-close").addEventListener("click", () => {
  toolDialog.close();
});

// Clicking the dark area around the window also closes it
toolDialog.addEventListener("click", (event) => {
  if (event.target === toolDialog) toolDialog.close();
});

// Stops the tool from running in the background once it's closed
toolDialog.addEventListener("close", () => {
  toolFrame.removeAttribute("src");
  activeCard = null;
});


/* ==========================================================
   Contact
   ========================================================== */
function setUpContact() {
  if (!CONTACT_EMAIL) return;

  const link = document.getElementById("contact-email");
  link.href = `mailto:${CONTACT_EMAIL}`;
  link.textContent = CONTACT_EMAIL;
  link.hidden = false;
  document.getElementById("contact-pending").hidden = true;
}


/* ==========================================================
   Fade sections in while scrolling
   ========================================================== */
function setUpReveal() {
  const items = document.querySelectorAll(".reveal");

  if (reducedMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px" });

  items.forEach((item) => observer.observe(item));
}


/* ==========================================================
   Twinkling stars in the background
   ========================================================== */
function setUpStars() {
  const canvas = document.getElementById("stars");
  const context = canvas.getContext("2d");
  let stars = [];

  function createStars() {
    const scale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * scale;
    canvas.height = window.innerHeight * scale;
    context.setTransform(scale, 0, 0, scale, 0, 0);

    // More stars on a bigger screen, up to a maximum of 220
    const amount = Math.min(220, Math.round((window.innerWidth * window.innerHeight) / 7000));
    stars = Array.from({ length: amount }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.3 + 0.3,
      speed: Math.random() * 0.0015 + 0.0004,
      offset: Math.random() * Math.PI * 2,
    }));
  }

  function draw(time) {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);
    stars.forEach((star) => {
      const twinkle = 0.55 + 0.45 * Math.sin(time * star.speed + star.offset);
      context.globalAlpha = reducedMotion ? 0.7 : twinkle;
      context.fillStyle = "#dfe6ff";
      context.beginPath();
      context.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      context.fill();
    });
  }

  function animate(time) {
    draw(time);
    requestAnimationFrame(animate);
  }

  createStars();

  if (reducedMotion) {
    draw(0);
    window.addEventListener("resize", () => {
      createStars();
      draw(0);
    });
  } else {
    window.addEventListener("resize", createStars);
    requestAnimationFrame(animate);
  }
}


/* ==========================================================
   Start everything
   ========================================================== */
buildLanguageButtons();
setUpProjectCards();
setUpContact();
setUpReveal();
setUpStars();
setLanguage(getSavedLanguage());
