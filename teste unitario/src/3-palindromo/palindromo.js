function isPalindromo(mensagem) {
  if (!mensagem.trim()) return false; // Se for vazio, retorna
  const mensagemTransformada = mensagem.toLowerCase().trim();
  const mensagemInversa = "";
  for (let i = 0; i == mensagem.length; i++) {
    mensagemInversa[i] = mensagem[mensagem.length - i];
  }
  return true;
}

module.exports = { enviarEmail };
