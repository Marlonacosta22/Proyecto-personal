/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */

/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "meta.description": "Portafolio bilingüe de Marlon Acosta Roa, estudiante de Programación Web en UNIESPINAL.",
  "menu.open": "Abrir menú",
  "menu.close": "Cerrar menú",
  "back.top": "Volver al inicio",
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Desarrollador de Software · Estudiante de Programación Web",

  "about.title":          "Sobre Mí",
  "about.text":           "Soy estudiante de cuarto semestre del Técnico en Programación Web en UNIESPINAL. Me apasiona el desarrollo de software integral, desde la creación de aplicaciones de escritorio en Java y bases de datos SQL, hasta el desarrollo móvil y web con tecnologías como PHP y Laravel. Soy una persona curiosa que disfruta aprendiendo sobre arquitectura de hardware, simulación de redes y leyendo sobre innovación tecnológica. Me gusta enfrentar problemas lógicos y construir soluciones eficientes.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "El Espinal (Tolima), Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (B1)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a proyectos y prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "DESARROLLO",
  "interest.2": "REDES / SERVIDORES",
  "interest.3": "INNOVACIÓN",
  "interest.4": "MODDING / JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.java":          "Java (Swing y escritorio)",
  "skill.mobile":        "Desarrollo móvil con bloques",
  "skill.support":       "Soporte técnico y Logística",
  "skill.teamwork":      "Metodologías Ágiles",
  "skill.problem":       "Resolución de problemas lógicos",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.period": "En curso (4.º semestre)",
  "edu.1.text":  "Formación orientada al desarrollo de software, modelado de bases de datos, teoría general de sistemas y metodologías ágiles.",
  "edu.2.title": "Desarrollo Lógico e Infraestructura",
  "edu.2.provider": "Formación autodidacta",
  "edu.2.period": "Aprendizaje continuo",
  "edu.2.text":  "Estudio práctico sobre arquitectura de hardware, simulación de redes en Cisco Packet Tracer y administración de servidores virtualizados.",

  "exp.1.title": "Prácticas de Desarrollo Frontend",
  "exp.1.text":  "Construcción y maquetación de interfaces de usuario interactivas y responsivas aplicando HTML, CSS, JavaScript y frameworks como Bootstrap 5.",
  "exp.2.title": "Lógica de Servidor y Bases de Datos",
  "exp.2.provider": "Proyectos académicos",
  "exp.2.text":  "Ejercicios prácticos de estructuración de bases de datos relacionales (MySQL) y desarrollo de backend utilizando PHP en entornos locales.",

  "portfolio.title": "Proyectos",
  "project.1.title": "Portafolio personal bilingüe",
  "project.1.text": "Página adaptable con secciones de perfil, habilidades, formación y proyectos. Tecnologías: HTML5, CSS3 y JavaScript. Publicada con GitHub Pages.",
  "project.1.image": "Vista del portafolio personal bilingüe",
  "project.1.link": "Ver código en GitHub →",
  "tools.note": "Herramientas: OpenAI Codex (IA) ayudó a revisar las traducciones, el código y este borrador. Detalles en NOTES.md.",
  "tools.link": "Notas de traducción y herramientas",

  "contact.title":         "Contacto",
  "contact.intro":         "Si te interesan mis proyectos o buscas un perfil orientado al desarrollo de software y la resolución de problemas, no dudes en escribirme.",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "Marlon Acosta Roa",

  "footer.note": "Marlon Acosta Roa · Técnico en Programación Web · UNIESPINAL"
};

/* ------------------------------------------------------------
   2. ENGLISH TEXTS
   ------------------------------------------------------------ */
const EN = {
  "meta.description": "Bilingual portfolio of Marlon Acosta Roa, a Web Programming student at UNIESPINAL.",
  "menu.open": "Open menu",
  "menu.close": "Close menu",
  "back.top": "Back to top",
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Software Developer · Web Programming Student",

  "about.title":          "About Me",
  "about.text":           "I am a fourth-semester Web Programming student at UNIESPINAL. I build learning projects with Java, SQL, PHP, and Laravel, and I am developing my web and mobile programming skills. I enjoy solving logical problems and building efficient solutions.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "El Espinal (Tolima), Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (B1)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to projects and internships",
  "about.interestsTitle": "Interests",

  "interest.1": "DEVELOPMENT",
  "interest.2": "NETWORKS / SERVERS",
  "interest.3": "INNOVATION",
  "interest.4": "MODDING / GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.java":          "Java (Swing and desktop apps)",
  "skill.mobile":        "Block-based mobile development",
  "skill.support":       "Technical support & Logistics",
  "skill.teamwork":      "Agile Methodologies",
  "skill.problem":       "Logical problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.period": "In progress (fourth semester)",
  "edu.1.text":  "Training focused on software development, database modeling, general systems theory, and agile methodologies.",
  "edu.2.title": "Logic Development and Infrastructure",
  "edu.2.provider": "Self-directed study",
  "edu.2.period": "Ongoing learning",
  "edu.2.text":  "Practical study on hardware architecture, network simulation in Cisco Packet Tracer, and virtualized server administration.",

  "exp.1.title": "Frontend Development Practices",
  "exp.1.text":  "Built and structured interactive, responsive user interfaces applying HTML, CSS, JavaScript, and frameworks like Bootstrap 5.",
  "exp.2.title": "Server Logic & Databases",
  "exp.2.provider": "Academic projects",
  "exp.2.text":  "Completed practical exercises in relational database modeling (MySQL) and backend development using PHP in local environments.",

  "portfolio.title": "Projects",
  "project.1.title": "Bilingual Personal Portfolio",
  "project.1.text": "A responsive website with profile, skills, education, and project sections. Technologies: HTML5, CSS3, and JavaScript. Published with GitHub Pages.",
  "project.1.image": "Preview of the bilingual personal portfolio",
  "project.1.link": "View code on GitHub →",
  "tools.note": "Tools: OpenAI Codex (AI) helped review the translations, code, and this draft. Details are in NOTES.md.",
  "tools.link": "Translation notes and tools",

  "contact.title":         "Contact",
  "contact.intro":         "If you are interested in my projects or are looking for a profile focused on software development and problem-solving, feel free to contact me.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "Marlon Acosta Roa",

  "footer.note": "Marlon Acosta Roa · Web Programming Technician · UNIESPINAL"
};

/* ============================================================
   3. LANGUAGE SWITCHER
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  for (const atributo of ["alt", "aria-label", "content"]) {
    document.querySelectorAll("[data-i18n-" + atributo + "]").forEach(elemento => {
      const clave = elemento.getAttribute("data-i18n-" + atributo);
      if (textos[clave] !== undefined) elemento.setAttribute(atributo, textos[clave]);
    });
  }

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Cambiar a inglés" : "Switch to Spanish");
  }

  idiomaActual = idioma;
  actualizarBotonMenu();
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}

/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function actualizarBotonMenu() {
  const boton = document.querySelector(".nav-responsive");
  const clave = menuVisible ? "menu.close" : "menu.open";
  boton.setAttribute("aria-expanded", String(menuVisible));
  boton.setAttribute("aria-label", DICCIONARIOS[idiomaActual][clave]);
}

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
  actualizarBotonMenu();
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
  actualizarBotonMenu();
}

document.addEventListener("keydown", evento => {
  if (evento.key === "Escape" && menuVisible) {
    cerrarMenu();
    document.querySelector(".nav-responsive").focus();
  }
});

/* ============================================================
   5. SKILL BARS
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}

/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
