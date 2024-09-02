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
            
            $("#frm").hide().after(message);
        })
        .fail(function() {
            $("#frm").after("<div class='alert alert-danger'>Erro no servidor</div>");
        });
}

$(document).ready(function() {
    $("#frmCadastro").submit(function(e) {
        e.preventDefault();
        cadastro();
    });        
});