
import { Review, EventItem, FoodCard } from './types';

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "James M.",
    rating: 5,
    text: "The giant pretzel is a family favorite. Love the red booths and the fact that it feels like a real home."
  },
  {
    id: 2,
    author: "Sarah L.",
    rating: 5,
    text: "Exactly what OTR needs. Unfussy, great for the kids, and the servers actually remember your name."
  },
  {
    id: 3,
    author: "David K.",
    rating: 5,
    text: "Best neighborhood spot. No posturing, just good burgers and cold beer. The parking lot is a huge plus."
  }
];

export const EVENTS: EventItem[] = [
  {
    id: 1,
    date: "Tuesdays, 7PM",
    title: "Neighborhood Trivia",
    description: "Cold drinks, giant pretzels, and local bragging rights."
  },
  {
    id: 2,
    date: "Fridays, 8PM",
    title: "Friday Night Jazz",
    description: "Relaxed neighborhood vibes with local Cincinnati musicians."
  },
  {
    id: 3,
    date: "Sundays, 11AM",
    title: "Game Day Brunch",
    description: "Catch the game on our big screens with $5 Mimosas and burger specials."
  }
];

export const FEATURED_FOOD: FoodCard[] = [
  {
    title: "The Favorites",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "The Giant Pretzel", price: "$12" },
      { name: "Loaded Nachos", price: "$13" }
    ],
    link: "menu#apps"
  },
  {
    title: "Burgers",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "David's Smash Burger", price: "$14" },
      { name: "Double Cheeseburger", price: "$16" }
    ],
    link: "menu#burgers"
  },
  {
    title: "Comfort Mains",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
    items: [
      { name: "Fish & Chips", price: "$17" },
      { name: "Hot Honey Chicken", price: "$15" }
    ],
    link: "menu#mains"
  }
];

export const FULL_MENU = {
  brunch: [
    { name: "Classic Breakfast", price: "$11", description: "Two eggs, bacon or sausage, toast, and home fries.", allergens: ["GF"] },
    { name: "Steak & Eggs", price: "$18", description: "6oz sirloin, two eggs your way, and crispy potatoes.", allergens: ["GF"] },
    { name: "Avocado Toast", price: "$10", description: "Thick cut sourdough, smashed avocado, radish, and egg.", allergens: ["V"] },
    { name: "Breakfast Burrito", price: "$12", description: "Chorizo, scrambled eggs, cheese, and salsa.", allergens: [] }
  ],
  apps: [
    { name: "The Giant Pretzel", price: "$12", description: "Oversized soft pretzel served with house beer cheese and mustard.", allergens: ["V"] },
    { name: "Crispy Wings", price: "$14", description: "Buffalo, BBQ, or Dry Rub. Served with ranch or blue cheese.", allergens: ["GF"] },
    { name: "Loaded Nachos", price: "$13", description: "Cheese, jalapeños, sour cream, and salsa. Add chicken or beef for $3.", allergens: ["V", "GF"] },
    { name: "Fried Pickles", price: "$9", description: "Hand-breaded spears with spicy dipping sauce.", allergens: ["V"] }
  ],
  burgers: [
    { name: "David's Smash Burger", price: "$14", description: "Two thin patties, American cheese, pickles, onion, and secret sauce.", allergens: [] },
    { name: "Double Cheeseburger", price: "$16", description: "Our classic smash burger with double the meat and cheese.", allergens: [] },
    { name: "Bacon Blue Burger", price: "$16", description: "Bacon, blue cheese crumbles, and caramelized onions.", allergens: [] },
    { name: "Garden Burger", price: "$14", description: "House-made black bean patty with all the fixings.", allergens: ["V"] }
  ],
  mains: [
    { name: "Fish & Chips", price: "$17", description: "Beer-battered cod, thick cut fries, and house tartar sauce.", allergens: [] },
    { name: "Hot Honey Chicken", price: "$15", description: "Fried chicken breast, hot honey drizzle, slaw, and pickles.", allergens: [] },
    { name: "Shepherd's Pie", price: "$16", description: "Ground beef, peas, carrots, and topped with mashed potatoes.", allergens: ["GF"] },
    { name: "Mac & Cheese", price: "$13", description: "Three cheese blend with breadcrumb topping. Add bacon for $2.", allergens: ["V"] }
  ],
  drinks: [
    { name: "House Old Fashioned", price: "$13", description: "Bourbon, bitters, sugar, and orange peel.", allergens: ["V", "GF"] },
    { name: "Spicy Paloma", price: "$12", description: "Tequila, grapefruit, lime, and jalapeño.", allergens: ["V", "GF"] },
    { name: "Local Draft Beer", price: "$7", description: "Ask your server for our current rotating selection.", allergens: [] },
    { name: "House Wine", price: "$9", description: "Red or white by the glass.", allergens: ["V", "GF"] }
  ]
};
