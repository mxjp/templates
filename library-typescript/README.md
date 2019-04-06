# library-typescript
npm package template for building a library in typescript.

## Packaged Code
| Path | Type | Entry Point |
|-|-|-|
| `/dist/es` | ES6 | `browser` |
| `/dist/node` | ES2017, CommonJS Modules | `main` |
| `/src` | TypeScript Sources | |

## Npm Scripts
| Script | Description |
|-|-|
| `compile:es` | Compile to es6 |
| `compile:node` | Compile for nodejs |
| `compile` | Compile everything |
| `test` | Run tests and coverage |
| `watch` | Run tests and watch for changes |
| `prepack` | Run tests and compile everything |
