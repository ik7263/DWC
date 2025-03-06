# Dudes Who Care - Charity Website

A modern, responsive website for the "Dudes Who Care" 501(c)(3) non-profit organization. This website is built using Next.js, React, and Tailwind CSS.

## Features

- Responsive design that works on all devices
- Modern UI with a clean, professional look
- Interactive components for user engagement
- SEO-friendly structure
- Fast loading times

## Pages

- **Home**: Introduction to the charity with mission highlights and impact statistics
- **About**: Information about the organization, its history, values, and board members
- **Events**: Upcoming and past events organized by the charity
- **Contact**: Contact form and information for getting in touch
- **Donate**: Donation form and alternative ways to contribute

## Color Scheme

The website uses the following color scheme:
- Primary: #0A3161 (Dark Blue)
- Secondary: #B31942 (Red)
- Accent: #E6E6E6 (Light Gray)

These colors are inspired by the American flag, reflecting the organization's patriotic values.

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed JavaScript for better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Icons**: Icon library for React applications

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dudes-who-care.git
   cd dudes-who-care
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
dudes-who-care/
├── components/         # Reusable UI components
├── pages/              # Next.js pages
├── public/             # Static assets
│   └── images/         # Image files
├── styles/             # Global styles
├── .gitignore          # Git ignore file
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
├── postcss.config.js   # PostCSS configuration
├── README.md           # Project documentation
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Images

Before deploying the website, you'll need to add the required images to the `public/images` directory. See the `public/images/README.md` file for details on the required images.

## Deployment

### GitHub Pages Deployment

This website is configured for deployment on GitHub Pages at [https://ik7263.github.io/DWC/](https://ik7263.github.io/DWC/).

To deploy the website to GitHub Pages:

1. Push your changes to the main branch:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically build and deploy the site to the gh-pages branch.

3. Alternatively, you can manually deploy using:
   ```bash
   npm run deploy
   ```

This website can also be deployed to any hosting platform that supports Next.js applications, such as Vercel, Netlify, or a traditional web server.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/) 