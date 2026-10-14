let colours = ["lightblue", "lightgreen", "lightyellow"];
let i = 0;
function add() {
let input = document.getElementById("task");
let value = input.value.trim();
    if (value === "") {
        alert("Enter a mission");
        return;
    }
let li = document.createElement("li");
    li.textContent = value;
    li.onclick = function () {
        li.classList.toggle("done");
    };
let btn = document.createElement("button");
    btn.textContent = "Delete";

    btn.onclick = function (event) {
        event.stopPropagation();
        li.remove();
        count();
    };
    li.appendChild(btn);
    document.getElementById("list").appendChild(li);
    input.value = "";
    count();
}
function count() {
    document.getElementById("count").textContent =
        document.getElementById("list").children.length;
}
function colour() {
    document.body.style.backgroundColor = colours[i];
    i++;
    if (i === colours.length) {
        i = 0;
    }
}
