
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function () {
        const input = this.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            this.firstElementChild.classList.remove('fa-eye-slash');
            this.firstElementChild.classList.add('fa-eye');
        } else {
            input.type = 'password';
            this.firstElementChild.classList.remove('fa-eye');
            this.firstElementChild.classList.add('fa-eye-slash');
        }
    });
});

