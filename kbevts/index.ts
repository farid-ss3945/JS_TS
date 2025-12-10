const myb = document.getElementById("myb") as HTMLButtonElement;

myb.addEventListener("mouseover", () => {
    myb.style.backgroundColor = "red";
});

myb.addEventListener("mouseout", () => {
    myb.style.backgroundColor = "green";
});
const mytable = document.getElementById("mytable") as HTMLTableElement;
mytable.addEventListener("mouseover", () => {
    mytable.style.color = "red";
})
mytable.addEventListener("mouseout", () => {
    mytable.style.color = "black";
})

const link = document.getElementById("mylink") as HTMLAnchorElement;

link.addEventListener("mouseover", () => {
    const tooltip = document.createElement("div");
    tooltip.id = "tooltip";
    tooltip.textContent = link.href;
})
link.addEventListener("mouseout", () => {
    const tooltip = document.getElementById("tooltip");
})

const menu = document.getElementById('myMenu') as HTMLMenuElement;


document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    menu.style.top = e.pageY + 'px';
    menu.style.left = e.pageX + 'px';
    menu.style.display = 'block';
});


document.addEventListener('click', (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    if (!menu.contains(target)) {
        menu.style.display = 'none';
    }
});


const items = menu.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', () => {
        menu.style.display = 'none';
    });
});

document.addEventListener("keydown", e => {
    const el = document.querySelector(`.key[data-key="${e.key.toUpperCase()}"]`);
    if (el) el.classList.add("active");
});

document.addEventListener("keyup", e => {
    const el = document.querySelector(`.key[data-key="${e.key.toUpperCase()}"]`);
    if (el) el.classList.remove("active");
});
