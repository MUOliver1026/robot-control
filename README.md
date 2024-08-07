# Robot Control Simulator

## Overview

Robot Control Simulator is a web-based application that allows users to control a virtual robot on a 5x5 grid. Built with React, TypeScript, and styled with TailwindCSS, this project demonstrates modern web development practices and responsive design principles.

<img src="/public/screenshot.png" width="200">

## Live Demo

You can try out the live demo of the Robot Control Simulator here:
[https://robot-control-puce.vercel.app/](https://robot-control-puce.vercel.app/)

## Features

- Interactive 5x5 grid environment
- Robot movement controls (forward, rotate left, rotate right)
- Visual representation of the robot's position and direction
- Responsive design for various screen sizes
- Bellroy-inspired color scheme and UI elements

## Technologies Used

- React 18.3.1
- TypeScript 5.2.2
- Vite 5.3.4
- TailwindCSS 3.4.7
- Node.js 22.4.1
- Redux Toolkit
- Cypress
- ESLint 8.57.0

## Getting Started

### Prerequisites

- Node.js (version 16 or later)
- npm (usually comes with Node.js)

### Installation

1. Clone the repository:

```
  git clone https://github.com/MUOliver1026/robot-control.git
```

1. Navigate to the project directory:

```
  cd robot-control-simulator
```

1. Install dependencies:

```
  npm install
```

### Running the Application

1. Start the development server:

```
  npm run dev
```

1. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

### Building for Production

To create a production build:

```
  npm run build
```

The built files will be in the `dist` directory.

## Redux State Management

This project uses Redux Toolkit for state management. The Redux store is configured in `src/store/index.ts`. The main slice for managing the robot's state is defined in this file.

## Testing
### Running Cypress Tests
This project uses Cypress for end-to-end testing. To run the Cypress tests:
1. Ensure your development server is running:
```
npm run dev
```

2. In a separate terminal, run:
```
npm run cypress:open
```

3. In the Cypress Test Runner, click on "E2E Testing" and select your preferred browser.
4. Click on the robot_control.cy.ts spec file to run the tests.

## Project Structure

```
.
├── LICENSE
├── README.md
├── cypress
│   ├── downloads
│   ├── e2e
│   │   └── robot_control.cy.ts
│   ├── fixtures
│   │   └── example.json
│   └── support
│       ├── commands.ts
│       └── e2e.ts
├── cypress.config.cjs
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── screenshot.png
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── components
│   │   ├── Grid.tsx
│   │   └── Robot.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── store
│   │   └── index.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

## Usage

- Use the "Move Forward" button to move the robot one step in its current direction.
- Use the "Rotate Left" and "Rotate Right" buttons to change the robot's direction.
- The robot cannot move outside the 5x5 grid boundaries.


## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/MUOliver1026/robot-control/blob/main/LICENSE) file for details.

## Acknowledgments

- Inspired by Bellroy's design aesthetic
- Built as part of a coding challenge

## Contact

Yuanming (Oliver) Wu - yuanming.oliver.wu@gmail.com

Project Link: [https://github.com/MUOliver1026/robot-control](https://github.com/MUOliver1026/robot-control)