## 🛠️ Installation and Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/anwar-opu/anwar-opu.github.io.git
   cd anwar-opu.github.io
   ```
2. Install the dependencies:
   ```npm install```
3. Run the app in development mode:
   ```npm start```

Open http://localhost:3000 to view it in your browser.
The page will reload when you make edits.

## 🚀 Deployment to GitHub Pages

1. To deploy the site to GitHub Pages:

  Install the gh-pages package (if not already):
  
  ```npm install --save gh-pages```

2. Add the following fields to your package.json:
  ```
"homepage": "https://anwar-opu.github.io",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

```

3. Deploy the app:

``` npm run deploy ```
  
      
