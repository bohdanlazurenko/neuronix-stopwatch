# Neuronix Stopwatch

A precise and modern stopwatch application built with Next.js 14, TypeScript, and Tailwind CSS. Features a clean interface with millisecond precision and smooth animations.

## Features

- ⏱️ Millisecond precision timing
- ▶️ Start, Stop, and Reset controls
- 🎨 Modern, responsive design with Tailwind CSS
- ⚡ Smooth animations and transitions
- 📱 Mobile-friendly interface
- 🔧 Built with Next.js 14 App Router and TypeScript

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - State management and side effects

## Project Structure

```
neuronix-stopwatch/
├── app/
│   ├── api/
│   │   └── ping/
│   │       └── route.ts      # Health check endpoint
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Main stopwatch page
├── components/
│   ├── ControlButton.tsx     # Reusable button component
│   └── StopwatchDisplay.tsx  # Time display component
├── lib/
│   └── time.ts               # Time formatting utilities
├── public/                   # Static assets
├── .gitignore                # Git ignore rules
├── README.md                 # Project documentation
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Usage

1. Click the **Start** button to begin timing
2. Click the **Stop** button to pause the stopwatch
3. Click the **Reset** button to clear the time and start over

The stopwatch displays time in `MM:SS.MS` format, where:
- `MM` = Minutes
- `SS` = Seconds  
- `MS` = Centiseconds (hundredths of a second)

## API Endpoint

The application includes a health check endpoint:

```
GET /api/ping
```

Returns:
```json
{
  "ok": true,
  "timestamp": "2025-06-18T12:00:00.000Z"
}
```

## License

This project is open source and available under the [MIT License](LICENSE).