# Matrix Calculator

## Overview
This is a Next.js application that generates and displays matrices based on user input. The app allows users to specify the number of rows and columns, generate two matrices, and add them to produce a third matrix.

## Features
- Input fields for specifying the number of rows and columns.
- Generates two matrices:
  - The first matrix contains the sum of the row and column indices.
  - The second matrix contains the product of the row and column indices.
- An "Add Matrix" button that creates a new matrix by summing the corresponding values of the two matrices.

## Prerequisites
Ensure you have the following installed:
- Node.js (>= 16)
- npm or yarn

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/matrix-calculator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd matrix-calculator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

## Running the Project
To start the development server, run:
```sh
npm run dev
```
or
```sh
yarn dev
```
The application will be available at `http://localhost:3000/`.

## Project Structure
- `pages/`: Contains Next.js pages.
- `components/`: Contains reusable components like the `MatrixTable`.
- `styles/`: Contains global styles.

## Usage
1. Enter the desired number of rows and columns.
2. Click the "Generate" button to create two matrices.
3. Click the "Add Matrix" button to generate a third matrix.

## Technologies Used
- **Next.js** - React framework for server-side rendering.
- **TypeScript** - Type safety.
- **Tailwind CSS** - Styling framework.

## License
This project is open-source and available under the [MIT License](LICENSE).