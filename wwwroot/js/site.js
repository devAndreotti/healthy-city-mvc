// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function cadastro() {
    const parametros = {
        Nome: $("#nome").val().trim(),
        Email: $("#email").val().trim(),
        Mensagem: $("#mensagem").val().trim(),
    };

    $.post("/Home/Cadastrar", parametros)
        .done(function(data) {
            const message = data.status === "OK" 
                ? "<div class='alert alert-success'>Sua mensagem foi enviada!</div>"
                : "<div class='alert alert-danger'>Erro ao enviar!</div>";
            
            $("#frmCadastro").hide().after(message);
        })
        .fail(function() {
            $("#frmCadastro").after("<div class='alert alert-danger'>Erro no servidor</div>");
        });
}

function typeWriter(elementId, text, speed = 50) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.innerHTML = ''; // Clear the element first
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

$(document).ready(function() {
    $("#frmCadastro").submit(function(e) {
        e.preventDefault();
        cadastro();
    });

    // Animação de digitação para o título
    if ($("#typing-title").length) {
        typeWriter("typing-title", "Movimento na Cidade", 100);
    }

    // Efeito de piscar para o cursor
    setInterval(function() {
        $('.typing-cursor').fadeOut(500).fadeIn(500);
    }, 1000);

    updateNextEvent();
    
    // Update modal content
    $('#ModalAgenda').on('show.bs.modal', function (e) {
        let modalBody = $(this).find('.modal-body ul');
        modalBody.empty();
        events.forEach(event => {
            let listItem = `
                <li class="list-group-item py-2">
                    <h6 class="mb-1">${event.title}</h6>
                    <p class="mb-0 small">${event.date.toLocaleString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })} - ${event.description}</p>
                </li>
            `;
            modalBody.append(listItem);
        });
    });
});

let events = [
    { date: new Date("Sep 25, 2024 20:30:00"), title: "Caminhada no Parque", description: "Venha participar de uma caminhada saudável no parque da cidade!" },
    { date: new Date("Oct 15, 2024 14:00:00"), title: "Workshop de Nutrição", description: "Aprenda sobre alimentação saudável com nossos nutricionistas!" },
    { date: new Date("Nov 10, 2024 09:00:00"), title: "Aula de Yoga ao Ar Livre", description: "Relaxe e fortaleça seu corpo com uma aula de yoga gratuita no parque!" },
    { date: new Date("Dec 05, 2024 18:30:00"), title: "Palestra sobre Saúde Mental", description: "Participe de uma palestra informativa sobre a importância da saúde mental!" }
];

function updateNextEvent() {
    const now = new Date().getTime();
    const nextEvent = events.find(event => event.date.getTime() > now);

    if (nextEvent) {
        document.getElementById("next-event-title").textContent = nextEvent.title;
        document.getElementById("next-event-date").textContent = nextEvent.date.toLocaleString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        document.getElementById("next-event-description").textContent = nextEvent.description;
        startCountdown(nextEvent.date);
        document.getElementById("countdown").style.display = "flex";
    } else {
        document.getElementById("next-event-title").textContent = "Nenhum evento próximo";
        document.getElementById("next-event-date").textContent = "";
        document.getElementById("next-event-description").textContent = "Fique atento para novos eventos!";
        document.getElementById("countdown").style.display = "none";
    }
}

function startCountdown(countDownDate) {
    const x = setInterval(function() {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days.toString().padStart(2, '0');
        document.getElementById("hours").innerHTML = hours.toString().padStart(2, '0');
        document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, '0');

        if (distance < 0) {
            clearInterval(x);
            updateNextEvent();
        }
    }, 1000);
}