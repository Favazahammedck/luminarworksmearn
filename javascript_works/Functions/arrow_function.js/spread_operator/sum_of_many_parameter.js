//spread operator
let add=(...args)=>args.reduce((n1,n2)=>n1+n2)
console.log(add(10,32,50));