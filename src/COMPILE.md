# Compilation note

```resources.js``` is the main plain JS that encapsulates the JSX components that is injected into the ```#resources``` element in ```index.html```.  

## How to compile

In ./

```npx babel --watch src --out-dir . --presets react-app/prod```