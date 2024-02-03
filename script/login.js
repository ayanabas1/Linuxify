function login() {
    // Dummy login logic, replace with actual authentication logic
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Assume successful login for demonstration
    // alert('Login successful!');

    // Redirect to another HTML page (replace 'admin.html' with the actual filename)
    // window.location.href = 'Dashboard.html';


    // Prevent form submission
    return false;
}

// Define the list of admin accounts
var adminAccounts = [
    { username: "ayanabas1", password: "1234" }
];

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Extract username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform authentication for admin accounts only
    var isAdmin = adminAccounts.some(function(account) {
        return account.username === username && account.password === password;
    });

    if (isAdmin) {
        alert("Login successful!");
        window.location.replace("Dashboard.html"); // Redirect to the dashboard page for admins
    } else {
        alert("Invalid username or password. Only admins are allowed.");
        // Clear the input fields if login is not successful
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
});

