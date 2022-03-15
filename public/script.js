const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const d = new Date();
let month = months[d.getMonth()];

const future = d.getFullYear() + 1286

var current = d.getDate() + ' ' + month + ' ' + future

var hid =  document.getElementById("date-joined")

var textInput = document.querySelector("#nickname")

var button = document.querySelector(".button3")

var names = document.querySelectorAll("#catNick")

var duties = ['Catizen', 'Purrliceman', 'Purrfessor in Catford', 'Fake Opposition Member', 'Claws of Justice Unit', 'Catlomat Delegate', 'Catnip Supply Minister', 'Sunbathing Spots Minister', 'Teacher at Kittygarten']

var selected = document.querySelector("select")

var banned = ['Dovahdein', 'SirCoffee17', 'Ceska_Z']

//setInterval(valid, 1000)

function valid() {
	if (duties.indexOf(selected.value) > -1) return
	else {
		button.remove()
		alert("No.")
		document.location.reload()
	}
}

function time() {
 hid.value = current
	if (hid.value != current) {
		textInput.value = null
                alert("Time travel isn't allowed.")
                document.location.reload()
	}
}
//time()

button.addEventListener("click", () => {
	time()
	valid()
    for (let i = 0; i < names.length; i++) {
        var name = names[i].innerText
        if (textInput.value == name) {
                    textInput.value = null
                    alert("You're already registered")
        } else if (banned.indexOf(textInput.value) > -1) {
		textInput.value = null
		alert("Get outta here!")
	} 
	return
    }
})
