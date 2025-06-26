# Quiz Application

A simple, interactive quiz application built with React and Vite. This application allows users to answer questions and receive immediate feedback on their answers.

## Features

- Dynamic question loading from a JSON file
- Interactive UI with visual feedback for correct/incorrect answers
- Mobile-responsive design
- Step-by-step navigation through quiz questions
- Completion message when the quiz is finished

## Demo

The application is deployed using GitHub Pages. You can access the live demo [here](https://github.com/tsawm/quizz).

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```
git clone https://github.com/tsawm/quizz.git
cd quizz
```

2. Install dependencies:
```
npm install
```

## Development

To run the application in development mode:

```
npm run dev
```

This will start the development server on [http://localhost:5173](http://localhost:5173).

## Building for Production

To create a production build:

```
npm run build
```

The build files will be stored in the `dist` directory.

## Deployment

The application is configured for deployment with GitHub Pages:

```
npm run deploy
```

This command will build the application and publish it to GitHub Pages.

## Customizing Questions

Questions are stored in the `src/questions.json` file. To add or modify questions, edit this file following the established JSON structure:

```json
[
  {
    "question": "Your question text here",
    "options": [
      "Option 1",
      "Option 2",
      "Option 3",
      "Option 4"
    ],
    "correctIndex": 0  // Index of the correct option (starting from 0)
  }
]
```

## Project Structure

- `src/App.jsx` - Main application component
- `src/questions.json` - Question data
- `src/App.css` - Application styles

## Technologies Used

- React
- Vite
- GitHub Pages (for deployment)

## License

This project is open source and available under the MIT License.
