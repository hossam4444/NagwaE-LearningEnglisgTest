# Part of Speech Interactive Practice App

This project is an interactive activity designed to help students practice categorizing words according to their part of speech. It consists of a client-side application built with React.js and a server-side application built with Node.js and Express.js.

## Table of Contents

- [Part of Speech Interactive Practice App](#part-of-speech-interactive-practice-app)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Requirements](#requirements)
  - [Installation \& Run](#installation--run)
  - [API Endpoints](#api-endpoints)
    - [Server-side API Endpoints](#server-side-api-endpoints)
    - [For API Quick Overview](#for-api-quick-overview)
    - [Client-side Routes](#client-side-routes)
  - [Screenshots](#screenshots)
    - [Home Landing Page](#home-landing-page)
    - [Real Case Scenario](#real-case-scenario)
    - [Responsive](#responsive)
  - [Bonus Features](#bonus-features)
  - [Contributing](#contributing)
  - [License](#license)

## Description

In this project, i've developed an interactive application that allows students to practice categorizing words into different parts of speech. The client-side application fetches a list of words from the server-side API, presents them to the student one by one, and provides feedback on the correctness of their choices. The application also tracks the student's progress and displays their rank upon completing the activity.

## Requirements

To run this project, you need to have the following tools and technologies installed:

- Node.js
- npm (Node Package Manager)
- Git (for cloning the repository)

## Installation & Run

1. Clone the repository:

   ```bash
   git clone https://github.com/hossam4444/Part-of-Speech-Interactive-Practice-App.git
   ```

   ```bash
   cd Part-of-Speech-Interactive-Practice-App
   ```

2. Server Side

   1. Install server-side dependencies:

      ```bash
      cd serverSide
      ```

      ```bash
      npm install
      ```

   2. Run the application in development mode with live reload at `http://localhost:3000`:

      ```bash
      npm run dev:server
      ```

      OR

   3. Run the application as Production :

      ```bash
      npm start
      ```

3. Client Side

   1. Install client-side dependencies:

      ```bash
      cd ../clientSide
      ```

      ```bash
      npm install
      ```

   2. To Run The clint side ( React App as a <span style="color:red;font-weight:bold">production</span>)

      1. Need to Install Serve for first Time Only Just in Case you dont have it

         ```bash
         npm install -g serve
         ```

      2. Rediirect dist Directory
         ```bash
         cd dist
         ```
      3. To Run the App on port 3001 beqause in default it run on 3000 and the server side app running on 3000
         ```bash
         serve -l 3001
         ```

   3. To Run The clint side ( React App as
      <span style="color:red; font-weight:bold">
      Development
      </span>mode)

      ```bash
      npm run dev
      ```

## API Endpoints

### Server-side API Endpoints

[Professional API Docs In Postman DOCS](https://documenter.getpostman.com/view/27503053/2s9Y5SXRnZ 'API Docs Page')

### For API Quick Overview

- `GET /words`: Returns a list of 10 random words selected from the words list.
- `POST /words`: To Verify if the Question Answer is true or not while Providing the Question Id: Number and the Answer: String if true you get Correct: String else you get Not Correct: String
- `POST /rank`: Accepts the final score in the request body and responds with the rank percentage rounded to the nearest hundredth.

### Client-side Routes

- `/`: Home Landing Page.
- `/test`: Practice screen where students categorize words.
- `/rank`: Rank screen displayed after the final question.

## Screenshots

### Home Landing Page

![Home Landing Page](./HomeLandingPage.png 'Home Landing Page')

### Real Case Scenario

![Real Case Scenario Overview](./OverView.gif 'Real Case Scenario')

### Responsive

![Responsiveness Overview](./responsive.gif 'Responsive Components')

## Bonus Features

1. Implemented TypeScript for improved type safety.
2. Provided a "Hint" option ( Comming Soon )
3. Included a leaderboard on the rank screen to show the top performing peers.( Comming Soon )

## Contributing

Contributions are welcome! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: git checkout -b feature/your-feature-name.
3. Commit your changes and push to the new branch: git commit -m "Add some feature" && git push origin feature/your-feature-name.
4. Submit a pull request detailing your changes.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
