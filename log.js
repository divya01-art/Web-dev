document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if (email) {
      alert(Signed in with: ${email});
    } 
    else {
      alert('Please enter your email or phone number.');
    }
  });
  
  document.getElementById('helpButton').addEventListener('click', function () {
    alert('Help section is not implemented yet!');
  });
  
  document.getElementById('createAccountButton').addEventListener('click', function () {
    alert('Redirecting to the account creation page...');
  });

    
  