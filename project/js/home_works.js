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
let positionX = 0
let positionY = 0

const maxOffsetWidth =  parentBlock.offsetWidth - childBlock.offsetWidth
const maxOffsetHeight =  parentBlock.offsetHeight - childBlock.offsetHeight

const movingBlock = () => {
    if (positionX < maxOffsetWidth && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(movingBlock)
    } else if (positionX >= maxOffsetWidth && positionY < maxOffsetHeight) {
        positionY++
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(movingBlock)
    } else if (positionY >= maxOffsetHeight && positionX > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        requestAnimationFrame(movingBlock)
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        requestAnimationFrame(movingBlock)
    }
}
movingBlock()



const secondsBlock = document.querySelector('#seconds')
const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const resetButton = document.querySelector('#reset')

let seconds = 0
let interval

startButton.onclick = () => {
    clearInterval(interval)
    interval = setInterval(() => {
        seconds++
        secondsBlock.innerHTML = seconds
    }, 1000)
}

stopButton.onclick = () => {
    clearInterval(interval)
}

resetButton.onclick = () => {
    clearInterval(interval)
    seconds = 0
    secondsBlock.innerHTML = seconds
}
