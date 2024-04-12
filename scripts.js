onload = function() {
    const ratDots = document.getElementsByClassName("inter-rat__dot");
    const ratTy = document.getElementsByClassName("inter-rat__thanks");
    const ratSub = document.getElementsByClassName("inter-rat__submit");
    const ratSelected = document.getElementById("inter-rat__selected");
    let d;
    
    function remDots() {
        for (let i = 0; i < ratDots.length; i++) {
            ratDots[i].classList.remove("dot-select");
        }
    }


    for (d = 0; d < ratDots.length; d++) {
        ratDots[d].addEventListener("click", function() {
            remDots();
            if (this.classList.contains("dot-select")) {
                this.classList.remove("dot-select");
            } else {
                this.classList.add("dot-select");
            }
            ratSelected.innerText = this.innerText;
        })
    }

    ratSub[0].addEventListener("click", function() {
        if (ratSelected.innerText > 0) {
            ratTy[0].style.display = "flex";
        }
    })

























}