function validarFormulario(nome, email, idade, opcaoSelecionada) {
    let erros = [];

    // Validação do nome
    if (!nome || nome.length < 3) {
        erros.push("O nome deve ter pelo menos 3 caracteres.");
    }

    // Validação do email
    if (!email.includes("@") || !email.includes(".")) {
        erros.push("O email deve ser válido e conter '@' e '.'.");
    }

    // Validação da idade
    if (isNaN(idade) || idade < 18 || idade > 65) {
        erros.push("A idade deve ser um número entre 18 e 65.");
    }

    // Validação da opção selecionada
    if (!opcaoSelecionada) {
        erros.push("Uma opção deve ser selecionada.");
    }

    return erros.length > 0 ? erros : "Formulário válido!";
}
