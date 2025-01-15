
// Newsletter subscription script
document.addEventListener('DOMContentLoaded', () => {
    const subscribeForm = document.querySelector('#subscribeForm');
    subscribeForm.addEventListener('submit', (event) => {
        const email = document.querySelector('#email').value.trim();
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        } else {
            alert('Thank you for subscribing!');
        }
    });
});
