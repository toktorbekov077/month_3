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

let secondsValue = 0;
let intervalId;

function startCounter() {
    intervalId = setInterval(() => {
        secondsValue++;
        document.getElementById('seconds').innerText = secondsValue;
    }, 1000);
}

function stopCounter() {
    clearInterval(intervalId);
}

function resetCounter() {
    clearInterval(intervalId);
    secondsValue = 0;
    document.getElementById('seconds').innerText = secondsValue;
}

document.getElementById('start').addEventListener('click', startCounter);
document.getElementById('stop').addEventListener('click', stopCounter);
document.getElementById('reset').addEventListener('click', resetCounter);

