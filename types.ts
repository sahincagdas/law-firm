
export interface NavItem {
  label: string;
  path: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
imageUrl: string;
featured ?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
}
