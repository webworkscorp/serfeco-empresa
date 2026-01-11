
import { ServiceCategory, WorkflowStep, ContactInfo } from './types';

export const BRAND_NAME = "MaderasMyR";
export const BRAND_LOGO = "https://i.imgur.com/Pu7BtWd.png";

export const SERVICES: ServiceCategory[] = [
  {
    title: "Venta de Madera Seleccionada",
    description: "Madera para construcción y uso estructural, garantizando resistencia y durabilidad.",
    items: [
      "Estructuras y soportes",
      "Proyectos residenciales",
      "Remodelaciones",
      "Obras funcionales y rurales"
    ],
    icon: "fa-tree",
    image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Construcción y Obra Nueva",
    description: "Acompañamiento profesional en el desarrollo de proyectos desde cero.",
    items: [
      "Viviendas completas",
      "Remodelaciones integrales",
      "Mantenimiento general",
      "Asesoría técnica"
    ],
    icon: "fa-hard-hat",
    image: "https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Puertas e Instalaciones",
    description: "Sistemas de acceso especializados para diversos entornos comerciales y residenciales.",
    items: [
      "Edificios residenciales",
      "Estacionamientos",
      "Almacenes y bodegas",
      "Portones funcionales"
    ],
    icon: "fa-door-closed",
    image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&q=80&w=800"
  }
];

export const WORKFLOW: WorkflowStep[] = [
  { title: "Contacto Directo", description: "Atención personalizada y honesta." },
  { title: "Selección", description: "Materiales confiables y seleccionados." },
  { title: "Ejecución", description: "Procesos responsables y seguros." },
  { title: "Cumplimiento", description: "Entrega puntual según lo acordado." }
];

export const CONTACT_INFO: ContactInfo = {
  phone: "+506 6011 5347",
  whatsapp: "https://wa.me/50660115347",
  email: "info@maderasmyr.com",
  website: "https://maderasmyr.com",
  linkedin: "https://www.linkedin.com/company/maderasmyr/",
  facebook: "https://www.facebook.com/share/1Kpkk6CQZ3/?mibextid=wwXIfr"
};

export const PILLARS = [
  "Más de 16 años de experiencia",
  "Empresa con licencia y seguro",
  "Atención directa y personalizada",
  "Puntualidad y cumplimiento",
  "Enfoque práctico y honesto",
  "Uso responsable de materiales"
];
