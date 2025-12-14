const slides = document.querySelectorAll(".slide") as unknown as HTMLElement[];
let index = 0;
slides.forEach(slide => slide.style.display = "none");
slides[0].style.display = "block";
function showSlide(i: any) {
    slides.forEach(slide => slide.style.display = "none");
    slides[i].style.display = "block";
}

function next() {
    index+=1;
    if (index > 3) {
        index =0;
    }
    showSlide(index);
}

function prev() {
    index-=1;
    if (index < -1) {
        index=3;
    }
    showSlide(index);
}

function first() {
    index=0;
    showSlide(index);
}

function last() {
    index=3;
    showSlide(index);
}

let go=true;

async function auto(){
    while (go){
        next();
        await sleep(2000);
    }
}

function stop(){
    go=false;
}

function sleep(ms: any) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function toggle() {
    slides[index].firstElementChild?.requestFullscreen();
}
