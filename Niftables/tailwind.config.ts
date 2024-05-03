import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'purple-custom': "#AB23FF",
      'blue-custom': "#3D8BFF",
      'grey-line': "#13171D",
      'grey-text': "#46505F",
      'linear-custom': "linear-gradient(90deg, rgba(61,139,255,1) 0%, rgba(171,35,255,1) 100%)",
    },
    fontSize: {
      xxs: "10px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
