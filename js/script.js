const headerRec = document.getElementById("headerRec");
const recContainer = document.getElementById("recContainer");
let clickCounter = true;
let promptArr;
let remainingCounter = 0;
let shuffleArr = [];
let clicks = 0;
let rec1;
let rec2;

headerRec.addEventListener("click", () => {
    let promptName = null;
    if (clickCounter) {
        let index;
        while (promptName == null) { promptName = prompt("Please enter your name: "); }
        clickCounter = false;
        promptArr = promptName.toUpperCase().split('');
        promptArr = promptArr.filter((char, i) => { return promptArr.indexOf(char) == i; }); // find duplicates and remove them
        remainingCounter = promptArr.length;
        // create elements
        const len = promptArr.length * 2
        for (let i = 0; i < len; i++) {
            let rec = document.createElement("section");
            recSize = 20 * (i + 1);
            rec.classList.add("rectangle");
            recContainer.append(rec);
            recContainer.querySelectorAll(".rectangle")[i].style.width = `${recSize}px`
            recContainer.querySelectorAll(".rectangle")[i].style.height = `${recSize}px`
            //
            recContainer.querySelectorAll(".rectangle")[i].style.fontSize = `${recSize / 2}px`;
        };
        // shuffle array
        promptArr.sort(() => Math.random() - 0.6);
        promptArr.map((item, i) => { shuffleArr[i] = item; index = i; });
        promptArr.sort(() => Math.random() - 0.4);
        promptArr.map((item, i) => shuffleArr[index + 1 + i] = item);
        shuffleArr.forEach((item, i) => recContainer.querySelectorAll(".rectangle")[i].innerHTML = `${item}`);


        document.querySelectorAll('.rectangle').forEach(item => item.addEventListener('click', (e) => handleClick(e)));
    } else {
        const choice = confirm('game already in porgress, reset?');
        if (choice) {
            clickCounter = true;
            recContainer.innerHTML = '';
            headerRec.click();
        }
    }
});

function handleClick(e) {
    if (clicks == 0) {
        rec2 = undefined;
        rec1 = e;
        clicks += 1
        // rec1.target.classList.add('selected');
        rec1.target.style.backgroundColor = '#FA9884';
        rec1.target.style.color = '#fff';
    }
    else {
        // if(rec1==e) alert('!!!');
        rec2 = e;
        clicks = 0;
        rec2.target.style.backgroundColor = '#FA9884';
        rec2.target.style.color = '#fff';
        checkPair(e);
    }
}

function checkPair(e) {
    if (rec1.target.innerHTML == rec2.target.innerHTML) {
        console.log(rec1.target.innerHTML);
        console.log(rec2.target.innerHTML);
        rec1.target.style.backgroundColor = `#0E4732`;
        rec1.target.style.color = `#ffddaa`;
        rec2.target.style.backgroundColor = `#0E4732`;
        rec2.target.style.color = `#ffddaa`;
        rec1 = undefined;
        rec2 = undefined;
    }
    else {
        const countdown = () => {
            setTimeout(() => {
                rec1.target.style.backgroundColor = '#000';
                rec1.target.style.color = '#000';
                rec2.target.style.backgroundColor = '#000';
                rec2.target.style.color = '#000';
            }, 1000);
        }
        countdown();
        clearTimeout(countdown());
    }
}