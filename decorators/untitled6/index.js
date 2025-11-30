if (!Function.prototype.myBind) {
    Function.prototype.myBind = function (context, ...args) {
        const fn = this
        return function (...newArgs) {
            if (this instanceof fn) {
                return new fn(...args, ...newArgs)
            }
            return fn.apply(context, [...args, ...newArgs])
        }
    }
}

function greet(greeting, name) {
    console.log(`${greeting}, ${name}! I'm — ${this.role}`)
}

const person = { role: "dev" }
const boundGreet = greet.myBind(person, "hi")
boundGreet("bro")
