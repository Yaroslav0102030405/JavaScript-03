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