const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('prev');
const barraDeProgresso = document.getElementById('progress');
const steps = document.querySelectorAll('.step')

contador = 1;
function alterarBarra(){
    if(contador === 1){
        barraDeProgresso.style.width = '0%';
        btnPrev.disabled = true
        btnNext.disabled = false;
        steps[1].classList.remove('circle-active');
    } 
    if(contador === 2){
        barraDeProgresso.style.width = '33%';
        btnPrev.disabled = false;
        steps[1].classList.add('circle-active');
        steps[2].classList.remove('circle-active');
    } 
    if(contador === 3){
        barraDeProgresso.style.width = '66%';
        steps[2].classList.add('circle-active');
        steps[3].classList.remove('circle-active');
    } 
    if(contador === 4){
        barraDeProgresso.style.width = '99%';
        steps[3].classList.add('circle-active');
        btnNext.disabled = true;
    } 
}

btnPrev.addEventListener('click', ()=>{
    contador--
    alterarBarra()
})

btnNext.addEventListener("click", ()=>{
    contador++;
    alterarBarra()
})