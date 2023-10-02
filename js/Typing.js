// Função para simular digitação progressiva
function typeWriter(textElement, text, i) {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(textElement, text, i);
        }, 50); // Ajuste o valor do intervalo para controlar a velocidade da digitação
    }
}

// Inicie a animação de digitação quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", function () {
    var textElement = document.getElementById("typing-text");
    var text = textElement.textContent; // Obtém o texto original (sem HTML)

    // Limpe o conteúdo original
    textElement.innerHTML = "";

    // Crie elementos para a digitação progressiva e a barra vertical
    var typingSpan = document.createElement("span");
    typingSpan.className = "typing";
    textElement.appendChild(typingSpan);

    var blinkSpan = document.createElement("span");
    blinkSpan.className = "blink";
    blinkSpan.innerHTML = "|";
    textElement.appendChild(blinkSpan);

    // Inicie a digitação progressiva
    typeWriter(typingSpan, text, 0);
});
