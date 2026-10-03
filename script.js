/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web
   ============================================================ */

/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
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
  "skill.support":       "Soporte técnico y Logística",
  "skill.teamwork":      "Metodologías Ágiles",
  "skill.problem":       "Resolución de problemas lógicos",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Formación orientada al desarrollo de software, modelado de bases de datos, teoría general de sistemas y metodologías ágiles.",
  "edu.2.title": "Desarrollo Lógico e Infraestructura",
  "edu.2.text":  "Estudio práctico sobre arquitectura de hardware, simulación de redes en Cisco Packet Tracer y administración de servidores virtualizados.",

  "exp.1.title": "Líder de Desarrollo Académico",
  "exp.1.text":  "Diseño y estructuración del proyecto Sentinel, investigando la integración de modelos de visión artificial (MediaPipe, YOLO) para sistemas de e-proctoring.",
  "exp.2.title": "Apoyo Logístico Institucional",
  "exp.2.text":  "Coordinación, soporte técnico y asistencia operativa durante el desarrollo de eventos y jornadas académicas.",

  "portfolio.title": "Proyectos",
  "project.1.title": "Sentinel e-Proctoring",
  "project.1.text":  "Propuesta de supervisión web automatizada con IA.",
  "project.2.title": "Gestión de Inventario",
  "project.2.text":  "App de escritorio Java con SQL y código de barras.",
  "project.3.title": "QuizMaster",
  "project.3.text":  "App educativa móvil con integración de Firebase.",

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
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Software Developer · Web Programming Student",

  "about.title":          "About Me",
  "about.text":           "I am a fourth-semester Web Programming student at UNIESPINAL. I am passionate about full-stack software development, from creating Java desktop apps and SQL databases to mobile and web development using technologies like PHP and Laravel. I am a curious person who enjoys learning about hardware architecture, network simulation, and reading about technological innovation. I love tackling logical problems and building efficient solutions.",
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
  "skill.support":       "Technical support & Logistics",
  "skill.teamwork":      "Agile Methodologies",
  "skill.problem":       "Logical problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "Training focused on software development, database modeling, general systems theory, and agile methodologies.",
  "edu.2.title": "Logic Development and Infrastructure",
  "edu.2.text":  "Practical study on hardware architecture, network simulation in Cisco Packet Tracer, and virtualized server administration.",

  "exp.1.title": "Academic Development Lead",
  "exp.1.text":  "Designed and structured the Sentinel project, researching the integration of computer vision models (MediaPipe, YOLO) for e-proctoring systems.",
  "exp.2.title": "Institutional Logistics Support",
  "exp.2.text":  "Coordinated and provided technical support and operational assistance during academic events and conferences.",

  "portfolio.title": "Projects",
  "project.1.title": "Sentinel e-Proctoring",
  "project.1.text":  "Automated web supervision proposal with AI.",
  "project.2.title": "Inventory Management",
  "project.2.text":  "Java desktop app with SQL and barcode scanner.",
  "project.3.title": "QuizMaster",
  "project.3.text":  "Mobile educational app integrated with Firebase.",

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

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}

/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}

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
