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

## Project Structure

```
robot-control-simulator/
├── src/
│ ├── components/
│ │ ├── Grid.tsx
│ │ └── Robot.tsx
│ ├── App.tsx
│ ├── index.css
│ ├── main.tsx
│ └── vite-env.d.ts
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
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