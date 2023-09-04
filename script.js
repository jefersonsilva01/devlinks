function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');

  // pega a tag img
  const img = document.querySelector('#profile img');

  // substituir a imagem
  if (html.classList.contains('light')) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png');
    img.setAttribute('alt', 'Foto de perfil do Jef com óculos escuro, camiseta preta em um fundo amarelo.');
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png');
    img.setAttribute('alt', 'Foto de perfil do Jef com óculos normal, camiseta preta em um fundo azul.')
  }

}