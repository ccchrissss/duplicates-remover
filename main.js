function last(arr) {

  let set1 = new Set()

  arr.reverse().forEach( e => set1.add(e) )

  return Array.from(set1).reverse()

}

let myArr = [3, 4, 4, 3, 6, 3]

console.log(last(myArr))


// keep only the rightmost occurences of each element!