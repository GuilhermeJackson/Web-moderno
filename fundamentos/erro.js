function tratarErroELancar(erro) {
    //throw new Error('...')    //throw significa lançar
    //throw 10
    //throw true    //tratando o erro com true e false
    //throw 'mensagem'
    throw { //tratando erro com um object passando as informações do nome, mesangem e data do erro entre outros
        nome: erro.nome
        msg: erro.mensagem
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {   //é um bloco que potencialmente pode gerar algum tipo de erro ou não
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {   //tratar o erro apartir do catch tendo um fluxo do tratamento
        tratarErroELancar(e)    //escopo do fluxo do tratamento do erro
    } finally {
        console.log('final')    // independente se ocorrer o erro ou não, o finally vai ser exibido
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritando(obj)