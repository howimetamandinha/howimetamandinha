function validarFormulario(nome, email, idade, opcao) {
  if (!nome || nome.length < 3) {
    console.log("Erro: Nome deve ter pelo menos 3 caracteres.");
  } else if (!email || typeof email !== "string") {
    console.log("Erro: Email inválido.");
  } else {
    let temArroba = false, temPonto = false;
    for (let i = 0; i < email.length; i++) {
      if (email[i] === "@") temArroba = true;
      if (email[i] === ".") temPonto = true;
    }
    if (!temArroba || !temPonto) {
      console.log("Erro: Email deve conter '@' e '.'");
    } else if (isNaN(idade) || idade < 18 || idade > 65) {
      console.log("Erro: Idade deve ser entre 18 e 65.");
    } else if (!["Opção 1", "Opção 2", "Opção 3"].includes(opcao)) {
      console.log("Erro: Selecione uma opção válida.");
    } else {
      console.log("Formulário válido!");
    }
  }
}
