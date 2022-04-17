module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#F2FB0B",
        
"secondary": "#A30DAA",
        
"accent": "#50DCFE",
        
"neutral": "#0f1921",
        
"base-100": "#3D3960",
        
"info": "#FFFCF9",
        
"success": "#27D3A2",
        
"warning": "#B26706",
        
"error": "#FD5E8B",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
