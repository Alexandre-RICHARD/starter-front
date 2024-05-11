# Project Starter

A project starter designed to streamline the setup process for new projects. Fork this repository to quickly initiate your projects without hassle.

## Usage

1. Fork this repository.
2. Clone the forked repository to your local machine.
3. Install dependencies using your preferred package manager (`pnpm install` or `yarn install` or `npm install` ).
4. Run the development server with `pnpm start` or `yarn start` or `npm start`.
5. Begin coding your awesome project!

## Technologies Used

- Vite bundler, fast and powerful
- React used accompanied by Redux Toolkit State Manager
- React Refresh, allowing you to save/reload without losing state information
- TypeScript, to uncover errors more quickly
- ESLint, to keep a beautiful code
- Sass, to write your style more logically

## Other details :

- Aliases for easier import
- Practical npm scripts to automate some tasks
- A configuration adapted to simply test the store with Redux
- Using of assets and utilities ready
- Environments variables

## Dependencies

List of major dependencies used in the project:

- `@reduxjs/toolkit`
- `@stylistic/eslint-plugin`
- `@testing-library/...`
- `@types/...`
- `eslint`
- `jsdom`
- `react`
- `sass`
- `typescript`
- `vite`
- `vitest`

## Scripts

- `start`: Run the development server using Vite.
- `test`: Run tests using Vitest.
- `update`: Update project dependencies.
- `lint`: Run ESLint on TypeScript files and report unused directives.
- `lint & fix`: Run ESLint on TypeScript files, fix issues, and report unused directives.
- `build`: Build the project using TypeScript and Vite.
- `build-preview`: Preview the built project using Vite.
- `clean`: Remove the build directory.
- `clean:all`: Remove both `node_modules` and the `build` directory.

## Project Structure

```
starter-vite-react-redux_toolkit-typescript_scss
├─ src/
│  ├─ assets/
│  │  └─ images/
│  │     └─ favicon.ico
│  │
│  ├─ components/
│  ├─ store/
│  │  ├─ slices/
│  │  ├─ hooks.ts
│  │  └─ store.ts
│  │
│  ├─ styles/
│  ├─ tests/
│  │  ├─ setup.ts
│  │  └─ wrapperProvider.tsx
│  │
│  ├─ utilities/
│  └─ index.tsx
│
├─ .env.dev
├─ .env.prod
├─ .eslintrc.json
├─ .gitignore
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ tsconfig.json
├─ tsconfig.vite.json
└─ vite.config.ts
```
