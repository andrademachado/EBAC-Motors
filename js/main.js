$(document).ready(function() {
    $('#Corousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00)00000-0000')

    $('form').validate({
        rules: {
            nome:{
                requerid: true
            },
            email:{
                requerid: true,
                email: true
            },
            telefone:{
                requerid: true
            },
            mensagem: {
                requerid: true,
            },
            veiculoDeInteresse: {
                requerid:false,
            }
        },
        messages: {
            nome:'Por favor, insira o seu nome '
        },
        subimitHandler:function(form) {
            console.log(form)
        },
        invalidHandler: function(evento,validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }

        }
        
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');

        const nomeVeiculo = $(this).parent().find('h3').tex();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

})