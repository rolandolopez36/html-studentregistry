# Student Registration and Inquiry

This project is a simple decentralized application (DApp) that allows students to register, view their own data, and inquire about the list of all registered students. The frontend is built with HTML and JavaScript, while the smart contract is deployed on the Ethereum blockchain.

## Project Structure

- `index.html`: The main HTML file containing the structure of the web application.
- `app.js`: The JavaScript file that contains the logic to interact with the smart contract and MetaMask.
- `constants.js`: Contains the ABI and contract address for the smart contract.
- `ethers-5.6.esm.min.js`: The ethers.js library used to interact with the Ethereum blockchain.
- `LICENSE`: The license file for the project.

## Features

1. **Connect to MetaMask**: Users can connect their MetaMask wallet to interact with the DApp.
2. **Register a Student**: Allows a student to register by providing their name, age, and course.
3. **View Personal Data**: Students can view their registered data.
4. **View All Students**: Allows users to view the list of all registered students.

## Setup and Installation

### Prerequisites

- Node.js and npm installed.
- MetaMask extension installed in your web browser.
- A deployed smart contract on the Ethereum network.

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/rolandolopez36/html-studentregistry.git
   cd html-studentregistry
   ```

2. Open `index.html` in your preferred web browser.

3. Ensure that MetaMask is configured to connect to the correct Ethereum network where the smart contract is deployed.

4. Update `constants.js` with the correct ABI and contract address of your deployed smart contract.

## Usage

1. **Connect to MetaMask**: Click on the "Connect" button to connect your MetaMask wallet.
2. **Register a Student**:
   - Fill out the form with your name, age, and course.
   - Click the "Register Student" button to register your data on the blockchain.
3. **View Personal Data**:
   - Click the "Inquire My Data" button to view your registered data.
4. **View All Students**:
   - Click the "Inquire All Students" button to view the list of all registered students.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
