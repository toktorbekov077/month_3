const  gmailInput = document.querySelector('#gmail_input')
const  gmailButton = document.querySelector('#gmail_button')
const  gmailSpan = document.querySelector('#gmail_result')

const regExp =/[\W\w]gmail.com$/g

gmailButton.addEventListener('click' , () =>{
    if (regExp.test(gmailInput.value.trim())) {
        gmailSpan.innerHTML = 'OK'
        gmailSpan.style.color = 'green'
    }else {
        gmailSpan.innerHTML = ' NOT OK'
        gmailSpan.style.color = 'red'
    }
})

const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')
let position = 0

const movingBlock = () => {
    if (position < 449){
        position++
        childBlock.style.left = `${position}px`
        requestAnimationFrame(movingBlock)
    }
}

movingBlock()