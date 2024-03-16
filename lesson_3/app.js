//classList
const buttons = document.querySelectorAll('button')

// console.log(buttons[0].classList)
// buttons[0].classList.add('red' , 'blue')
// buttons[0].classList.remove('red')
buttons.forEach((button) => {
    button.onclick = (event) => {
       if (event.target.classList.contains('red')){
           event.target.classList.remove('red')
       }else{
           event.target.classList.add('red')
       }
    }
})
