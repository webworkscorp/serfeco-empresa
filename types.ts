
export interface ServiceCategory {
  title: string;
  description: string;
  items: string[];
  icon: string;
  image: string;
}

export interface WorkflowStep {
  title: string;
  description: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  emails: string[];
  website: string;
  linkedin: string;
  facebook: string;
}

export interface AppState {
  isMenuOpen: boolean;
  isAiAssistantOpen: boolean;
}
