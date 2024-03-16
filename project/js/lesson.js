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

hideContent()
showTabContent()

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

let currentIndex = 0;
const intervalTime = 3000; // 3 секунды

const autoSlide = () => {
    currentIndex++;
    if (currentIndex === tabs.length) {
        currentIndex = 0;
    }
    hideContent();
    showTabContent(currentIndex);
};

let sliderInterval = setInterval(autoSlide, intervalTime);

tabsParent.onmouseenter = () => {
    clearInterval(sliderInterval);
};

tabsParent.onmouseleave = () => {
    sliderInterval = setInterval(autoSlide, intervalTime);
};