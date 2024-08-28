// it is working on a chrome a

let a = prompt("Hay Whats your age?")
a = Number.parseInt(a)
if(a<0){
    alert("This is invalid age")
}
else if(a<9){
    alert("You are kid")
}
else if(a<18 && a>=9){
    alert("You are Tinage")
}
else{
    alert("This is valid")
}

console.log(typeof(a))

a = alert("hay")

