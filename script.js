
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;



function increment() {
    count += 1;
    countEl.innerHTML = count;
    console.log(countEl);
}
function save() {
    let countStr = count + " - ";
    saveEl.innerHTML += countStr;
    countEl.textContent = 0;
    count = 0;
}
