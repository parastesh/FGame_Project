let cells = document.querySelectorAll("li")
let clickMatch = []
let totalClicks = 0;
let matches = 0;
let unmatches = 0;

//Event
for (let i = 0; i < cells.length; i++) {
    cells[i].onclick = game
}

function updateStats() {
    document.getElementById("total-clicks").innerText = totalClicks;
    document.getElementById("matches").innerText = matches;
    document.getElementById("unmatches").innerText = unmatches;
}

//Function

function game() {
    this.classList.add("show")
    clickMatch.push(this)
    totalClicks++;
    
    if (clickMatch.length == 2) {
        if (clickMatch[0].innerHTML === clickMatch[1].innerHTML) {
            clickMatch[0].style.backgroundColor = "green";
            clickMatch[1].style.backgroundColor = "green";
            matches++;
        } else {
            clickMatch[0].style.backgroundColor = "red";
            clickMatch[1].style.backgroundColor = "red";
            unmatches++;
            setTimeout(() => {
                clickMatch[0].classList.remove("show");
                clickMatch[1].classList.remove("show");
                clickMatch[0].style.backgroundColor = "#112";
                clickMatch[1].style.backgroundColor = "#112";
            }, 1000);
        }
        clickMatch = [];
    }
    updateStats();
}
