function validateForm() {
    // Retrieve form input values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zipCode = document.getElementById("zipCode").value;
    var areaCode = document.getElementById("areaCode").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var confirmEmail = document.getElementById("confirmEmail").value;
    var mealPreference = document.querySelector('input[name="mealPreference"]:checked');
    var contactMethods = document.querySelectorAll('input[name="contactMethod"]:checked');
    
    // Array to store error messages
    var errors = [];
  
    // Validate first name: check if it is empty
    firstName === "" ? errors.push("Please enter your first name") : null;
  
    // Validate last name: check if it is empty
    lastName === "" ? errors.push("Please enter your last name") : null;
  
    // Validate address: check if it is empty
    address === "" ? errors.push("Please enter your address") : null;
  
    // Validate city: check if it is empty
    city === "" ? errors.push("Please enter your city") : null;
  
    // Validate state: check if it is empty
    state === "" ? errors.push("Please select your state") : null;
  
    // Validate zip code: check if it is empty or doesn't match the 5-digit pattern
    zipCode === "" || !(/^\d{5}$/.test(zipCode)) ? errors.push("Please enter a valid 5-digit zip code") : null;
  
    // Validate area code: check if it is empty or doesn't match the 3-digit pattern
    areaCode === "" || !(/^\d{3}$/.test(areaCode)) ? errors.push("Please enter a valid 3-digit area code") : null;
  
    // Validate phone number: check if it is empty or doesn't match the 7-digit pattern
    phoneNumber === "" || !(/^\d{7}$/.test(phoneNumber)) ? errors.push("Please enter a valid 7-digit phone number") : null;
  
    // Validate email: check if it is empty or doesn't match the email pattern
    email === "" || !(/^\S+@\S+\.\S+$/.test(email)) ? errors.push("Please enter a valid email address") : null;
  
    // Validate confirm email: check if it matches the email address entered
    email !== confirmEmail ? errors.push("The email addresses do not match") : null;
  
    // Validate meal preference: check if no meal preference is selected
    !mealPreference ? errors.push("Please select a meal preference") : null;
  
    // Validate contact methods: check if less than two contact methods are selected
    contactMethods.length < 2 ? errors.push("Please select at least two contact methods") : null;
  
    // If there are errors, display them using alert
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false; // Prevent form submission
    }
  
    // If no errors, allow form submission
    return true;
  }
