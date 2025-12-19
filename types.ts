
export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
}

export interface EventItem {
  id: number;
  date: string;
  title: string;
  description: string;
}

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  allergens: string[];
}

export interface FullMenu {
  brunch: MenuItem[];
  apps: MenuItem[];
  burgers: MenuItem[];
  mains: MenuItem[];
  drinks: MenuItem[];
}

export interface FoodCard {
  title: string;
  image: string;
  items: { name: string; price: string }[];
  link: string;
}
