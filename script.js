window.onload = () => {

    let correct = document.getElementById("correct");
    let mainContent = document.getElementById("mainContainer");


    document.getElementById("math").addEventListener("input", (event) => {
        let input = event.target.value;
        checkAns(correct, mainContent, input);
    });
}


const checkAns = (correct, mainContent, input) => {
    if(md5(input) == "ed5ab8bab40ea8ce213b425a45a68648" || md5(input) == "0037ef71579ba2e32f067efa938f4c2c" || md5(input) == "306a6fd27d8eee5dcb6c1cde1b45ccf6" || md5(input) == "5de5d09bff637e70cb480dfed03753b9" || md5(input) == "f3f58ee455ae41da2ad5de06bf55e8de" || md5(input) == "234782fd089cf4486e960fa0c570f590" || md5(input) == "5b11962dcbe85de55770d22d3e5fb85a" || md5(input) == "817857b0693710898411438234078b55" || md5(input) == "2d351990d450cc028c016c2943b07013" || md5(input) == "b631d0cfde68df7d5a68d8a4b60f45e2"){
        mainContent.style.visibility = "hidden";
        correct.innerHTML = "Yes you guessed it right!";
        const fiveSeconds = setTimeout(() => {
            mainContent.style.height = 0;
            correct.innerHTML = "Guessing the prize might not have been easy, but found if you have, the location is one that could make you queasy, Now travel to the point where keepers of the gold keep the wealth, Where no magic works to steal- even stealth.";
        }, 1000);
    }
}   
