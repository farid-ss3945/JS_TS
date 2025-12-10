function applystyles(styles, text) {
    var stylestr = styles.map(function (s) { return "".concat(s.name, ":").concat(s.value); }).join("; ");
    document.writeln("<p style=\"".concat(stylestr, "\">").concat(text, "</p>"));
}
applystyles([
    { name: "color", value: "brown" },
    { name: "font-size", value: "10px" },
    { name: "background", value: "yellow" }
], "Hello world");
function subs(text) {
    var temp = "";
    for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
        var i = text_1[_i];
        if (i >= "A" && i <= "Z") {
            temp += i.toLowerCase();
        }
        else if (i >= "a" && i <= "z") {
            temp += i.toUpperCase();
        }
        else {
            temp += "_";
        }
    }
    return temp;
}
var test = "Ab0";
alert(subs(test));
function cc(style) {
    var result = "";
    for (var i = 0; i < style.length; i++) {
        if (style[i - 1] === "-") {
            result += style[i].toUpperCase();
        }
        else if (i === 1) {
            result += style[i].toLowerCase();
        }
        else if (style[i] !== "-") {
            result += style[i];
        }
    }
    return result;
}
alert(cc("font-size"));
alert(cc("border-top-left"));
function abbreviate(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        if (i === 0) {
            result += text[i].toUpperCase();
        }
        else if (text[i - 1] === " " || text[i - 1] === "-") {
            result += text[i].toUpperCase();
        }
    }
    return result;
}
alert(abbreviate("cascading style sheets"));
alert(abbreviate("объектно-ориентированное программирование"));
function url(url) {
    var parsed = new URL(url);
    return [parsed.protocol.replace(':', ''),
        parsed.host,
        parsed.pathname];
}
alert(url("https://itstep.org/ua/about"));
function prints(temp) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var result = "";
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] === "%") {
            var index = Number(temp[i + 1]);
            result += args[index - 1];
            i++;
        }
        else {
            result += temp[i];
        }
    }
    return result;
}
alert(prints("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020));
