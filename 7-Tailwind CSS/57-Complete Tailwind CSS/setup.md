## How to setup Tailwind CSS

Step 1: Run the following commands

``` 
npm install -D tailwindcss
```
```
npx tailwindcss init
```

Step 2: Update tailwind.conf.js file to include this line:
```
content: ["*.html"],
```

Step 3: create src/input.css to include:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4:Run the following command:
```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```

Step 5: Link the src/output.css file to your html file

step 6: Run the following command:
```
npm i vite
```

step 7: Add this line in script{ } in package.json file
```
"dev":"vite"
```

step 8: Run the following command for automatic update the live preview in browser
```
npm run dev
```
