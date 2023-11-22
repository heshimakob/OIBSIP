// signup function and redirection
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('User has been registered!');
        location.href = '../portofolio/index.html';
    } else {
        alert('Please fill out all fields.');
    }
});


// loginfunction

document.getElementById('signinForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('signinUsername').value;
    const password = document.getElementById('signinPassword').value;

    if (username && password) {
        alert('User has been logged in!');
        location.href = '../portofolio/index.html';
    } else {
        alert('Please fill out all fields.');
    }
});