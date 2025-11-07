// Language translations
const translations = {
    en: {
        // Header
        name: "YANG JIN",
        title: "Computer Engineer",
        
        // Education section
        educationTitle: "EDUCATION",
        universityTitle: "Computer Engineering",
        uniSchool: "University of Girona",
        uniYears: "2022 - 2025",
        highschoolDegree: "High School Diploma (Technology Track)",
        hsSchool: "Jaume Vicens Vives",
        hsYears: "2020 - 2022",
        
        // Skills section
        codingSkills: "SKILLS",
        
        // Languages section
        languagesTitle: "LANGUAGES",
        english: "English",
        spanish: "Spanish",
        catalan: "Catalan",
        chinese: "Chinese",
        
        // Profile section
        aboutMe: "PROFILE",
        profileDescription: "Motivated and responsible student eager to develop professional skills. Quick learner with strong communication and teamwork abilities. Interested in gaining experience in programming and software roles.",
        
        // Soft Skills section
        softSkills: "SOFT SKILLS",
        problemSolving: "Problem-solving",
        teamwork: "Team collaboration",
        creativity: "Creativity",
        attention: "Attention to detail",
        communication: "Communication",
        timeManagement: "Time management",
        adaptability: "Adaptability",
        criticalThinking: "Critical thinking",
        
        // Projects section
        projects: "PROJECTS",
        fluidProject: "Fluid Simulation",
        fluidDesc1: "Implemented a real-time 2D fluid simulation using the FLIP (Fluid-Implicit Particle) method.",
        fluidDesc2: "Developed interactive controls to modify viscosity, gravity vector, particle separation, and simulation resolution.",
        fluidDesc3: "Created dynamic containers (circular, star, heart, diamond, rectangular) and obstacle interaction using WebGL rendering.",
        fluidDesc4: "Built the simulation entirely in JavaScript and WebGL without external physics engines.",
        githubLink: "GitHub:"
    },
    
    es: {
        // Header
        name: "YANG JIN",
        title: "Ingeniero Informático",
        
        // Education section
        educationTitle: "EDUCACIÓN",
        universityTitle: "Ingeniería Informática",
        uniSchool: "Universidad de Girona",
        uniYears: "2022 - 2025",
        highschoolDegree: "Bachillerato (Modalidad Tecnológica)",
        hsSchool: "Jaume Vicens Vives",
        hsYears: "2020 - 2022",
        
        // Skills section
        codingSkills: "HABILIDADES",
        
        // Languages section
        languagesTitle: "IDIOMAS",
        english: "Inglés",
        spanish: "Español",
        catalan: "Catalán",
        chinese: "Chino",
        
        // Profile section
        aboutMe: "PERFIL",
        profileDescription: "Estudiante motivado y responsable deseoso de desarrollar habilidades profesionales. Aprendizaje rápido con sólidas capacidades de comunicación y trabajo en equipo. Interesado en adquirir experiencia en programación y roles de software.",
        
        // Soft Skills section
        softSkills: "HABILIDADES",
        problemSolving: "Resolución de problemas",
        teamwork: "Colaboración en equipo",
        creativity: "Creatividad",
        attention: "Atención al detalle",
        communication: "Comunicación",
        timeManagement: "Gestión del tiempo",
        adaptability: "Adaptabilidad",
        criticalThinking: "Pensamiento crítico",
        
        // Projects section
        projects: "PROYECTOS",
        fluidProject: "Simulación de Fluidos",
        fluidDesc1: "Implementé una simulación 2D de fluidos en tiempo real utilizando el método FLIP (Fluid-Implicit Particle).",
        fluidDesc2: "Desarrollé controles interactivos para modificar viscosidad, vector de gravedad, separación de partículas y resolución de simulación.",
        fluidDesc3: "Creé contenedores dinámicos (circular, estrella, corazón, diamante, rectangular) e interacción de obstáculos usando renderizado WebGL.",
        fluidDesc4: "Construí la simulación completamente en JavaScript y WebGL sin motores de física externos.",
        githubLink: "GitHub:"
    },
    
    ca: {
        // Header
        name: "YANG JIN",
        title: "Enginyer Informàtic",
        
        // Education section
        educationTitle: "EDUCACIÓ",
        universityTitle: "Enginyeria Informàtica",
        uniSchool: "Universitat de Girona",
        uniYears: "2022 - 2025",
        highschoolDegree: "Batxillerat (Modalitat Tecnològica)",
        hsSchool: "Jaume Vicens Vives",
        hsYears: "2020 - 2022",
        
        // Skills section
        codingSkills: "HABILITATS",
        
        // Languages section
        languagesTitle: "IDIOMES",
        english: "Anglès",
        spanish: "Espanyol",
        catalan: "Català",
        chinese: "Xinès",
        
        // Profile section
        aboutMe: "Perfil",
        profileDescription: "Estudiant motivat i responsable desitjós de desenvolupar habilitats professionals. Aprenentatge ràpid amb sòlides capacitats de comunicació i treball en equip. Interessat en adquirir experiència en programació i rols de programari.",
        
        // Soft Skills section
        softSkills: "HABILITATS",
        problemSolving: "Resolució de problemes",
        teamwork: "Col·laboració en equip",
        creativity: "Creativitat",
        attention: "Atenció al detall",
        communication: "Comunicació",
        timeManagement: "Gestió del temps",
        adaptability: "Adaptabilitat",
        criticalThinking: "Pensament crític",
        
        // Projects section
        projects: "PROJECTES",
        fluidProject: "Simulació de Fluids",
        fluidDesc1: "Vaig implementar una simulació 2D de fluids en temps real utilitzant el mètode FLIP (Fluid-Implicit Particle).",
        fluidDesc2: "Vaig desenvolupar controls interactius per modificar viscositat, vector de gravetat, separació de partícules i resolució de simulació.",
        fluidDesc3: "Vaig crear contenidors dinàmics (circular, estrella, cor, diamant, rectangular) i interacció d'obstacles utilitzant renderitzat WebGL.",
        fluidDesc4: "Vaig construir la simulació completament en JavaScript i WebGL sense motors de física externs.",
        githubLink: "GitHub:"
    }
};

let currentLang = 'en';

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
    localStorage.setItem('preferredLanguage', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            changeLanguage(lang);
        });
    });
});
