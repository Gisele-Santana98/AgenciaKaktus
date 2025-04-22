// Para frase anima da introdução

const frases = [
    "Seu Negócio.",
    "Sua Marca.",
    "Seu Sonho.",
    "Seus Resultados."
  ];
  
  const elemento = document.getElementById("frase-animada");
  let index = 0;
  
  function mostrarFrase() {
    elemento.classList.remove("mostrar");
  
    setTimeout(() => {
      elemento.textContent = frases[index];
      elemento.classList.add("mostrar");
      index = (index + 1) % frases.length;
    }, 500);
  }
  
  mostrarFrase();
  setInterval(mostrarFrase, 3000);
  

// Script de exemplo (Adicione funcionalidades conforme necessário)
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn');
    
    btn.addEventListener('click', () => {
        alert('Saiba mais clicado!');
    });
});

//Faq Preguntas
// const questions = document.querySelectorAll(".faq-question");

// questions.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const item = btn.parentElement;
//     item.classList.toggle("active");
//   });
// });
