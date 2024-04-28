const limparNumero = (numero) => {
    return numero.replace(/\D/g, '');  // Regex que vai excluir tudo que não for um digito
  };

  export default limparNumero