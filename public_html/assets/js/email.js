// Initialize EmailJS with your user ID
emailjs.init("3cc1UkFouImnoC5vc");

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get user input
    var name = document.getElementById('nameInput').value;
    var email = document.getElementById('emailInput').value;
    var message = document.getElementById('messageInput').value;

    // Send email
    emailjs.send("service_zp8qjwm", "template_7jfjrw4", {
        from_name: name,
        reply_to: email,
        message_html: message
    }).then(function(response) {
        console.log('Email sent:', response);
        alert('Message sent successfully!');
    }, function(error) {
        console.error('Error sending email:', error);
        alert('Failed to send message.');
    });

    // Clear form fields after submission
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('messageInput').value = '';
});
