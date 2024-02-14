console.log("make by Vins 2106 - source code available on github (Vins2106)");

setInterval(() => {
	console.log("make by Vins 2106 - source code available on github (Vins2106)");
}, 10000)

let nt = document.getElementById("toggler");
let nb = document.getElementById("navs");
let ld = document.getElementById("loading-box")
let body = document.querySelector("body");
let isnt = false;

function toggleNavbar(e) {

	if (isnt) {
		e.classList.remove("fa-times");
		e.classList.add("fa-bars");
		nb.classList.remove("on")
		body.classList.remove("on")
		isnt = false;
	} else if (!isnt) {
		e.classList.add("fa-times");
		e.classList.remove("fa-bars");
		nb.classList.add("on")
		body.classList.add("on")
		isnt = true;
	}

}

window.onload = () => {
	setTimeout(() => {
		ld.classList.add("off");
		body.classList.remove("on")
	}, 1510);
}

// Function to show the commands image modal
function showCommandsImage() {
    var modal = document.getElementById("commandsModal");
    modal.style.display = "block";
}

// Function to close the commands image modal
function closeCommandsModal() {
    var modal = document.getElementById("commandsModal");
    modal.style.display = "none";
}

// Close the commands image modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById("commandsModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
