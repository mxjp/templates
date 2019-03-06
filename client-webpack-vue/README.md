# client-webpack-vue
npm package template for building a web client using webpack and vue.

## Features
+ Babel
+ Dynamic imports
+ Hot module replacement
+ Static files
+ Vue Router
+ Vuex
+ Less Stylesheets
+ Extract styles in production

## Directory Structure
| Path | Description |
|-|-|
| `/src/components` | Vue components that are used in some parts of the application. |
| `/src/components/global` | Vue components that are available automagically. |
| `/src/static` | Static files. |
| `/src/styles` | Global .less files that can be imported using `@import 'name';` |
| `/dist` | Output files. |

## Scripts
| Script | Description |
|-|-|
| `npm start` | Start a webpack dev server on port 8080 |
| `npm run build` | Build the web client for production. |
