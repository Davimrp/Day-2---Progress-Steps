const box1 = document.querySelector('#box1')
const box2 = document.querySelector('#box2')
const box3 = document.querySelector('#box3')
const box4 = document.querySelector('#box4')
const box5 = document.querySelector('#box5')

const dimuiTodos =() =>{
    box1.style.width = '7%'
    box2.style.width = '7%'
    box3.style.width = '7%'
    box4.style.width = '7%'
    box5.style.width = '7%'
}

const verifica =(e) =>{
    if(e.target == box1){
        dimuiTodos()
        box1.style.width = '70%'
        
    }
    if(e.target == box2){
        dimuiTodos()
        box2.style.width = '70%'
    }
    if(e.target == box3){
        dimuiTodos()
        box3.style.width = '70%'
    }
    if(e.target == box4){
        dimuiTodos()
        box4.style.width = '70%'
    }
    if(e.target == box5){
        dimuiTodos()
        box5.style.width = '70%'
    }
}


document.addEventListener('click', verifica)