# architecture Scremplay to Automated Testing for Product Purchase and New User Registration with Faker 

## Descripción
This project aims to automate the functional testing of the product purchase flow and new user registration on the Store website. The tests will be written using Cypress and JavaScript following the Screenplay architecture to ensure modularity, scalability, and reusability. The Faker library is used to generate random data for the new user registration process.

## Requirements
Before starting, make sure you have Node.js and npm installed. You can download them from the official Node.js website.

## Project Structure
The project follows the Screenplay architecture and is structured as follows:

## Estrucutra del proyecto
The project is structured as follows:

```bash
AUTOMATIONEXERCISEBBD
├── cypress
│   ├── config
│   ├── downloands
│   ├── e2e
│   │   ├── features              # Feature files for BDD (Gherkin format)
│   │   │   ├── example.feature
│   │   ├── interaction           # Interactions with UI elements (Screenplay interactions)
│   │   ├── model                 # Data models used for the tests (e.g., user data)
│   │   │   ├── exampleData.js
│   │   ├── pages                 # Page objects representing the UI components
│   │   │   ├── examplePage.js
│   │   ├── question              # Assertions or validations (Screenplay questions)
│   │   ├── stepDefinitions       # Step definitions for BDD scenarios (mapping steps code)
│   │   │   ├── exampleStep.js
│   │   ├── tasks                 # Tasks to perform actions (Screenplay tasks)
│   │   │   ├── exampleTask.js
│   │   ├── util                  # Utility files (helper functions and common utilities)
│   ├── fixtures                  # Static data and external resources
│   │   └──data.json
│   ├── plugins                   # Static data and external resources
│   ├── reports                   # Static data and external resources
│   ├── screenshots               # Imagen resources
│   ├── support                   # Cypress commands and configurations
│   │   └── e2e.ts                # Global test setup
package.json                      # Project dependencies and scripts 
cypress.config.js                 # Cypress configuration
cypress.env.json                  # Environment variables for Cypress
README.md                         # Project documentation
```
## 🚀 Instalación
```bash
npm install
```
## Run the demo:
```bash
npm cy:open 
npx cypress open
```
or
```bash
npm cy:run
```