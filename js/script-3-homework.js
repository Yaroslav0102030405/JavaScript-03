// Задача 1
// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
//   };

//   user.mood = "happy"
//   user.hobby = 'skydiving'
//   user.premium = "false"

//   const keys = Object.keys(user)

//   for (const key of keys) {
//     console.log(`${key} : ${user[key]}`)
//   }

  // Задача 2
//   const countProps = function(obj) {
    
//     const keys = Object.keys(obj)
//     return keys.length
//   };
  

//   console.log(countProps({})); // 0
//   console.log(countProps({ name: 'Mango', age: 2 })); // 2
//   console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// Задача 3
// const findBestEmployee = function(employees) {
//   let maxValue = 0;

//   const entries = Object.entries(employees);

//     for (let i = 0; i < entries.length; i += 1) {
//      console.log(entries[i]); 
//      if (entries[i] > maxValue) {
//       entries[i] = maxValue
//      }  
//     } 
//     return entries
    
// }
  
//   console.log(findBestEmployee({ann: 29,david: 35,helen: 1,lorence: 99,}),); // lorence
  
//   console.log(findBestEmployee({poly: 12,mango: 17,ajax: 4,}),); // mango
  
//   console.log(findBestEmployee({lux: 147,david: 21,kiwi: 19,chelsy: 38,}),); // lux

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax']
// console.log(friends)

// // обратиться к элементу массива
// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])
// console.log(friends[3])

// // перезаписать какой-то значение. Нужно обратиться сначала к индексу сделать присвоение а потом записать новое значение
// console.log(friends[0] = 'Zero')
// console.log(friends[1] = 'One')
// console.log(friends[2] = 'Two')
// console.log(friends[3] = 'Three')

// console.log(friends)


// // узнать последний индекс чтобы потом можно было передрать массив
// const lastIndex = friends.length - 1
// console.log(lastIndex)

// // перебор массива для этого есть цикл
// for (let i = 0; i < friends.length; i += 1) {

//   // это обращение к каждому элементу массива на итерации
//   console.log(`${i + 1} - ${friends[i]}`)
// }

// for (const friend of friends) {
//   console.log(friend)
// }

// const cart = [54, 28, 105, 70, 92, 17, 120]
// let total = 0

// for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i])

//   // сложить значение массива и вывести в общий результат
//   total += cart[i]
// }

// console.log('total', total)

// const cart = [54, 28, 105, 70, 92, 17, 120]
// let total = 0

// for (let i = 0; i < cart.length; i += 1) {
//   // тут потренироваться умножать плюсовать и минусовать
//   console.log(cart[i] = Math.round(cart[i] * 1.1))

//   // сложить значение массива и вывести в общий результат
//   total += cart[i]
// }

// console.log('total', total)

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14]
// let total = 0

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i])

//   if (numbers[i] % 2 === 0) {
//     console.log('Четное число')

//     total += numbers[i]
//   }

// }

// for (const number of numbers) {
//   // console.log(number)

//   if (number % 2 === 0) {
//     console.log(`${number} - Четное`)
//     continue
//     // пропускаем итерацию всех нечетных чисел
//     total += number
//   }

//   // if (number % 2 !== 0) {
//   //   console.log(`${number} - Не четное`)
//   //   total += number
//   // }
 
// }

// console.log('total', total)

// const logins = ['Mango', 'Kiwi', 'Poly', 'Ajax']
// const loginToFind = 'Poly'
// let message = ''

// for (let i = 0; i < logins.length; i += 1) {
//   console.log(logins[i])

//   // Проверить выполнение сравнения
//   // console.log(`${logins[i]} === ${loginToFind}`, logins[i] === loginToFind)

//   if (logins[i] === loginToFind) {
//     message = `Пользователь ${loginToFind} найден`
//     break
//   } else {
//     message = `Пользователь ${loginToFind} не найден`
//   }
// }
// for ( const login of logins) {
//     console.log(login)

//     if (login === loginToFind) {
//       message = `Пользователь ${loginToFind} найден`
//       break
//     } else {
//       message = `Пользователь ${loginToFind} не найден`
//     }
// }


// const message = logins.includes(loginToFind)
// ? `Пользователь ${loginToFind} найден`
// : `Пользователь ${loginToFind} не найден`
// console.log(message)

// найти самое маленькое число
// const numbers = [51, 18, 13, 24, 7, 85, 19 ]
// let smallestNumber = numbers[0]

// for (const number of numbers) {
//   console.log(number)

//   if (number < smallestNumber) {
//     // переписываем значение
//       smallestNumber = number
//   }
// }

// console.log('smallestNumber', smallestNumber)

// первое решение
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax']
// let string = ''

// for (const friend of friends) {
//   string += friend + ','
// }

// string = string.slice(0, string.length -1)

// console.log(string)

// второе решение
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax']
// let string = ''

// console.log(friends.join(','))

const string = 'JavaScript'
const letters = string.split('')
let invertedString = ''

for (const letter of letters) {
// console.log(letter)

// if (letter === letter.toLowerCase()) {
//   // если буква находится в маленьком регистре то тогда переписать ее в большой регистр
// invertedString += letter.toUpperCase()
// } else {
//   // если буква находится в большом регистре то ее переписать в маленький регистр
//   invertedString += letter.toLowerCase()
// }
// }

invertedString +=
letter === letter.toLowerCase()
? letter.toUpperCase()
: letter.toLowerCase()
}

console.log(invertedString)

const title = 'Top 10 React'


console.log(title.toLowerCase())
