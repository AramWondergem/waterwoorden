# Waterwoorden


## Introduction

This [app](https://everdienbreken.org/Waterwoorden/) is part of “Een Waal van Woorden,” a work by visual artist [Everdien Breken](https://everdienbreken.org/). The project transforms words from this app into a virtual river flowing across the screen. The ‘Waal’ serves as a tribute to the long-standing relationship the Dutch have with water. You can see a short preview [here](https://www.visual-art-research.com/2020/10/waal-van-woorden/).

## Running Locally


To run the application locally, follow these steps:

1. **Install Node.js and Angular CLI**:
   Make sure Node.js is installed on your system. You can download it from [Node.js official website](https://nodejs.org/).
     Install Angular CLI globally using npm:
     ```bash
     npm install -g @angular/cli
     ```

2. **Clone the Repository**:
   Clone the project repository to your local machine:
     ```bash
     git clone <repository-url>
     ```

4. **Navigate to the Project Directory**:

   ```bash
   cd <project-directory>

5. **Install Dependencies**: Run the following command to install the required dependencies:
    ```bash
    npm install
    ```
    
6. **Add two csv files to the project**:
    add the following two files in `src/assets`

    - waternamen03_R_mensgemaakt.csv
    - waternamen03_L_natuurlijk.csv

    with the following setup for the csv file

    ```csv
    word,synonyms,definition

    example: 
    rak,"gewade, gewas, ongemak, rak",ondiep voor schepen gevaarlijk water
    ```
8. **Start the Development Server**
    ```bash
    ng serve
    ```

9. Open your browser and go to [http://localhost:4200](http://localhost:4200) to view the app.

