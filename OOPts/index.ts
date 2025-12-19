class CssObject {
    private selector: string;
    private styles: { [key: string]: string };

    constructor(selector: string) {
        this.selector = selector;
        this.styles = {};
    }

    setStyle(propertyName: string, value: string) {
        this.styles[propertyName] = value;
    }

    removeStyle(propertyName: string): void {
        if (propertyName in this.styles) {
            delete this.styles[propertyName];
        }
    }

    getCss(): string {
        let cssLines = "";
        for (const prop in this.styles) {
            if (this.styles.hasOwnProperty(prop)) {
                cssLines += `    ${prop}: ${this.styles[prop]};\n`;
            }
        }
        return `${this.selector} {\n${cssLines}}`;
    }

}

const css = new CssObject(".button");
css.setStyle("color", "black");
css.setStyle("background-color", "white");
css.setStyle("padding", "10px");

console.log(css.getCss());


class HtmlObject {
    private tagName: string;
    private selfClosing: boolean;
    private textContent: string;
    private attributes: { [key: string]: string };
    private styles: { [key: string]: string };
    private children: HtmlObject[];

    constructor(tagName: string, selfClosing: boolean = false, textContent: string = "") {
        this.tagName = tagName;
        this.selfClosing = selfClosing;
        this.textContent = textContent;
        this.attributes = {};
        this.styles = {};
        this.children = [];
    }

    setAttribute(name: string, value: string): void {
        this.attributes[name] = value;
    }

    setStyle(property: string, value: string): void {
        this.styles[property] = value;
    }

    appendChild(child: HtmlObject): void {
        this.children.push(child);
    }

    prependChild(child: HtmlObject): void {
        this.children.unshift(child);
    }

    getHtml(): string {
        let attrs = "";
        for (const key in this.attributes) {
            if (this.attributes.hasOwnProperty(key))
            {
                attrs += ` ${key}="${this.attributes[key]}"`;
            }
        }

        let styleStr = "";
        for (const key in this.styles) {
            if (this.styles.hasOwnProperty(key)) {
                styleStr += `${key}: ${this.styles[key]}; `;
            }
        }
        if (styleStr)
        {
            attrs += ` style="${styleStr.trim()}"`;
        }

        if (this.selfClosing)
        {
            return `<${this.tagName}${attrs} />`;
        }

        else
        {
            let childrenHtml = "";
            for (const child of this.children) {
                childrenHtml += child.getHtml();
            }
            return `<${this.tagName}${attrs}>${this.textContent}${childrenHtml}</${this.tagName}>`;
        }
    }
}

const div = new HtmlObject("div");
div.setAttribute("id", "container");
div.setStyle("background-color", "lightblue");
div.setStyle("padding", "10px");

console.log(div.getHtml());

