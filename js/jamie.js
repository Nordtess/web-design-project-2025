//alert("det funkar")

//document.getElementById("random-js-test").innerHTML = "<p>hello but me a dog!</p>";

//document.getElementById("random-js-test").innerText = "Hello world!";










function correctCalculation(answer) {
    return parseInt(answer) === 2;
}



function showIlluminati(answer) {
    if (correctCalculation(answer))
        if (!document.getElementById("illuminati")) {
            alert("Unbelivable, you are a genius!");
            const img = document.createElement("img");
            img.id = "illuminati";
            img.src = "/images/jamie-page/illuminati.png"
            img.alt = "Illuminati";
            img.style.opacity = "0";
            img.style.transition = "opacity 10s";
            document.body.appendChild(img);
            setTimeout(() => { img.style.opacity = "1"; }, 10); // Fade in
        }
}


document.addEventListener("DOMContentLoaded", function () {
    const form = document.forms["calculator"];
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const answer = form["calculatorInput"].value;
        showIlluminati(answer);
    });
});