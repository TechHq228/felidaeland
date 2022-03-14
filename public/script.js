const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];

const future = d.getFullYear() + 1286

var current = d.getDate() + ' ' + month + ' ' + future

var hid =  document.getElementById("date-joined")

var textInput = document.querySelector("#nickname")

var button = document.querySelector(".button3")

var names = document.querySelectorAll("#catNick")

function time() {
 hid.value = current
}
time()

button.addEventListener("click", () => {
    for (let i = 0; i < names.length; i++) {
        var name = names[i].innerText
        console.log(name)
        if (textInput.value == name) {
                    textInput.value = null
                    alert("You're already registered")
                }
    }
})
