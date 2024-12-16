// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//       },
//     },
//   },
//   plugins: [],
// };


// export default config;



import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Add any other directories or paths that contain your Tailwind classes
  ],
  theme: {
    extend: {
      // Custom background images for gradient
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // Custom colors (if needed)
      colors: {
        "custom-yellow": "#FFD700", // Example custom yellow color
        "custom-gray": "#2D2D2D",   // Example custom gray color
      },
      // Extend the font sizes, spacing, or other properties as needed
      fontSize: {
        'xxs': '.65rem', // Extra extra small font size (example)
      },
      spacing: {
        '128': '32rem', // Custom spacing (example)
      },
    },
  },
  plugins: [
    // You can add useful plugins here if required (e.g., forms, typography, aspect-ratio)
  ],
  safelist: [
    // Add any classes you want to safelist if using purge options
    "bg-custom-yellow", // Example: add custom colors
  ],
};

export default config;

