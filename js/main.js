//First I will create variables out of the input fields.
var firstName = document.getElementById("firstName")
var lastName = document.getElementById("lastName")
var phoneNumber = document.getElementById("phoneNumber")
var emailInput = document.getElementById("emailInput")

//getting the input for the selectable inputs.
var genderInput = document.getElementsByClassName("gender")
var colorInput = document.getElementsByClassName("userColor")
var birthInput = document.getElementsByClassName("userBirth")

//assigning the submitButton function
var submitBtn = document.getElementById("submitButton")
submitBtn.addEventListener('click', submitButton, false);


function submitButton() {
	//here I'' grab the values of the inputs and then input them into the results section.
	var fnInput = firstName.value
	var lnInput = lastName.value
	var pnInput = phoneNumber.value
	var eInput = emailInput.value


	//This will hide the previous form, and display only the new material.

	document.getElementById("questions").style.display = "none"
	document.getElementById("results").style.visibility = "visible"

	var results = document.getElementById("results")
	//Inserting the name
	var newName = document.getElementById("newUserName")
	newName.textContent = "Name: " + fnInput + " " + lnInput
	//inserting gender
	var newGender = document.getElementById("newUserGender")
	//inserting phone number
	var newPhone = document.getElementById("newUserPhone")
	newPhone.textContent = "Phone Number: " + pnInput
	//inserting email
	var newEmail = document.getElementById("newUserEmail")
	newEmail.textContent = "Email Address: " + eInput
	//inserting color
}
