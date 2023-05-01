const urlParams = new URLSearchParams(window.location.search);
const notaSelecionada = urlParams.get("nota ");
const notaSelecionadaElemento = document.getElementById("notaSelecionada");
if (notaSelecionada !== null) {
  notaSelecionadaElemento.textContent = `${notaSelecionada}.`;
}
