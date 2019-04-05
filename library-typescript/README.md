# library-typescript
npm package template for building a library in typescript.

## Packaged Code
| Path | Type | Entry Point |
|-|-|-|
| `/dist/node` | ES2017, CommonJS Modules | `main` |
| `/dist/es` | ES2015, ES Modules | `browser` |
| `/src` | TypeScript Sources | |

## Npm Scripts
| Script | Description |
|-|-|
| `compile:node` | Compile for nodejs |
| `compile:es` | Compile to es6 |
| `compile` | Compile everything |
| `test` | Run tests and coverage |
| `test:watch` | Run tests and watch for changes |
| `prepack` | Run tests and compile everything |
