//Exeplo de callback no browser. código pra ser rodado na web
document.getElementsByTagName('body')[0].onclick = function (e) {
    console.log('O evento ocorreu!!!')
}