const form =document.querySelector('.contact_form'),
function sendMsg(e){
    e.preventDefault();
    
        const name = document.querySelector('.name'),
            email = document.querySelector('.email'),
            phone = document.querySelector('.phone'),
            business = document.querySelector('.business'),
            message = document.querySelector('.message');
    Email.send({
        SecureToken : "b91dd5b6-9e7b-4711-8c45-5e83977ade76",
        To : 'thang.dq@vlinkgroup.net',
        From : "no-reply@vlinkgroup.net",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
        message => alert(message)
    );
}
form.addEventListener('submit',sendMsg)