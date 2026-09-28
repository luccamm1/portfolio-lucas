const PROJECTS = {
  facturacion: {
    id: "facturacion",
    title: "Sistema de Facturación",
    tag: "Sistema de Facturación",
    tagEn: "Invoicing System",
    year: "2024",
    image: "assets/sistema-facturacion.png",
    heroDesc: {
      es: "Sistema de escritorio para gestión de ventas e inventario con códigos de barras y sincronización en la nube.",
      en: "Desktop system for sales and inventory management with barcodes and cloud sync.",
    },
    steps: {
      es: [
        { title: "Análisis de requisitos", desc: "Se identificaron las necesidades del negocio: gestión de productos, ventas, inventario y facturación." },
        { title: "Diseño de arquitectura", desc: "Se definió la arquitectura desktop con Electron, separando la lógica de negocio de la interfaz." },
        { title: "Desarrollo del core", desc: "Se implementó la gestión de productos, ventas y control de inventario con códigos de barras." },
        { title: "Sincronización cloud", desc: "Se integró Supabase para respaldo y sincronización de datos en la nube." },
        { title: "Pruebas y despliegue", desc: "Se realizaron pruebas de usuario y se generó el instalador de escritorio." },
      ],
      en: [
        { title: "Requirements analysis", desc: "Business needs were identified: product management, sales, inventory and invoicing." },
        { title: "Architecture design", desc: "Desktop architecture was defined with Electron, separating business logic from the interface." },
        { title: "Core development", desc: "Product management, sales and inventory control with barcodes were implemented." },
        { title: "Cloud sync", desc: "Supabase was integrated for cloud backup and data synchronization." },
        { title: "Testing and deployment", desc: "User testing was performed and the desktop installer was generated." },
      ],
    },
    tech: {
      es: [
        { name: "Electron", desc: "Framework para aplicaciones de escritorio multiplataforma con tecnologías web." },
        { name: "React", desc: "Interfaz de usuario componentizada y reactiva." },
        { name: "TypeScript", desc: "Tipado estático para mayor seguridad y mantenibilidad del código." },
        { name: "Tailwind CSS", desc: "Estilos utilitarios para una interfaz moderna y consistente." },
        { name: "Supabase", desc: "Backend en la nube con base de datos PostgreSQL y almacenamiento." },
        { name: "Vite", desc: "Herramienta de build rápida para desarrollo y producción." },
      ],
      en: [
        { name: "Electron", desc: "Framework for cross-platform desktop applications with web technologies." },
        { name: "React", desc: "Component-based, reactive user interface." },
        { name: "TypeScript", desc: "Static typing for greater code safety and maintainability." },
        { name: "Tailwind CSS", desc: "Utility-first styles for a modern, consistent interface." },
        { name: "Supabase", desc: "Cloud backend with PostgreSQL database and storage." },
        { name: "Vite", desc: "Fast build tool for development and production." },
      ],
    },
    challenges: {
      es: [
        { title: "Lectura de códigos de barras", desc: "Se implementó un sistema de escaneo en tiempo real que actualiza el inventario automáticamente." },
        { title: "Sincronización offline/online", desc: "Se diseñó un sistema de cola de sincronización para operar sin conexión y sincronizar al recuperar conectividad." },
      ],
      en: [
        { title: "Barcode scanning", desc: "A real-time scanning system was implemented that updates inventory automatically." },
        { title: "Offline/online sync", desc: "A synchronization queue system was designed to operate offline and sync when connectivity returns." },
      ],
    },
    links: [{ type: "desktop", label: "App de escritorio", labelEn: "Desktop app", url: null }],
  },

  kawsay: {
    id: "kawsay",
    title: "KawSay",
    tag: "KawSay",
    tagEn: "KawSay",
    year: "2025",
    image: "assets/kawsay.png",
    heroDesc: {
      es: "Tienda online de alimentos saludables con carrito de compras y pedidos vía WhatsApp.",
      en: "Healthy food online store with shopping cart and WhatsApp ordering.",
    },
    steps: {
      es: [
        { title: "Diseño UX/UI", desc: "Se creó un diseño orientado a la experiencia de compra en dispositivos móviles." },
        { title: "Desarrollo frontend", desc: "Se construyó la tienda con HTML5, CSS3 y JavaScript vanilla." },
        { title: "Carrito de compras", desc: "Se implementó un carrito con persistencia en localStorage." },
        { title: "Gestión de productos", desc: "Se integró Supabase para almacenar productos y pedidos." },
        { title: "Pedidos por WhatsApp", desc: "Se agregó un sistema de pedidos que abre WhatsApp con el detalle de la compra." },
      ],
      en: [
        { title: "UX/UI design", desc: "A design was created focused on the mobile shopping experience." },
        { title: "Frontend development", desc: "The store was built with HTML5, CSS3 and vanilla JavaScript." },
        { title: "Shopping cart", desc: "A cart with localStorage persistence was implemented." },
        { title: "Product management", desc: "Supabase was integrated to store products and orders." },
        { title: "WhatsApp ordering", desc: "An ordering system was added that opens WhatsApp with the purchase details." },
      ],
    },
    tech: {
      es: [
        { name: "HTML5", desc: "Estructura semántica y accesible para la tienda." },
        { name: "CSS3", desc: "Estilos modernos con animaciones y diseño responsive." },
        { name: "JavaScript", desc: "Lógica del carrito, productos y pedidos sin frameworks." },
        { name: "Supabase", desc: "Base de datos y almacenamiento de imágenes en la nube." },
        { name: "Vercel", desc: "Despliegue con CDN global para carga rápida." },
      ],
      en: [
        { name: "HTML5", desc: "Semantic and accessible structure for the store." },
        { name: "CSS3", desc: "Modern styles with animations and responsive design." },
        { name: "JavaScript", desc: "Cart, products and orders logic without frameworks." },
        { name: "Supabase", desc: "Cloud database and image storage." },
        { name: "Vercel", desc: "Deployment with global CDN for fast loading." },
      ],
    },
    challenges: {
      es: [
        { title: "Pedidos sin backend complejo", desc: "Se usó WhatsApp como canal de pedidos, integrando el carrito directamente con la app de mensajería." },
        { title: "Gestión de productos", desc: "Se implementó un panel simple para administrar productos desde Supabase." },
      ],
      en: [
        { title: "Orders without complex backend", desc: "WhatsApp was used as the order channel, integrating the cart directly with the messaging app." },
        { title: "Product management", desc: "A simple panel was implemented to manage products from Supabase." },
      ],
    },
    links: [{ type: "demo", label: "Demo", labelEn: "Demo", url: "https://kawsayweb.vercel.app" }],
  },

  dripping: {
    id: "dripping",
    title: "Dripping Style",
    tag: "Dripping Style",
    tagEn: "Dripping Style",
    year: "2026",
    image: "assets/dripping-style.png",
    heroDesc: {
      es: "E-commerce moderno con pasarela de pagos Mercado Pago y panel de administración completo.",
      en: "Modern e-commerce with Mercado Pago payment gateway and full admin panel.",
    },
    steps: {
      es: [
        { title: "Arquitectura full-stack", desc: "Se diseñó una aplicación con Next.js combinando frontend y API routes." },
        { title: "Catálogo de productos", desc: "Se implementó un catálogo dinámico con categorías y búsqueda." },
        { title: "Carrito y checkout", desc: "Se desarrolló el flujo de carrito y checkout con pasarela de pagos." },
        { title: "Pasarela de pagos", desc: "Se integró Mercado Pago para procesar pagos de forma segura." },
        { title: "Panel de administración", desc: "Se creó un panel para gestionar productos, pedidos y clientes." },
      ],
      en: [
        { title: "Full-stack architecture", desc: "An application was designed with Next.js combining frontend and API routes." },
        { title: "Product catalog", desc: "A dynamic catalog with categories and search was implemented." },
        { title: "Cart and checkout", desc: "The cart and checkout flow with payment gateway was developed." },
        { title: "Payment gateway", desc: "Mercado Pago was integrated to process payments securely." },
        { title: "Admin panel", desc: "A panel was created to manage products, orders and customers." },
      ],
    },
    tech: {
      es: [
        { name: "Next.js", desc: "Framework React con SSR y API routes para full-stack." },
        { name: "React", desc: "Interfaces componentizadas y reactivas." },
        { name: "TypeScript", desc: "Tipado estático para código más seguro y mantenible." },
        { name: "Tailwind CSS", desc: "Estilos utilitarios para diseño moderno y responsive." },
        { name: "Supabase", desc: "Base de datos PostgreSQL y autenticación de usuarios." },
        { name: "Mercado Pago", desc: "Pasarela de pagos integrada para cobros online." },
      ],
      en: [
        { name: "Next.js", desc: "React framework with SSR and API routes for full-stack." },
        { name: "React", desc: "Component-based, reactive interfaces." },
        { name: "TypeScript", desc: "Static typing for safer, more maintainable code." },
        { name: "Tailwind CSS", desc: "Utility-first styles for modern, responsive design." },
        { name: "Supabase", desc: "PostgreSQL database and user authentication." },
        { name: "Mercado Pago", desc: "Integrated payment gateway for online payments." },
      ],
    },
    challenges: {
      es: [
        { title: "Integración de pagos", desc: "Se implementó el flujo de Mercado Pago con webhooks para confirmar pagos automáticamente." },
        { title: "Panel administrativo", desc: "Se creó un panel completo para gestionar inventario, pedidos y clientes sin necesidad de código." },
      ],
      en: [
        { title: "Payment integration", desc: "The Mercado Pago flow was implemented with webhooks to automatically confirm payments." },
        { title: "Admin panel", desc: "A complete panel was created to manage inventory, orders and customers without code." },
      ],
    },
    links: [{ type: "demo", label: "Demo", labelEn: "Demo", url: "https://dripping-style.vercel.app" }],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("p");
  const project = PROJECTS[projectId];

  if (!project) {
    window.location.href = "index.html#proyectos";
    return;
  }

  let lang = localStorage.getItem("lang") || "es";

  function render() {
    document.documentElement.lang = lang;
    const t = (obj) => obj[lang];

    document.title = `${project.title} | Lucas Medina`;

    document.getElementById("project-hero-content").innerHTML = `
      <div class="project-hero-info reveal visible">
        <div class="project-hero-meta">
          <span class="project-hero-tag">${t(project.tag ? { es: project.tag, en: project.tagEn } : { es: "", en: "" })}</span>
          <span class="project-year">${project.year}</span>
        </div>
        <h1 class="project-hero-title">${project.title}</h1>
        <p class="project-hero-desc">${t(project.heroDesc)}</p>
      </div>
      <div class="project-hero-image reveal visible">
        <img src="${project.image}" alt="${project.title}">
      </div>
    `;

    document.getElementById("detail-tag").textContent = lang === "es" ? "Proceso" : "Process";
    document.getElementById("tech-tag").textContent = lang === "es" ? "Stack" : "Stack";
    document.getElementById("challenge-tag").textContent = lang === "es" ? "Desafíos" : "Challenges";

    document.getElementById("project-steps").innerHTML = t(project.steps).map(
      (step, i) => `
      <div class="project-step reveal">
        <div class="project-step-number">${String(i + 1).padStart(2, "0")}</div>
        <h3 class="project-step-title">${step.title}</h3>
        <p class="project-step-desc">${step.desc}</p>
      </div>
    `
    ).join("");

    document.getElementById("project-tech-detail").innerHTML = t(project.tech).map(
      (tech) => `
      <div class="tech-detail-card reveal">
        <h3 class="tech-detail-name">${tech.name}</h3>
        <p class="tech-detail-desc">${tech.desc}</p>
      </div>
    `
    ).join("");

    document.getElementById("project-challenges").innerHTML = t(project.challenges).map(
      (ch) => `
      <div class="challenge-card reveal">
        <h3 class="challenge-title">${ch.title}</h3>
        <p class="challenge-desc">${ch.desc}</p>
      </div>
    `
    ).join("");

    document.getElementById("project-links").innerHTML = project.links
      .map((link) => {
        const label = lang === "es" ? link.label : link.labelEn;
        if (link.url) {
          return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">${label}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </a>`;
        }
        return `<span class="btn btn-disabled">${label}</span>`;
      })
      .join("");

    I18n.applyLang(lang);

    document.getElementById("lang-toggle").addEventListener("click", () => {
      lang = lang === "es" ? "en" : "es";
      render();
    });

    const revealElements = document.querySelectorAll(".reveal");
    const observerReveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observerReveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    revealElements.forEach((el) => observerReveal.observe(el));
  }

  render();
});
