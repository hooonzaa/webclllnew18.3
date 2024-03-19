const validCredentials = [
    "petr.ahoj",
    "jana.pizza2",
    "karel.kočka3",
    "eva.12345",
    "adam.švarc"
  ];
  
  function checkLogin() {
    const enteredUsername = document.getElementById('Uname').value.trim();
    const enteredPassword = document.getElementById('Pswrt').value.trim();
    const confirmPassword = document.getElementById('cnfrmPswrt').value.trim();
  
  
    if (enteredUsername.length < 5) {
        displayError("Invalid Username", "Username must be at least 5 characters long.");
        return;
    }
  
    if (enteredPassword.length < 7) {
        displayError("Invalid Password", "Password must be at least 7 characters long.");
        return;
    }
  
    
    if (enteredPassword !== confirmPassword) {
        displayError("Password Mismatch", "Password confirmation does not match the entered password.");
        return;
    }
  
  
    const foundUser = enteredUsername < 5  + "." + enteredPassword < 7;
    if (enteredPassword + enteredUsername.includes(foundUser)) {
         console.log("Login successful.");
        window.location.href = "home.html";
       
    } else {
        displayError("Invalid Credentials", "Please enter valid username and password.");
    }
  }
  
  function displayError(title, text) {
    Swal.fire({
        title: title,
        text: text,
        icon: "error"
    });
  }
  
    
    function Login(){
      window.location.href = "login.html"
      }
  function setGoal() {
      const sport = document.getElementById('sport').value;
      const cíle = document.getElementById('goal').value; 
  
      const progressDiv = document.getElementById('progress');
      progressDiv.innerHTML = 'Vybraný sport: ' + sport + 'goal: ' + cile;
  
      console.log("Selected sport:", sport);
      console.log("Selected goal:", cíle)
  
      }
  
      function DarkMode() {
        const body = document.getElementById('body');
        body.classList.toggle('dark-mode');
    }
    function Home(){
  window.location.href = "home.html"
    }