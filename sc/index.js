var slider = document.getElementById('slider');
slider.addEventListener('input', function () {
    document.documentElement.style.fontSize = slider.value + 'px';
});
var dis = document.getElementById('display');
var test = "";
function press(a) {
    test += a;
    dis.textContent = test;
}
function calculate() {
    dis.textContent = eval(dis.textContent);
}
function Clear() {
    test = "";
    dis.textContent = '0';
}
