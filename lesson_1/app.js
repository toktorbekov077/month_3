// regular expressions
// const name = prompt('введите ваше имя')
//
// const  regExp = /S/ig
//


// const  symbols = 'AAaaBbbCcc'
// const regExp = /c/gi
// //const regExp = new RegExp('c' , 'gi')
//
// console.dir(regExp)
//console.log(symbols.match(regExp))

// const  numbers = '123now123123JU_'
//const regExp =/[0-9a-zA-Z_]/g
// const regExp =/[\W\w]/g

//console.log(numbers.replace(regExp , '*'))
//console.log(numbers.match(regExp))

//Recursion
let count = 0
const recursionCount = () => {
    count++
    console.log(count)
    if (count < 500) {
        recursionCount()
    }else {
        console.log('Recursion')
    }
}
recursionCount()





