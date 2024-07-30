// Import the ethers.js library and contract details
import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

// HTML element references
const connectButton = document.getElementById("connectButton"); // Button to connect MetaMask
const registerForm = document.getElementById("registerForm"); // Form to register students
/* const personalDataButton = document.getElementById("personalDataButton"); // Button to inquire personal data
const allStudentsButton = document.getElementById("allStudentsButton"); // Button to inquire all students
const personalData = document.getElementById("personalData"); // Container for personal data
const allStudents = document.getElementById("allStudents"); // Container for the list of all students */

// Assign functions to button events
connectButton.onclick = connect; // Connects MetaMask when clicked
registerForm.onsubmit = registerStudent; // Registers a student when the form is submitted
/* personalDataButton.onclick = viewPersonalData; // Inquires personal data when clicked
allStudentsButton.onclick = viewAllStudents; // Inquires all students when clicked */

// Function to connect to MetaMask
async function connect() {
  // Check if MetaMask is available
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request access to MetaMask account
      console.log("Requesting access to MetaMask...");
      await window.ethereum.request({ method: "eth_requestAccounts" });
      console.log("Connected to MetaMask");
      connectButton.innerHTML = "Connected"; // Update the button text
      // Get connected MetaMask accounts
      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);
      // Check the ETH balance of the connected account
      await checkEthBalance(accounts[0]);
    } catch (error) {
      // Handle any errors during connection
      console.error("Error connecting to MetaMask:", error);
    }
  } else {
    // If MetaMask is not installed, update the button to indicate it needs installation
    connectButton.innerHTML = "Please install MetaMask";
    console.log("MetaMask is not installed");
  }
}

async function checkEthBalance(account) {
  if (window.ethereum) {
    try {
      // Request the balance of the specified account
      const balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [account, "latest"],
      });
      // Display the balance in ETH
      console.log("Eth Balance", ethers.utils.formatEther(balance));
    } catch (err) {
      // Handle any errors when obtaining the ETH balance
      console.error("Error getting ETH balance:", err);
    }
  }
}

// Function to register a student
async function registerStudent(event) {
  event.preventDefault(); // Prevents page reload

  const name = document.getElementById("studentName").value;
  const age = parseInt(document.getElementById("studentAge").value);
  const course = document.getElementById("studentCourse").value;

  // Check if MetaMask is available
  if (typeof window.ethereum !== "undefined") {
    try {
      // Request access to MetaMask account
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);

      // Call the register function on the smart contract
      const transactionResponse = await contract.register(name, age, course);
      await listenForTransactionMine(transactionResponse, provider);
      alert("Student registered successfully!");
    } catch (error) {
      // Handle any errors during the registration
      console.error("Error registering student:", error);
      alert("An error occurred while registering the student.");
    }
  }
}

// Function to listen for transaction confirmation
function listenForTransactionMine(transactionResponse, provider) {
  console.log(`Mining ${transactionResponse.hash}...`);
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReceipt) => {
      console.log(
        `Transaction completed with ${transactionReceipt.confirmations} confirmations.`
      );
      resolve();
    });
  });
}
