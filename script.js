function ativarVoucher() {
  const code = document.getElementById("voucher").value;
  alert("Tentando ativar voucher: " + code);
}
document.addEventListener("DOMContentLoaded", () => {
  const painel = document.getElementById("sinais");
  if (painel) {
    painel.innerHTML = "<p>Carregando sinais com IA...</p>";
    fetch("https://willboot-backend.onrender.com/sinais")
      .then(res => res.json())
      .then(data => {
        painel.innerHTML = "";
        data.forEach(sinal => {
          const el = document.createElement("div");
          el.innerHTML = `
            <p>⏱️ ${sinal.horario} | X: ${sinal.alcance}x | ${sinal.tempo} segundos</p>
            <p>Confiança: ${sinal.confianca}%</p>
            <hr>`;
          painel.appendChild(el);
          const audio = document.getElementById("alerta-audio");
          if (audio) audio.play();
        });
      });
  }
});