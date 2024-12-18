# Welcome to React Router with Bun and Hono Server!

[![Remix](https://img.shields.io/badge/Remix-000?logo=remix&logoColor=fff)](https://remix.run/)
[![React Router](https://img.shields.io/badge/-React%20Router-CA4245?style=flat&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![React](https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff)](https://vitejs.dev/)
[![Bun](https://img.shields.io/badge/-Bun-000000?style=flat&logo=bun&logoColor=white)](https://bun.sh/)
[![Hono](https://img.shields.io/badge/-Hono-E36002?style=flat&logo=hono&logoColor=white)](https://hono.dev/)
[![Vitest](https://img.shields.io/badge/-Vitest-6E9F18?style=flat&logo=vitest&logoColor=white)](https://vitest.dev/)
[![React Testing Library](https://img.shields.io/badge/-Testing%20Library-E33332?style=flat&logo=testinglibrary&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/)
[![Biome](https://img.shields.io/badge/-Biome-60A5FA?style=flat&logo=biome&logoColor=white)](https://biomejs.dev)
[![Docker](https://img.shields.io/badge/-Docker-2496ED?style=flat&logo=docker&logoColor=white)](https://www.docker.com/)

A modern, production-ready template for building full-stack React applications using React Router with Bun and Hono.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/jpcpereira93/react-router-bun-hono-template/tree/main/default)

## Features

- 🚀 Server-side rendering (w/ Bun & Hono Server!)
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)
- 🧪 Vitest + React Testing Library for testing
- 🔍 BiomeJS for code linting & formatting

## Getting Started

### Prerequisites

This template uses [bun](https://bun.sh/) as the package manager and Javascript Runtime. So, you need to install `bun` globally:

  ```bash
  curl -fsSL https://bun.sh/install | bash
  ```

### Installation

Install the dependencies:

```bash
bun install
```

### Development

Start the development server with HMR:

```bash
bun dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
bun run build
```

## Deployment

### Docker Deployment

This template includes a Dockerfile to simplify the deployment:

To build and run using Docker:

```bash
# Build the image
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node or Bun applications, the built-in app server is production-ready.

Make sure to deploy the output of `bun run build`

```
├── package.json
├── bun.lockb
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Linting & Formatting

[Biome](https://biomejs.dev/) is used to ensure code consistency across the project. It is already included a config file with the default + recommended options to enable when using this setup. Feel free to change it to your liking!

To run all the biome checks (linting and formatting):

```bash
bun biome check
```

To automatically fix linting issues and format code:

```bash
bun biome check --write
```

## Testing

This template uses [Vitest](https://vitest.dev/) as the testing framework and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for component testing. There's also included a basic setup with recommended settings.

To run the tests, use the following command:

```bash
bun run test
```

This will run all the unit and integration tests.

To watch and re-run tests on file changes during development:

```bash
bun run test:watch
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---
