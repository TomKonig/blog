(() => {
  // ns-hugo-imp:/Users/thomaskonig/Documents/GitHub/blog/themes/alpha/assets/alpha/js/modules/prefetch.js
  var initPrefetch = () => {
    const appendSpeculationScript = () => {
      const speculationScript = document.createElement("script");
      speculationScript.type = "speculationrules";
      const speculationRules = {
        prerender: [
          {
            source: "document",
            where: {
              selector_matches: "[data-prerender=true]"
            },
            eagerness: "conservative"
          }
        ],
        prefetch: [
          {
            source: "document",
            where: {
              selector_matches: "[data-prefetch=true]"
            },
            eagerness: "conservative"
          }
        ]
      };
      speculationScript.textContent = JSON.stringify(speculationRules);
      document.head.appendChild(speculationScript);
    };
    const enableFallback = () => {
      ["prefetch", "prerender"].forEach((rel) => {
        document.querySelectorAll(`a[data-${rel}="true"]`).forEach((link) => {
          if (!link.dataset.resourceFetched) {
            const resourceLink = document.createElement("link");
            resourceLink.rel = rel;
            resourceLink.href = link.href;
            document.head.appendChild(resourceLink);
            link.dataset.resourceFetched = "true";
          }
        });
      });
    };
    const getPrefetchStatus = localStorage.getItem("prefetch");
    if (getPrefetchStatus === null) localStorage.setItem("prefetch", "true");
    if (getPrefetchStatus === "false") return;
    const connection = navigator.connection || {};
    const isSlowConnection = ["slow-2g", "2g", "3g"].includes(
      connection.effectiveType
    );
    const isDataSaverEnabled = connection.saveData === true;
    if (isSlowConnection || isDataSaverEnabled) {
      console.log(
        "Prefetch/prerender disabled due to slow connection or Data Saver mode."
      );
      return;
    } else if (HTMLScriptElement.supports?.("speculationrules")) {
      appendSpeculationScript();
    } else {
      enableFallback();
    }
  };

  // ns-hugo-imp:/Users/thomaskonig/Documents/GitHub/blog/themes/alpha/assets/alpha/js/modules/lazy-load.js
  var initLazyLoad = () => {
    const selectors = [".article-content", ".page-content", ".story-content"];
    selectors.forEach((selector) => {
      const container = document.querySelector(selector);
      if (container) {
        const firstChild = container.firstElementChild;
        if (firstChild && firstChild.tagName === "FIGURE") {
          const img = firstChild.querySelector('img[loading="lazy"]');
          if (img) {
            img.removeAttribute("loading");
          }
        }
      }
    });
  };

  // ns-hugo-imp:/Users/thomaskonig/Documents/GitHub/blog/themes/alpha/assets/alpha/js/modules/copy-code.js
  var initCopyCode = (i18n) => {
    document.addEventListener("click", (event) => {
      const copyButton = event.target.closest(".copy-button");
      if (!copyButton) return;
      const highlight = copyButton.closest(".highlight");
      const codeBlock = highlight.querySelector("code");
      if (!codeBlock) return;
      navigator.clipboard.writeText(codeBlock.textContent.trim()).then(() => {
        copyButton.textContent = i18n.copied;
        setTimeout(() => copyButton.textContent = i18n.copy, 2e3);
      }).catch((err) => {
        console.error(i18n.failedCopy, err);
      });
    });
    document.querySelectorAll(".highlight").forEach((highlight) => {
      const codeBlock = highlight.querySelector("code");
      if (!codeBlock) return;
      const preElement = highlight.querySelector("pre.chroma");
      if (preElement) {
        preElement.removeAttribute("tabindex");
      }
      const lang = codeBlock.dataset.lang;
      const highlightHeader = document.createElement("div");
      highlightHeader.className = "highlight-header";
      if (lang !== "fallback") {
        const langLabel = document.createElement("span");
        langLabel.textContent = lang.toUpperCase();
        langLabel.className = "language-label";
        highlightHeader.appendChild(langLabel);
      } else {
        const langLabel = document.createElement("span");
        highlightHeader.appendChild(langLabel);
      }
      const copyButton = document.createElement("button");
      copyButton.textContent = i18n.copy;
      copyButton.className = "copy-button";
      copyButton.setAttribute("aria-label", i18n.copyToClipboardAria);
      highlightHeader.appendChild(copyButton);
      highlight.insertAdjacentElement("afterbegin", highlightHeader);
    });
  };

  // ns-hugo-imp:/Users/thomaskonig/Documents/GitHub/blog/themes/alpha/assets/alpha/js/utils.js
  var $ = (selector, scope = document) => scope.querySelector(selector);
  var $$ = (selector, scope = document) => scope.querySelectorAll(selector);
  var errorHandler = (message, type = "error", halt = false) => {
    console[type](message);
    if (halt) {
      throw new Error(message);
    }
  };
  var setAttributes = (el, attrs) => {
    for (const key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  };

  // ns-hugo-imp:/Users/thomaskonig/Documents/GitHub/blog/themes/alpha/assets/alpha/js/modules/menu.js
  var initMenu = (i18n) => {
    const ELEMENTS = {
      header: $('[data-alpha="header"]'),
      menuBtn: $('[data-alpha="menu-button"]'),
      btnIconUse: $('button[data-alpha="menu-button"] svg > use'),
      menuTemplate: $('[data-alpha="menu-template"]'),
      menuTemplateContainer: $('[data-alpha="menu-template-container"]'),
      announcer: $('[data-alpha="announcer"]')
    };
    for (const [key, el] of Object.entries(ELEMENTS)) {
      if (!el) errorHandler(`Missing element: ${key}`, "warn");
    }
    if (!ELEMENTS.menuBtn || !ELEMENTS.menuTemplate || !ELEMENTS.menuTemplateContainer) {
      errorHandler(i18n.menuElemMiss, "error", true);
    }
    const focus = (el) => el.focus();
    let isAnimating = false;
    const toggleMenu = () => {
      if (isAnimating) return;
      isAnimating = true;
      ELEMENTS.header.addEventListener(
        "transitionend",
        () => {
          isAnimating = false;
        },
        { once: true }
      );
      const menuIsOpen = ELEMENTS.menuBtn.getAttribute("aria-expanded") === "true";
      menuIsOpen ? closeMenu() : openMenu();
    };
    const announceMenuState = (isOpen) => {
      if (!ELEMENTS.announcer) return;
      ELEMENTS.announcer.textContent = isOpen ? i18n.menuOpen : i18n.menuClose;
    };
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && ELEMENTS.menuBtn.getAttribute("aria-expanded") === "true") {
        closeMenu();
      }
    });
    const openMenu = () => {
      const menuContent = ELEMENTS.menuTemplate.content.cloneNode(true);
      while (ELEMENTS.menuTemplateContainer.firstChild) {
        ELEMENTS.menuTemplateContainer.removeChild(
          ELEMENTS.menuTemplateContainer.firstChild
        );
      }
      ELEMENTS.menuTemplateContainer.appendChild(menuContent);
      requestAnimationFrame(() => {
        ELEMENTS.header.classList.replace("menu-collapsed", "menu-expanded");
        setAttributes(ELEMENTS.btnIconUse, { href: "#icon-close" });
        setAttributes(ELEMENTS.menuBtn, {
          "aria-pressed": "true",
          "aria-expanded": "true"
        });
        announceMenuState(true);
        const firstFocusableElement = ELEMENTS.menuTemplateContainer.querySelector(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusableElement) {
          firstFocusableElement.focus();
        } else {
          focus(ELEMENTS.menuBtn);
        }
      });
    };
    const closeMenu = () => {
      ELEMENTS.header.classList.replace("menu-expanded", "menu-collapsed");
      setAttributes(ELEMENTS.btnIconUse, { href: "#icon-menu" });
      setAttributes(ELEMENTS.menuBtn, {
        "aria-pressed": "false",
        "aria-expanded": "false"
      });
      ELEMENTS.header.addEventListener(
        "transitionend",
        (event) => {
          if (event.target === ELEMENTS.header && event.propertyName === "height") {
            if (ELEMENTS.menuTemplateContainer.firstChild) {
              ELEMENTS.menuTemplateContainer.innerHTML = "";
            }
          }
        },
        { once: true }
      );
      focus(ELEMENTS.menuBtn);
      announceMenuState(false);
    };
    if (ELEMENTS.menuBtn) {
      ELEMENTS.menuBtn.addEventListener("click", toggleMenu);
    }
  };

  // ns-hugo-imp:/Users/thomaskonig/Documents/GitHub/blog/themes/alpha/assets/alpha/js/modules/color-scheme.js
  var initColorScheme = (i18n) => {
    const ELEMENTS = {
      themeToggleBtn: $('button[data-alpha="theme-button"]'),
      btnIcon: $('button[data-alpha="theme-button"] svg > use')
    };
    const ICONS = {
      dark: "#icon-sun",
      light: "#icon-moon"
    };
    if (!ELEMENTS.themeToggleBtn || !ELEMENTS.btnIcon) {
      console.warn(i18n.colorSchemeElemMiss);
      return;
    }
    const getCurrentTheme = () => {
      return localStorage.theme === "dark" ? "dark" : "light";
    };
    const toggleTheme = () => {
      const currentTheme = getCurrentTheme();
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      localStorage.theme = newTheme;
      applyTheme(newTheme);
    };
    const applyTheme = (theme = getCurrentTheme()) => {
      document.documentElement.classList.toggle("dark", theme === "dark");
      applyIcon(theme);
    };
    const applyIcon = (theme = getCurrentTheme()) => {
      ELEMENTS.btnIcon?.setAttribute("href", ICONS[theme] || ICONS.light);
    };
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      localStorage.setItem("theme", e.matches ? "dark" : "light");
      applyTheme();
    });
    applyIcon();
    ELEMENTS.themeToggleBtn.addEventListener("click", toggleTheme);
  };

  // ns-hugo-imp:/Users/thomaskonig/Documents/GitHub/blog/themes/alpha/assets/alpha/js/modules/ripple-buttons.js
  var initRippleButtons = () => {
    const RIPPLE_CLASS = "ripple";
    const createRipple = (event) => {
      const button = event.currentTarget;
      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - radius;
      const y = event.clientY - rect.top - radius;
      Object.assign(circle.style, {
        width: `${diameter}px`,
        height: `${diameter}px`,
        left: `${x}px`,
        top: `${y}px`
      });
      circle.classList.add(RIPPLE_CLASS);
      const existingRipple = button.querySelector(`.${RIPPLE_CLASS}`);
      if (existingRipple) {
        existingRipple.remove();
      }
      button.appendChild(circle);
      circle.addEventListener("animationend", () => {
        circle.remove();
      });
    };
    $$("button").forEach((button) => {
      button.addEventListener("click", createRipple);
    });
    $$("a.btn-link").forEach((link) => {
      link.addEventListener("click", createRipple);
    });
  };

  // <stdin>
  initPrefetch();
  initLazyLoad();
  var copyCodeI18n = {
    copied: "Copied!",
    copy: "Copy",
    failedCopy: "Failed to copy text:",
    copyToClipboardAria: "Copy to clipboard"
  };
  initCopyCode(copyCodeI18n);
  var menuI18n = {
    menuElemMiss: "Menu elements are missing. Menu is disabled.",
    menuOpen: "Menu opened. Press Escape to close, Tab to navigate within menu.",
    menuClose: "Menu closed."
  };
  initMenu(menuI18n);
  var colorSchemeI18n = {
    colorSchemeElemMiss: "Theme toggle button or icon not found."
  };
  initColorScheme(colorSchemeI18n);
  initRippleButtons();
})();
