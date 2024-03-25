//phone checker
const  phoneInput = document.querySelector('#phone_input')
const  phoneButton = document.querySelector('#phone_button')
const  phoneSpan = document.querySelector('#phone_result')

const  regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () =>{
    if (regExp.test(phoneInput.value.trim())) {
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    }else {
        phoneSpan.innerHTML = ' NOT OK'
        phoneSpan.style.color = 'red'
    }
})

const tabContents = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent =document.querySelector('.tab_content_items')
let currentTab = 0


const hideContent = () => {
    tabContents.forEach((content)=>{
        content.style.display='none'
    })

    tabs.forEach((tab)=> {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent=(index=0)=>{
    tabContents[index].style.display='block'
    tabs[index].classList.add('tab_content_item_active')
}

const switchTab = () => {
    hideContent()
    currentTab = (currentTab +1) % tabs.length
    showTabContent(currentTab)
}

hideContent()
showTabContent()
setInterval(switchTab,3000)

tabsParent.onclick=(event)=>{
    if(event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab,tabIndex)=>{
            if(event.target===tab){
                hideContent()
                showTabContent(tabIndex)
            }
        })
    }
}

const somInput = document.querySelector("#som")
const usdInput = document.querySelector("#usd")
const eurInput = document.querySelector("#eur")

const converter = (element, targetElement, anotherElement, current) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)

            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    anotherElement.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    anotherElement.value = (element.value * data.usd / data.eur).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    anotherElement.value = (element.value * data.eur / data.usd).toFixed(2)
                    break
                default:
                    break
            }

            element.value === '' && (targetElement.value =  anotherElement.value = '')

        }
    }
}

converter(somInput, usdInput, eurInput, 'som')
converter(usdInput, somInput, eurInput, 'usd')
converter(eurInput, somInput, usdInput, 'eur')

//card switcher
const cardBlock = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')
let count = 1

const fetchData = (count) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then(response => response.json())
        .then(data => {
            cardBlock.innerHTML = `
                <p>${data.title}<p/>
                <p style="color:${data.completed ?'green': 'red'}">${data.completed}<p/>
                <span>${data.id}<span/>
            `
        })
}

btnNext.onclick = () => {
    count = count === 200 ? 1 : count + 1
    fetchData(count)
}

btnPrev.onclick = () => {
    count = count === 1 ? 200 : count - 1
    fetchData(count)
}
const loadCard = () => {
    fetchData(1)
}

window.onload = loadCard

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data))
