let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelector('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura dos dados do formulário
    var formData = new FormData(this);

    // Envia os dados para o serviço de email
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    }).then(function (response) {
        // Verifica se a solicitação foi bem-sucedida
        if (response.ok) {
            // Redireciona para a página de agradecimento
            window.location.href = "obrigado.html";
        } else {
            // Exibe uma mensagem de erro ao usuário
            alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
        }
    }).catch(function (error) {
        // Exibe uma mensagem de erro ao usuário
        alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.");
        console.error('Erro:', error);
    });
});
