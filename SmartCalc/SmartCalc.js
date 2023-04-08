// =====================================================
// making search-bar activation function
// =====================================================


searchEngine.addEventListener('click', () => {
    srcBtn.classList.add('search-active');
})

srcBtn.addEventListener('click', () => {
    srcBtn.classList.remove('search-active');
})

calc.addEventListener('click', () => {
    srcBtn.classList.remove('search-active');
})

document.querySelectorAll('span').forEach((e) => {
    e.addEventListener('mouseover', () => {
        srcBtn.classList.remove('search-active');
    })
})

// =====================================================
// variable making to recognize alphabets
// =====================================================

let alphas = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// =====================================================
// function making calculator stytem-keypad contact
// =====================================================


// controlling input keys
let keys = document.querySelectorAll("span.keys");
keys.forEach((e) => {
    e.addEventListener('click', () => {

        let recogAlpha = calc.value.slice(0, 1);
        if (alphas.includes(recogAlpha)) {
            calc.value = "";
            calc.value += e.textContent;
        } else {
            calc.value += e.textContent;
        }
    })
})

// controlling for get answering
let ans = document.getElementById('ans');
ans.onclick = () => {
    if (calc.value === "") {
        calc.value = "enter some values...";
    } else {
        if (eval(calc.value) == undefined) {
            calc.value = "enter correct values...";
        } else {
            calc.value = eval(calc.value);
        }
    }
}

// controlling for getting All clear
let allClear = document.getElementById('del');
allClear.onclick = () => {
    calc.value = "";
}

// controlling for getting delete last one
let lastCut = document.getElementById('cut');
lastCut.onclick = () => {
    let remained = Array.from(calc.value);
    remained.pop();

    let inputLang = remained.join('')
    calc.value = inputLang;
}

// controlling for getting product
let product = document.getElementById('multi');
product.onclick = () => {
    calc.value += '*';
}
