# Project Starter

A project starter designed to streamline the setup process for new projects. Fork this repository to quickly initiate your projects without hassle.

## Usage

1. Fork this repository.
2. Clone the forked repository to your local machine.
3. Install dependencies using your preferred package manager (`npm install` or `yarn install`).
4. Run the development server with `npm start` or `yarn start`.
5. Begin coding your awesome project!

## Technologies Used

- Vite bundler, fadt and powerful
- React used accompanied by Redux Toolkit State Manager
- React Refresh, allowing you to save/reload without losing state information
- TypeScript, to uncover errors more quickly
- ESLint, Prettier, to keep a beautiful code
- Sass, to write your style more logically

## Other details :

- Aliases for easier import
- Practical npm scripts to automate some tasks
- A configuration adapted to simply test the store with Redux
- Using of assets and utilities ready 

## Dependencies

List of major dependencies used in the project:

- `@reduxjs/toolkit`
- `@stylistic/eslint-plugin`
- `@testing-library/dom`
- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `@types/node`
- `@types/react`
- `@types/react-dom`
- `@types/react-redux`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `@vitejs/plugin-react`
- `eslint`
- `eslint-config-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `jsdom`
- `prettier`
- `react`
- `react-dom`
- `react-redux`
- `sass`
- `typescript`
- `vite`
- `vitest`

## Scripts

- `start`: Run the development server using Vite.
- `test`: Run tests using Vitest.
- `build`: Build the project using TypeScript and Vite.
- `build-preview`: Preview the built project using Vite.
- `update`: Update project dependencies.
- `prettier`: Format source code using Prettier.
- `lint`: Run ESLint on TypeScript files and report unused directives.
- `lint & fix`: Run ESLint on TypeScript files, fix issues, and report unused directives.
- `clean`: Remove the build directory.
- `clean:all`: Remove both `node_modules` and the build directory.

## Project Structure

```
project-root
├─ public
│  └─ favicon.ico
├─ src
│  ├─ assets
│  ├─ components
│  │  ├─ App.scss
│  │  └─ App.tsx
│  ├─ index.html
│  ├─ index.tsx
│  ├─ store
│  │  ├─ hooks.ts
│  │  ├─ slices
│  │  │  └─ counterSlice.ts
│  │  └─ store.ts
│  ├─ styles
│  │  ├─ index.scss
│  │  ├─ reset.scss
│  │  └─ variables.scss
│  ├─ tests
│  │  ├─ components
│  │  │  └─ App.test.tsx
│  │  ├─ setup.ts
│  │  ├─ utilities
│  │  │  └─ sum.test.ts
│  │  └─ wrapperProvider.tsx
│  └─ utilities
│     └─ sum.ts
├─ .eslintrc.json
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ tsconfig.json
├─ tsconfig.vite.json
└─ vite.config.ts
```

https://mswjs.io/docs - API REQUEST

### Error or miss things
Only one formatting rules seems to be not handled by Eslint or Prettier, it's about deconstructed import.
When we import somethings like this

```js
Import {func1, func2, func3} from "myPackage"
```
I would like warn on it.

The way I would like it to be 
```js
Import {
    func1,
    func2,
    func3
} from "myPackage"
```

But Eslint and Prettier transfome it into :
```js
Import {
    func1, func2, func3
} from "myPackage"
```