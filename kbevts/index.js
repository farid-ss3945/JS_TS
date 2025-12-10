var myb = document.getElementById("myb");
myb.addEventListener("mouseover", function () {
    myb.style.backgroundColor = "red";
});
myb.addEventListener("mouseout", function () {
    myb.style.backgroundColor = "green";
});
var mytable = document.getElementById("mytable");
mytable.addEventListener("mouseover", function () {
    mytable.style.color = "red";
});
mytable.addEventListener("mouseout", function () {
    mytable.style.color = "black";
});
var link = document.getElementById("mylink");
link.addEventListener("mouseover", function () {
    var tooltip = document.createElement("div");
    tooltip.id = "tooltip";
    tooltip.textContent = link.href;
});
link.addEventListener("mouseout", function () {
    var tooltip = document.getElementById("tooltip");
});
var menu = document.getElementById('myMenu');
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    menu.style.top = e.pageY + 'px';
    menu.style.left = e.pageX + 'px';
    menu.style.display = 'block';
});
document.addEventListener('click', function (e) {
    var target = e.target;
    if (!menu.contains(target)) {
        menu.style.display = 'none';
    }
});
var items = menu.querySelectorAll('li');
items.forEach(function (item) {
    item.addEventListener('click', function () {
        menu.style.display = 'none';
    });
});
document.addEventListener("keydown", function (e) {
    var el = document.querySelector(".key[data-key=\"".concat(e.key.toUpperCase(), "\"]"));
    if (el)
        el.classList.add("active");
});
document.addEventListener("keyup", function (e) {
    var el = document.querySelector(".key[data-key=\"".concat(e.key.toUpperCase(), "\"]"));
    if (el)
        el.classList.remove("active");
});
