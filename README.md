# Freelancer Cards

A responsive React interface for browsing freelancer profiles. Each card displays a freelancer's availability, hourly rate, profile image, role, skills, and short bio.

## Live Demo

ui-card-project.netlify.app

To preview the project locally:

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Features

- Responsive card layout for multiple freelancer profiles
- Availability and hourly-rate indicators
- Profile image, role, category, skills, and bio for each freelancer
- Reusable `Card` component powered by React props
- Fast development and production builds with Vite

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository and move into the project directory.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
├── components/
│   └── Card.jsx       # Reusable freelancer card
├── App.jsx            # Freelancer data and card list
├── index.css          # Application styles
└── main.jsx           # React entry point
```
