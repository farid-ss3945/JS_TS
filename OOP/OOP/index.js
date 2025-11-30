// task 1

/*class CssObject {
    constructor(selector) {
        this.selector = selector;
        this.styles = {};
    }

    setStyle(propertyName, value) {
        this.styles[propertyName] = value;
    }

    removeStyle(propertyName) {
        if (propertyName in this.styles) {
            delete this.styles[propertyName];
        }
    }

    getCss() {
        const cssLines = Object.entries(this.styles)
            .map(([prop, val]) => `    ${prop}: ${val};`)
            .join("\n");
        return `${this.selector} {\n${cssLines}\n}`;
    }
}

const css = new CssObject(".button");
css.setStyle("color", "black");
css.setStyle("background-color", "white");
css.setStyle("padding", "10px");

console.log(css.getCss());*/

// task 2

/*class HtmlObject {
    constructor(tagName, selfClosing = false, textContent = "") {
        this.tagName = tagName;
        this.selfClosing = selfClosing;
        this.textContent = textContent;
        this.attributes = {};
        this.styles = {};
        this.children = [];
    }

    setAttribute(name, value) {
        this.attributes[name] = value;
    }

    setStyle(property, value) {
        this.styles[property] = value;
    }

    appendChild(child) {
        this.children.push(child);
    }

    prependChild(child) {
        this.children.unshift(child);
    }

    getHtml() {
        const attrs = Object.entries(this.attributes)
            .map(([key, val]) => `${key}="${val}"`)
            .join(" ");
        const styleStr = Object.entries(this.styles)
            .map(([key, val]) => `${key}: ${val};`)
            .join(" ");
        const attrString =
            (attrs ? " " + attrs : "") +
            (styleStr ? ` style="${styleStr}"` : "");
        if (this.selfClosing) {
            return `<${this.tagName}${attrString} />`;
        } else {
            const childrenHtml = this.children.map(child => child.getHtml()).join("");
            return `<${this.tagName}${attrString}>${this.textContent}${childrenHtml}</${this.tagName}>`;
        }
    }
}

const div = new HtmlObject("div");
div.setAttribute("id", "container");
div.setStyle("background-color", "lightblue");
div.setStyle("padding", "10px");

console.log(div.getHtml());*/

// task 3

/*class ExtendedDate extends Date {
    toReadableString() {
        const months = [
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
        ];
        return `${this.getDate()} ${months[this.getMonth()]}`;
    }

    IsFuture() {
        const now = new Date();
        return this.getTime() >= now.getTime();
    }

    IsLeapYear() {
        const year = this.getFullYear();
        if (year % 4 === 0 && year % 100 !== 0) return true;
        if (year % 400 === 0) return false;
    }
}

const d1 = new ExtendedDate(2026, 0, 15);
console.log(d1.IsFuture());*/

