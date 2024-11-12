function registerUser(callback) {
    setTimeout(() => {
        let success = Math.random() > 0.2; 

        if (success) {
            console.log("User registered successfully.");
            callback(null);  
        } else {
            callback("Error during registration.");  
        }
    }, 1000);
}

function sendVerification(callback) {
    setTimeout(() => {
        let success = Math.random() > 0.2; 

        if (success) {
            console.log("Verification email sent.");
            callback(null); 
        } else {
            callback("Error sending verification email.");
        }
    }, 1000);
}

function loginUser(callback) {
    setTimeout(() => {
        let success = Math.random() > 0.2; 

        if (success) {
            console.log("User logged in successfully.");
            callback(null); 
        } else {
            callback("Error logging in user.");
        }
    }, 1000);
}

function displayWelcomeMessage(callback) {
    setTimeout(() => {
        let success = Math.random() > 0.2; 

        if (success) {
            console.log("Welcome to the platform!");