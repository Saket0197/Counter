const inc = document.querySelector('.increase');
const dec = document.querySelector('.decrease');
const val = document.querySelector('[data-value]');

let value = 0;
let incBtnPressed = false;
let decBtnPressed = false;

inc.addEventListener('mousedown',() => {
    ++value;
    val.textContent = value;
    incBtnPressed = true;

    setTimeout(() => {

        if(incBtnPressed) {
            let eid = setInterval(() => {
                if(incBtnPressed){
                    ++value;
                    val.textContent = value;
                }
                else{
                    clearInterval(eid);
                }
            },50);
        }

    },500);
});

dec.addEventListener('mousedown',() => {
    --value;
    val.textContent = value;
    decBtnPressed = true;

    setTimeout(() => {

        if(decBtnPressed) {
            let eid = setInterval(() => {
                if(decBtnPressed){
                    --value;
                    val.textContent = value;
                }
                else{
                    clearInterval(eid);
                }
            },50);
        }

    },500);
});

inc.addEventListener('mouseup',() => {
    incBtnPressed = false;
});

dec.addEventListener('mouseup',() => {
    decBtnPressed = false;
});

