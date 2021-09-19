# Compilation note

```resources.js``` is the main plain JS that encapsulates the JSX components that is injected into the ```#resources``` element in ```index.html```.  

## How to compile

While developing, in ./

```npx babel --watch src --out-dir . --presets react-app/prod```

## Developing locally

You can use:

```npm run dev```

However, do note that this starts a watched server without hot-reload. You will need to hard reload on your browser to see changes. 
