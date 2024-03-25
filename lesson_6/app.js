// console.log("loading...")
// setTimeout(() => {
//     const product = {
//         name: 'Milk',
//         price: '$3'
//     }
//     setTimeout(() => {
//         product.name = 'chocolate milk'
//         product.price = '$5'
//     },2000)
// },1500)

//promise - обещание
//HOF - high ordered function
// console.log("loading...")
// const promise = new Promise((resolve, reject) => {
//     //throw new Error("принудительная ошибка")
//     setTimeout(() => {
//         const product = {
//             name:'milk',
//             price: '$3'
//         }
//         resolve(product)
//         reject()
//     },1500)
// })
//
//
// promise.then((product) => {
//     setTimeout(() => {
//        product.name = 'milk pro'
//        product.price = '$5'
//         console.log('product')
//     },2000)
// }, () => {
//     console.log('promise is not')
// })
//promise.then(() => {},() => {})

//fetch()

// const response = fetch('data.json')
//     .then((result) =>  result.json())
//     .then(data => console.log(data))

//API - application programming interface
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((result) =>  result.json())
    .then(data => console.log(data))
