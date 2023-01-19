const form = document.querySelector('#form');
const usernameInput = document.querySelector('#username').parentNode;

class UI {

    showMessage(type, message) {

        const divAlert = document.querySelector('.alert');
        
        if(!divAlert) {
            const divMessage = document.createElement('div');
            divMessage.classList.add('alert');
            divMessage.textContent = message;
    
            if(type === 'error') {
                divMessage.classList.add('error');
            } else {
                divMessage.classList.add('success');
            }
    
            form.insertBefore(divMessage, usernameInput);
    
            setTimeout(() => {
                divMessage.remove();
            }, 2000);
        }
    }
}

export default UI;