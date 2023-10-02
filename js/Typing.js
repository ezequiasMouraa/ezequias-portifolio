// Função para simular digitação progressiva
function typeWriter(textElement, text, i) {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(textElement, text, i);
        }, 50); // Ajusta o valor do intervalo para controlar a velocidade da digitação
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var textElement = document.getElementById("typing-text");
    var text = textElement.textContent; // Obtém o texto original (sem HTML)

    // Limpa o conteúdo original
    textElement.innerHTML = "";

    // Cria elementos para a digitação progressiva e a barra vertical
    var typingSpan = document.createElement("span");
    typingSpan.className = "typing";
    textElement.appendChild(typingSpan);

    var blinkSpan = document.createElement("span");
    blinkSpan.className = "blink";
    blinkSpan.innerHTML = "|";
    textElement.appendChild(blinkSpan);

    // Inicia a digitação progressiva
    typeWriter(typingSpan, text, 0);
});
