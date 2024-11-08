# Esbie Component Library

Welcome to the **Esbie Component Library**! This project is a reusable, customisable component library built with React, TypeScript, and styled-components. It follows atomic design principles and includes components organised into atoms, molecules, organisms, and templates. The library is bundled using Rollup and tested with Jest and React Testing Library. A sandbox app is also included for developing and testing components.

## Table of Contents

- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Component Structure](#component-structure)
- [Testing Components](#testing-components)
- [Contributing](#contributing)


## Project Structure

This repository uses a monorepo structure with `pnpm` workspaces. The main folders include:

- **`src/`**: Contains the component library source code.
- **`sandbox/`**: A development environment to test and preview components.

### Component Structure

The component library is organized following atomic design principles:

- **Atoms**: Basic, reusable elements like `Button`, `Icon`, and `Text`.
- **Molecules**: Combinations of atoms, such as `FormField` or `Card`.
- **Organisms**: Groups of molecules, like `Form` or `Header`.
- **Templates**: High-level layouts, such as `BasicLayout` or `DashboardLayout`.

Each component folder typically contains:
- `ComponentName.tsx`: The main component file.
- `ComponentName.test.tsx`: Jest test file.
- `index.ts`: Barrel file for easier imports.

---

## Getting Started

### Prerequisites

- **Node.js**: Ensure Node.js is installed (v14+ recommended).
- **pnpm**: Install `pnpm` globally if you haven't already:
` npm install -g pnpm`

## Installation
1. Clone the repository:

`git clone https://github.com/your-username/esbie-component-library.git`

2. Navigate to the project directory:

`cd esbie-component-library`

3. Install dependencies:

`pnpm install`

## Running the Sandbox App
To test components in a live environment, run the sandbox app:

`pnpm run dev --filter sandbox`

This will start the Vite dev server at http://localhost:2000 (or another port if configured). Open this address in your browser to preview the components in the sandbox environment.


## Scripts
The following commands are available in the project:

- `pnpm run build`: Builds the component library using Rollup.
- `pnpm run dev --filter sandbox`: Starts the sandbox app for testing components in a live environment.
- `pnpm run test`: Runs tests for all components using Jest.

## Testing Components
Components are tested with Jest and React Testing Library. Test files are located alongside each component and follow the .test.tsx naming convention.

To run tests:

`pnpm run test`


# Contributing
Contributions are welcome! If you’d like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Make your changes and commit them (git commit -m 'Add YourFeature').
4. Push to your branch (git push origin feature/YourFeature).
5. Open a pull request to the main branch.

Please ensure your code follows the existing style, is well-tested, and includes documentation if necessary.

## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
