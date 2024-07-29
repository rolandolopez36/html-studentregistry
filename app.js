import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

// HTML element references
const connectButton = document.getElementById("connectButton"); // Button to connect MetaMask
const registerForm = document.getElementById("registerForm"); // Form to register students
const personalDataButton = document.getElementById("personalDataButton"); // Button to inquire personal data
const allStudentsButton = document.getElementById("allStudentsButton"); // Button to inquire all students
const personalData = document.getElementById("personalData"); // Container for personal data
const allStudents = document.getElementById("allStudents"); // Container for the list of all students
