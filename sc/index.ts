const slider = document.getElementById('slider') as HTMLInputElement;

slider.addEventListener('input', () => {
    document.documentElement.style.fontSize = slider.value + 'px';
});


const dis=document.getElementById('display') as HTMLElement;
let test="";
function press(a: any){
    test+=a;
    dis.textContent=test;
}
function calculate(){
    dis.textContent=eval(dis.textContent);
}
function Clear(){
    test="";
    dis.textContent='0';

}
