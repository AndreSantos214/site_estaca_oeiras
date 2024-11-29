// Seleciona todos os links no menu
const menuLinks = document.querySelectorAll(".menu a");

// Obtém a URL atual
const currentUrl = window.location.href;

// Percorre cada link para verificar se corresponde à URL atual
menuLinks.forEach((link) => {
  if (link.href === currentUrl) {
    link.classList.add("active"); // Adiciona a classe 'active' ao link correspondente
  }
});
