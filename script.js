let shuffledEls = document.querySelectorAll(".shuffle");
let duration = 50;
let framesMax = 7;

shuffledEls.forEach((shuffledEl) => {
    let textOrig = shuffledEl.textContent;
    let inter;

    // Function to perform the shuffle animation
    function shuffleText(element) {
        let text = element.textContent;
        let charArr = text.split("");
        let frame = 0;

        inter = setInterval(() => {
            if (frame < framesMax) {
                let charArrShuff = shuffleArr(charArr);
                element.textContent = charArrShuff.join("");
                frame++;
            } else {
                clearInterval(inter);
                element.textContent = textOrig;
            }
        }, duration);
    }

    // Apply shuffle on hover
    shuffledEl.addEventListener("mouseover", (e) => {
        shuffleText(e.currentTarget);
    });

    // Reset text on mouse leave
    shuffledEl.addEventListener("mouseleave", (e) => {
        e.currentTarget.textContent = textOrig;
        clearInterval(inter);
    });

    // Trigger shuffle on page load
    document.addEventListener("DOMContentLoaded", () => {
        shuffleText(shuffledEl);
    });
});

// Shuffle array utility function
function shuffleArr(arr) {
    return arr.reduce(
        ([a, b]) => (
            b.push(...a.splice((Math.random() * a.length) | 0, 1)), [a, b]
        ),
        [[...arr], []]
    )[1];
}