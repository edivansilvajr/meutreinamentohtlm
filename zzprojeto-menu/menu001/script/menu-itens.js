let iconBurguer = document.getElementById('iconBurguer')
let itensMenu = document.getElementById('itensMenu')

iconBurguer.onclick = function() {
    

    if(itensMenu.style.display == 'block') {
        itensMenu.style.display = 'none'
    } else {
        itensMenu.style.display = 'block'
    }
}