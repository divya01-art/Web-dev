document.getElementById('createAccountForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get form values
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const password = document.getElementById('password').value;
  
    // Basic validation
    if (name === ''  mobile === ''  password === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    if (password.length !== 8) {
      alert('Password must be exactly 8 characters long.');
      return;
    }
  
    alert(Account created successfully for: ${name}); });
  
  document.getElementById('helpButton').addEventListener('click', function () {
    alert('For help, contact support at support@campsandtrails.com');
  });