export interface CaseItem {
  id: string;
  image: string;
  title: string;
  description?: string;
}

export interface FeedbackItem {
  id: string;
  image: string;
  patientName?: string;
  highlight?: string;
}

export interface LifestyleItem {
  id: string;
  image: string;
  caption?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}
