const I18n = (() => {
  const translations = {
    es: {
      "nav.home": "Inicio",
      "nav.projects": "Proyectos",
      "nav.skills": "Habilidades",
      "nav.contact": "Contacto",
      "nav.menu": "Abrir menú",
      "hero.badge": "Disponible para proyectos",
      "hero.greeting": "Hola, soy",
      "hero.description": "Creo aplicaciones web y de escritorio modernas con React, TypeScript y Next.js. Apasionado por construir experiencias digitales funcionales y bien diseñadas.",
      "hero.viewProjects": "Ver proyectos",
      "hero.contact": "Contactar",
      "hero.scroll": "Desplázate",
      "projects.tag": "Portfolio",
      "projects.title": "Proyectos Destacados",
      "projects.desc": "Proyectos reales con tecnologías modernas.",
      "projects.invoicing": "Sistema de Facturación",
      "projects.invoicingDesc": "Sistema de escritorio para gestión de ventas e inventario con códigos de barras. Sincronización en la nube con Supabase.",
      "projects.kawsay": "KawSay",
      "projects.kawsayDesc": "Tienda online de alimentos saludables con carrito de compras, gestión de productos y pedidos vía WhatsApp.",
      "projects.dripping": "Dripping Style",
      "projects.drippingDesc": "E-commerce moderno con pasarela de pagos Mercado Pago, carrito de compras y panel de administración completo.",
      "projects.demo": "Demo",
      "projects.desktop": "App de escritorio",
      "skills.tag": "Stack",
      "skills.title": "Tecnologías que domino",
      "skills.desc": "Herramientas con las que construyo productos.",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend & Tools",
      "contact.tag": "Contacto",
      "contact.title": "¿Trabajamos juntos?",
      "contact.desc": "Estoy abierto a nuevos proyectos y oportunidades.",
      "contact.email": "Email",
      "contact.github": "GitHub",
      "contact.whatsapp": "WhatsApp",
      "contact.chat": "Chateemos",
      "contact.send": "Enviar mensaje",
      "contact.viewRepos": "Ver repositorios",
      "contact.messageMe": "Escribirme",
      "footer.rights": "Todos los derechos reservados.",
      "project.back": "Volver a proyectos",
      "project.howMade": "Cómo se creó",
      "project.techUsed": "Tecnologías usadas",
      "project.challenges": "Desafíos y soluciones",
    },
    en: {
      "nav.home": "Home",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "nav.menu": "Open menu",
      "hero.badge": "Available for projects",
      "hero.greeting": "Hi, I'm",
      "hero.description": "I build modern web and desktop applications with React, TypeScript and Next.js. Passionate about creating functional, well-designed digital experiences.",
      "hero.viewProjects": "View projects",
      "hero.contact": "Contact",
      "hero.scroll": "Scroll",
      "projects.tag": "Portfolio",
      "projects.title": "Featured Projects",
      "projects.desc": "Real projects with modern technologies.",
      "projects.invoicing": "Invoicing System",
      "projects.invoicingDesc": "Desktop system for sales and inventory management with barcodes. Cloud sync with Supabase.",
      "projects.kawsay": "KawSay",
      "projects.kawsayDesc": "Healthy food online store with shopping cart, product management and WhatsApp ordering.",
      "projects.dripping": "Dripping Style",
      "projects.drippingDesc": "Modern e-commerce with Mercado Pago payment gateway, shopping cart and full admin panel.",
      "projects.demo": "Demo",
      "projects.desktop": "Desktop app",
      "skills.tag": "Stack",
      "skills.title": "Technologies I Master",
      "skills.desc": "Tools I use to build products.",
      "skills.frontend": "Frontend",
      "skills.backend": "Backend & Tools",
      "contact.tag": "Contact",
      "contact.title": "Shall we work together?",
      "contact.desc": "I'm open to new projects and opportunities.",
      "contact.email": "Email",
      "contact.github": "GitHub",
      "contact.whatsapp": "WhatsApp",
      "contact.chat": "Let's chat",
      "contact.send": "Send message",
      "contact.viewRepos": "View repositories",
      "contact.messageMe": "Message me",
      "footer.rights": "All rights reserved.",
      "project.back": "Back to projects",
      "project.howMade": "How it was built",
      "project.techUsed": "Technologies used",
      "project.challenges": "Challenges and solutions",
    },
  };

  const metaTranslations = {
    es: {
      title: "Lucas Medina | Full-Stack Developer",
      description: "Portfolio de Lucas Medina, desarrollador full-stack especializado en React, TypeScript, Next.js y Supabase.",
    },
    en: {
      title: "Lucas Medina | Full-Stack Developer",
      description: "Portfolio of Lucas Medina, full-stack developer specialized in React, TypeScript, Next.js and Supabase.",
    },
  };

  let currentLang = localStorage.getItem("lang") || "es";

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);

    document.documentElement.lang = lang;

    const meta = metaTranslations[lang];
    if (meta) {
      document.title = meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.content = meta.description;
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        if (el.querySelector("span, svg, img")) {
          const textNode = Array.from(el.childNodes).find(
            (n) => n.nodeType === Node.TEXT_NODE && n.textContent.trim()
          );
          if (textNode) textNode.textContent = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    const toggle = document.getElementById("lang-toggle");
    if (toggle) {
      toggle.textContent = lang === "es" ? "EN" : "ES";
      toggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
    }

    const navToggle = document.querySelector(".nav-toggle");
    if (navToggle) {
      navToggle.setAttribute("aria-label", translations[lang]["nav.menu"]);
    }
  }

  function toggle() {
    applyLang(currentLang === "es" ? "en" : "es");
  }

  function init() {
    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", toggle);
    }
    applyLang(currentLang);
  }

  return { init, toggle, applyLang };
})();
