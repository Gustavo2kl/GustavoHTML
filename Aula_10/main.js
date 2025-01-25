


$('#adicionar').on('click', () => {
    let oi = $("#pegar").val()
    $("ul").append("<li class = text-white>" + oi + "</li>")

})


$('#remover').on('click', () => {
    $("ul").empty()



})



// no click do add
// pegar o valor do inout
// criar uma li com o valor do input
// colocar na minha ul