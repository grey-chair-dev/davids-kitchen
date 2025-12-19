# David's Kitchen + Bar - Cincinnati

A modern, responsive website for David's Kitchen + Bar, a neighborhood restaurant in Cincinnati, Ohio.

## Features

- **Home Page**: Hero section, features, featured food items, customer reviews, events preview, and location/hours
- **Menu Page**: Full menu with categories (Brunch, Apps, Burgers, Mains, Drinks)
- **Events Page**: Weekly events including trivia, jazz nights, and game day brunch
- **Location Page**: Restaurant location and hours information
- **Contact Page**: Contact information and form
- **Order Page**: Online ordering interface
- **Mobile-Friendly**: Responsive design with floating call button on mobile devices

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd "david's-kitchen---cincinnati"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── components/          # React components
│   ├── Events.tsx
│   ├── FeaturedFood.tsx
│   ├── Features.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── LocationHours.tsx
│   ├── MobileFloatingCall.tsx
│   ├── Navbar.tsx
│   └── Reviews.tsx
├── App.tsx              # Main app component with routing
├── Menu.tsx             # Menu page component
├── EventsPage.tsx       # Events page component
├── LocationPage.tsx     # Location page component
├── ContactPage.tsx      # Contact page component
├── OrderPage.tsx        # Order page component
├── constants.tsx        # Data constants (reviews, events, menu items)
├── types.ts             # TypeScript type definitions
└── vite.config.ts       # Vite configuration
```

## Development

The app uses hash-based routing for navigation between pages. The main pages are:
- Home (`/`)
- Menu (`/#menu`)
- Events (`/#events-page`)
- Location (`/#location-page`)
- Contact (`/#contact-page`)
- Order (`/#order`)

## License

Private project - All rights reserved
