// /*
// 		Your Name: Cierra Washington
// 		Last Modified Date: 06/28/2023
// 		File: event_registration.js
// 		File Description: The purpose of this file is to implement the logic for the frontend of an application for buying tickets.
// */

// // Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// // Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

// /*** YOUR CODE STARTS BELOW HERE ***/

let remainingTime = 10 * 60; // 10 minutes in seconds

let timerInterval; // Declare the timerInterval variable in the outer scope

document.addEventListener('DOMContentLoaded', function() {
	const timerElement = document.getElementById('timer');
  
	function updateTimer() {
	  const minutes = Math.floor(remainingTime / 60);
	  const seconds = remainingTime % 60;
  
	  // Format the time and update the timer element
	  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	  timerElement.textContent = formattedTime;
  
	  remainingTime--;
  
	  // Check if the remaining time has expired
	  if (remainingTime < 0) {
		clearInterval(timerInterval); // Stop the timer interval
		alert('Your timer has expired.');
		location.href = location.href; // Redirect to the same page
	  }
	}
  
	updateTimer(); // Display the initial timer value
  
	timerInterval = setInterval(updateTimer, 1000); // Update the timer every second
  });

function calculateTotal() {
  const ticketQuantityInput = document.getElementById('numTickets');
  const totalCostElement = document.getElementById('totalCost');
  const ticketQuantity = parseInt(ticketQuantityInput.value);

  // Check if the ticket quantity is invalid
  const isInvalidQuantity = isNaN(ticketQuantity) || ticketQuantity < minTickets || ticketQuantity > maxTickets;
  ticketQuantityInput.classList.toggle('error', isInvalidQuantity);
  const totalCost = isInvalidQuantity ? 0 : ticketQuantity * (costPerTicket + ticketSurcharge);
  totalCostElement.value = isInvalidQuantity ? '$0.00' : `$${totalCost.toFixed(2)}`;

  // Show or hide the contact information section based on the validity of the ticket quantity
  const contactInformation = document.getElementById('contactInformation');
  contactInformation.style.display = isInvalidQuantity ? 'none' : 'block';
}

function validateName() {
  const nameInput = document.getElementById('name');

  // Check if the name input is empty
  nameInput.classList.toggle('error', nameInput.value.trim() === '');
}

function validateEmail() {
  const emailInput = document.getElementById('email');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email input matches the email regex pattern
  emailInput.classList.toggle('error', !emailRegex.test(emailInput.value));
}

function completePurchase() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  // Check if the name input or email input is empty or invalid
  nameInput.classList.toggle('error', nameInput.value.trim() === '');
  emailInput.classList.toggle('error', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value));

  if (nameInput.value.trim() !== '' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
    const totalCost = parseInt(document.getElementById('numTickets').value) * (costPerTicket + ticketSurcharge);
    alert(`Thank you for your purchase! Total amount: $${totalCost.toFixed(2)}`);
    clearInterval(timerInterval); // Assuming timerInterval is accessible here
	validateName();
  }
  if(emailInput.value.trim() !== /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)){
	validateEmail();
  }
}


