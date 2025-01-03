import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate";


export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		letterSpacing: {
  			'3pct': '3%',
  			'4pct': '4%'
  		},
  		fontFamily: {
  			poppins: ["Poppins", "sans-serif", "serif"],
  			inter: ["Inter", "sans-serif"]
  		},
  		colors: {
  			gray1: '#3A3A3A',
  			black1: '#000000',
  			text1: '#333333',
  			text3: '#666666',
  			gray3: '#898989',
  			bg2: ' #F4F5F7',
  			gray2: '#616161',
  			gray4: '#B0B0B0',
  			gray5: '#D8D8D8',
  			accent1: '#2EC1AC',
  			accent2: '#E97171',
  			text2: '#000000',
  			primary1: '#FFFFFF',
			primary: '#B88E2F'
  			
  		},
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
