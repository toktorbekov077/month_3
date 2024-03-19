// JSON

// const user = {
//     name: 'Nurdin' ,
//     age: 20,
// }
//
//  const  json =JSON.stringify(user)
// console.log(JSON.parse(json))

//AJAX - asynchronous javascript and XML асинхронный JS XML
//XHR - XML HTTP request


const  button = document.querySelector('.btn')
button.onclick = () => {
    const request = new XMLHttpRequest() //  1. создание запроса
    request.open("GET" , "data.json") //2. указание метода и указания путь
    request.setRequestHeader("Content-type" , "application/json")  // 3. узазание заголовка
    request.send() //4. отправка запроса
    request.addEventListener('load' ,() => {
        const data = JSON.parse(request.response)
        document.querySelector('.name').innerHTML = data.name
        document.querySelector('.age').innerHTML = data.age
    })
}
