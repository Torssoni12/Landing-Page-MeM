const counters = document.querySelectorAll(".services-card span"); //Pega todos os elementos span, debtro da classe CSS "services-card"
const container = document.querySelector(".services-card"); //seleciona um elemento e o guarda na variavel Container

let actividad = false; //let = valores que podem ser alterados

window.addEventListener("scroll",() => {

    if(pageYOffset > container.offsetTop - container.offsetHeight - 200 && actividad === false) //Quando um envento de rolagem for executado dentro do limite determinado dentro do Container, faça algo
    {
        counters.forEach(counter =>{ //atribui todos os valores dentro de counter a zero, ou seja : <h2>2</h2> => <h2> 0 </h2>
            counter.innerText = 0;

                let count = 0;
                updateCount();

                actividad = true;
              
            function updateCount(){
                const target = parseInt(counter.dataset.count);
                
                if(count < target){
                    count++;
                    counter.innerText = count;
                    setTimeout(updateCount, 10);

                }else{
                    counter.innerText = target;
                }
            }
        });

    }else if(pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && actividad === true){
        counters.forEach(counter =>{
            counter.innerText = 0;
        });
        actividad = false;
    }

});

// acordeão funcional: 1 botão só por card, alterna classe + aria-expanded
document.querySelectorAll('[data-toggle]').forEach(function (titleEl) {
    var card = titleEl.closest('.card');
    var desc = card.querySelector('.card-description');
    var btn = card.querySelector('.toggle-btn');
 
    function toggle() {
        var isOpen = desc.classList.toggle('ativo');
        btn.classList.toggle('rotated', isOpen);
        btn.setAttribute('aria-expanded', isOpen);
    }
 
    titleEl.addEventListener('click', toggle);
});
 
// abre o primeiro card por padrão
 
// efeito de digitação real (texto no DOM, acessível e indexável)
var words = ['pode oferecer.', 'pode desenvolver.', 'pode entregar.', 'pode fabricar.', 'pode transformar.'];
var wordEl = document.getElementById('typed-word');
var wordIndex = 0;
 
function cycleWords() {
    wordEl.style.transition = 'opacity .3s ease';
    wordEl.style.opacity = 0;
    setTimeout(function () {
        wordIndex = (wordIndex + 1) % words.length;
        wordEl.textContent = words[wordIndex];
        wordEl.style.opacity = 1;
    }, 300);
}
 
setInterval(cycleWords, 2800);

// QUBRA DE LINHA "..." NO CARD DE SERVIÇOS
document.querySelectorAll(".quebra-Linha").forEach(item => {
    const limite = 50;

    if (item.textContent.length > limite) {
        item.textContent = item.textContent.substring(0, limite) + "...";
    }
});