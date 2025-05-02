const listaCompras = [];

function adicionarItem(item) {
    listaCompras.push(item);
}

function removerItem(item) {
    const index = listaCompras.indexOf(item);
    if (index > -1) listaCompras.splice(index, 1);
}

function exibirItens() {
    console.log(listaCompras);
}

function verificarItem(item) {
    return listaCompras.includes(item);
}
