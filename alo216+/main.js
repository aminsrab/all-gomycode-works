// main.js

function control() {
    // Prevent the default form submission to keep the page from reloading
    event.preventDefault();

    // Get the values from the form fields
    const name = document.getElementById("exampleInputName").value;
    const password = document.getElementById("exampleInputPassword1").value;
    const phone = document.getElementById("exampleInputPhone").value;

    // Validate the form fields (you can add your custom validation logic here)
    if (name === "" || password === "" || phone === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Perform your desired action (e.g., send data to a server)
    // For now, let's just display the values
    alert("Name: " + name + "\nPassword: " + password + "\nPhone: " + phone);

    // Optionally, you can reset the form
    document.getElementById("exampleInputName").value = "";
    document.getElementById("exampleInputPassword1").value = "";
    document.getElementById("exampleInputPhone").value = "";
}// main.js

function control() {
    // Prevent the default form submission to keep the page from reloading
    event.preventDefault();

    // Get the values from the form fields
    const name = document.getElementById("exampleInputName").value;
    const password = document.getElementById("exampleInputPassword1").value;
    const phone = document.getElementById("exampleInputPhone").value;

    // Validate the form fields (you can add your custom validation logic here)
    if (name === "" || password === "" || phone === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Perform your desired action (e.g., send data to a server)
    // For now, let's just display the values
    alert("Name: " + name + "\nPassword: " + password + "\nPhone: " + phone);

    // Optionally, you can reset the form
    document.getElementById("exampleInputName").value = "";
    document.getElementById("exampleInputPassword1").value = "";
    document.getElementById("exampleInputPhone").value = "";
}