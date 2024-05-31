document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            
            if (value === 'C') {
                display.textContent = '0';
            } else if (value === '=') {
                try {
                    display.textContent = eval(display.textContent.replace('%', '/100'));
                } catch {
                    display.textContent = 'Error';
                }
            } else {
                if (display.textContent === '0' || display.textContent === 'Error') {
                    display.textContent = value;
                } else {
                    display.textContent += value;
                }
            }
        });
    });
});
