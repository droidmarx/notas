const notas = document.querySelectorAll(".nota");
const enviarButton = document.querySelector(".enviar");

enviarButton.addEventListener("click", () => {
  let notaSelecionada = null;

  // Verifica qual nota foi selecionada
  for (let nota of notas) {
    if (nota.classList.contains("selecionada")) {
      notaSelecionada = nota.id;
      break;
    }
  }

  // Encaminha o usuário para a página desejada
  if (notaSelecionada !== null) {
    window.location.href = `obrigado.html?nota = ${notaSelecionada}`;
  }
});

// Adiciona um ouvinte de evento para cada nota
for (let nota of notas) {
  nota.addEventListener("click", () => {
    // Remove a classe 'selecionada' de todas as notas
    for (let outraNota of notas) {
      outraNota.classList.remove("selecionada");
    }

    // Adiciona a classe 'selecionada' à nota clicada
    nota.classList.add("selecionada");
  });
}
