import './css/app.css'
let greet = (name) => {
  console.log(`Hello ${name}`);
}


greet('Salman');
let square = [1, 2, 3, 4, 5]

let value = square.map(num => num * num);
let v1 = document.createElement("span");
v1.textContent = JSON.stringify(value);
v1.classList.add("hello");
console.log(v1)
document.getElementById("root").appendChild(v1);