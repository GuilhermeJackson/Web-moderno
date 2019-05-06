function teste1(num) {
    if (num > 7)     //{  {}escopo opcional. some o 'final' no inicio da leitura do codigo
        console.log(num)
        console.log('Final')
           //}final escopo escopo opcional. cara do video é zuado e tem q pesquisar sobre isso
    }


teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); { //cuidar com ; não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)