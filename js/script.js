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

document.querySelector('.enviar').addEventListener('click', function() {
  var notas = document.querySelectorAll('.nota');
  var notaSelecionada = false;

  for (var i = 0; i < notas.length; i++) {
    if (notas[i].classList.contains('selecionada')) {
      notaSelecionada = true;
      break;
    }
  }

  if (!notaSelecionada) {
    var selecionarElement = document.querySelector('.selecionar');
    selecionarElement.style.opacity = '1';
    selecionarElement.style.margin = '5px';
    selecionarElement.style.animation = 'piscar 2s infinite';
  }

  if (!notaSelecionada) {
    var selecionarElement = document.querySelector('.icon');
    selecionarElement.style.transform = 'rotate(360deg)';
    selecionarElement.style.transition = '1s all';
  }
});



