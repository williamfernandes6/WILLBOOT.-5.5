
const BACKEND_URL = "https://teuprojeto.repl.co"; // Altere aqui para o seu link Replit

function carregarSinais(casa = "elephantbet") {
  fetch(`${BACKEND_URL}/sinais?casa=${casa}`)
    .then(response => response.json())
    .then(data => {
      const sinal = data.sinal;
      const painel = document.getElementById("sinais");
      if (!painel) return;

      const audio = document.getElementById("alerta-audio");
      if (audio) audio.play();

      painel.innerHTML = `
        <div class="sinal-box">
          <h2>🚀 Novo Sinal - ${data.hora}</h2>
          <p><strong>X esperado:</strong> ${sinal.alcance}x</p>
          <p><strong>Tempo estimado:</strong> ${sinal.tempo} segundos</p>
          <p><strong>Confiança:</strong> ${sinal.confianca}%</p>
          <p><em>${sinal.explicacao}</em></p>
        </div>
      `;
    })
    .catch(error => {
      console.error("Erro ao carregar sinais:", error);
    });
}

setInterval(() => {
  carregarSinais();
}, 60000);

window.onload = () => carregarSinais();
