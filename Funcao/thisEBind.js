const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar() //chama a funcao normal

const falar = pessoa.falar  //cria ums constante pra chamar a funcao 'falar'. DA RUIM SE NAO USAR O BIND
falar() //function falar pega o saudacao fora do bloco da funcao, pq foi criado uma const q chamo a funcao em outro bloco

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()