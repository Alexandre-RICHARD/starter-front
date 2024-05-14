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
- React used accompanied by Zustand State Manager
- React Refresh, allowing you to save/reload without losing state information
- TypeScript, to uncover errors more quickly
- ESLint deeply configured with Prettier, to keep a beautiful code
- Sass, to write your style more logically
- Vitest to make unit tests and functionnal tests with jsdom

## Dependencies

List of major dependencies used in the project:

- `eslint`
- `react`
- `prettier`
- `sass`
- `typescript`
- `vite`
- `vitest`
- `zustand`

List of Eslint related dependencies

- `@stylistic/eslint-plugin`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint-config-airbnb`
- `eslint-config-airbnb-typescript`
- `eslint-config-prettier`
- `eslint-plugin-import`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-prettier`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `eslint-plugin-simple-import-sort`
- `typescript-eslint`

## Scripts

- `start`: Run the development server using Vite.
- `test`: Run tests using Vitest.
- `update`: Update project dependencies.
- `lint`: Run ESLint.
- `lint & fix`: Run ESLint and fix issues.
- `build`: Build the project using TypeScript and Vite.
- `build-preview`: Preview the built project using Vite.
- `clean`: Remove the build directory.
- `clean:all`: Remove both `node_modules` and the `build` directory.

## Project Structure

```
├─ src/
│  ├─ api/
│  │
│  ├─ assets/
│  │  ├─ images/
│  │  └─ translation/
│  │
│  ├─ component/
│  │  ├─ allComponentFolder/
│  │  ├─ App.scss
│  │  └─ App.tsx
│  │
│  ├─ enum/
│  ├─ helper/
│  ├─ store
│  │  ├─ combined.store.ts
│  │  └─ all.other.store.ts
│  ├─ styles
│  │  ├─ index.scss
│  │  ├─ reset.scss
│  │  └─ variables.scss
│  │
│  ├─ test/
│  ├─ types/
│  │
│  ├─ index.tsx
│  └─ vite-env.d.ts
│
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc.cjs
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ README.md
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```
