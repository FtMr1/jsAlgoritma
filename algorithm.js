//! Basamak sayısı bulma
//  let sayi = 123456789
//  let adet = 0

//  while(sayi != 0 ){
//     sayi= Math.floor(sayi/10)
//     adet++
//  }

//  console.log("basamak sayısı " , adet)

//! o binarysearch

// const sayilar = [
//   1, 2, 3, 4, 5, 6, 6, 7, 8, 89, 123, 321, 31, 24, 2, 54, 2, 312, 54, 65, 123,
//   34, 45,
// ];
// let x = 0;
// let arryLenght = sayilar.length - 1;

// const binarySearch = (number) => {
//   while (x <= arryLenght) {
//     const y = Math.floor(x + (arryLenght - x) / 2);
//     if (sayilar[y] === number) {
//       return y;
//     } if (sayilar[y] < number) {
//       x = y + 1;
//     } else {
//       arryLenght = y - 1;
//     }
//    }

//   return -1;
// };

// console.log(sayilar[binarySearch(123)])

//! Asal sayı bulma

// const sayi = 13

// for (let i = 2;   i < sayi; i++) {
//    if(sayi % i === 0){
//       console.log("sayı asal değil")

//    }else{
//       console.log("Asal sayı ")
//    }
//    break
// }

//! dizi içindeki sayıları  Sıralama

// const sort = (arr) => {
//   let lenght = arr.length;
//   for (let i = 0; i < lenght-1; i++) {
//     for (let y = 0; y < lenght-i-1; y++) {
//       if (arr[y] > arr[y + 1]) {
//         let temp = arr[y];
//         arr[y] = arr[y + 1];
//         arr[y + 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

// const numbers = [14, 152, 25, 12, 11, 10, 8, 25, 31, 68, 1145];

// console.log(sort(numbers));

//! Merge Sort Algoritma
// const merge = (left  , right)=>{
//   let result =[]
//   while(left.length > 0 && right.length>0){
//      result.push(left[0]< right[0] ? left.shift(): right.shift())
//   }
//   result   =result.concat(left).concat(right)
//   return result
// }

// const divide = (arr)=>{
//     if(arr.length <2 ) return arr
//     const mid = Math.floor(arr.length / 2)
//     const left = divide(arr.slice(0,mid))
//     const right = divide(arr.slice(mid))

//     return merge(left , right)
// }

// const arr = [25,42,32,56,32,42,5,12,32,43,54,65,42,11]

// console.log(divide(arr))

//! Çıkarma yaparak yeni dizi oluşturma

// const sayi = (arr)=>{
//     return arr.map((_, i)=>{
//             for (let j = i+1;  j < arr.length; j++) {
//                     if(arr[i] > arr[j]){
//                       arr[i]=  arr[i]  - arr[j]
//                       break
//                     }

//             }
//             return arr[i]
//     })
// }

// console.log(sayi([10,5,3,2,12,3]))

//!  eksili değerleri bulma

// const bul = (arr) => {

// // tek satır 

// return arr.map(num => num.filter(e=>e<0).length)



// 2. yol 
//   let eksiler = [];
//   for (let i = 0; i < arr.length; i++) {
   
//       if (arr[i] < 0) {
//         eksiler.push(arr[i]);
//       }
   
//   }
//   return eksiler;
// };

// console.log(bul([-2, -3, -4, -5, 1, 2, 3, 5, 22]));


//! Çift sayıları bulma 


// const cift = (arr)=>{

//  tek satır kod 


//     arr.map(say = say.filter(s=> s% 2 ==0))


//      let cift = []
//             for (let i = 0; i < arr.length; i++) {
//                      if(arr[i] % 2 ===0){
//                             cift.push(arr[i])
//                     }
                  
//           }
//             return cift
// }

// console.log(cift([22,12,225,226,332,12,33,51]))


//! n kadar dizi oluşturup toplamlarının sıfır olmasını sağlayalım


// const sifir =(arr)=>{
//     let yeni = []
//     if(arr % 2 ==1){
//         yeni.push(0)

//     }
    
//     for (let i = 1; i < arr / 2; i++) {
       
//             yeni.push(i)
//             yeni.unshift(-i)
//     }
//         return yeni
// }

// console.log(sifir(8))


//! yazılan sayının rakamları çarpıp çıkartma


// const islem =(num)=>{
//     let newNum = num.toString().split("").map(Number)
//     return newNum.reduce((a,b)=> a * b, 1) -  newNum.reduce((a,b)=> a + b, 1)

// }

// console.log(islem(1923))


//! tekrar eden değerleri diziden çıkartıp, toplama yapma 



// const yeni = (arr)=>{
//     let dizi=[...new Set(arr)]
//     return dizi.reduce((a,b)=> a+b , 0)
// }

// console.log(yeni([-2,-2,-3,-3,2,3,5,5,6,1,2]))

//!  ortanca değerini bulmak 


// const  findMedian=(arr1 ,arr2)=> {
//         const  yeni = arr1.concat(arr2).sort((a,b)=>a-b)
       
//        if(yeni.length % 2 !==0){
//         const  medyan =  yeni[Math.floor(yeni.length / 2)]
//             console.log(medyan)
//        }else if (yeni.length % 2 ===0 ){
//         const  medyan = (yeni[Math.floor(yeni.length / 2)] +  yeni[Math.ceil(yeni.length / 2)- 1] )  / 2 
//         console.log(medyan)
//        }
    
       
// }



// const arr1 = [1,2,4,7]
// const arr2 = [5,8,11]

//   console.log(findMedian(arr1 , arr2))



//! sıralı dizi içindeki kayıp sayıyı bulma


// const bul = (arr)=>{
//     const maxnum =  Math.max(...arr)
//      const  total   = Math.floor((maxnum *( maxnum + 1)) / 2 )
//      const arrTotal = arr.reduce((a,b)=> a+b)


//       const islem = total - arrTotal

//     return islem



// }


// console.log(bul([1,2,3,5,4,7]))



