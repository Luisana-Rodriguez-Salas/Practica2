$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        
        var username = $('#username').val().trim();
        var password = $('#password').val().trim();
        
        if (username === '' || password === '') {
            $('#errorMessage').text('Please enter both username and password.').removeClass('d-none');
        } else if (username === 'demo' && password === 'password') {
            window.location.href = 'timeline.html';
        } else {
            $('#errorMessage').text('Invalid username or password.').removeClass('d-none');
        }
    });
});
