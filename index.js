const makeEl = (element) => document.createElement(element)
const getEl = (element) => document.querySelector(element)
const getAllEls = (element) => document.querySelectorAll(element)

const calc = getEl("#calculator")
let pressed = []

const createCalc = () => {
    const calcParts = makeEl("div")
    calcParts.id = ("calcParts")
    const result = makeEl("div")
    result.className = "result"
    calcParts.append(result)

    const createNumButtons = () => {
        for (i = 0; i < 10; i++) {
            const btn = makeEl("button")
            btn.innerText = i
            btn.value = i
            btn.className = "number"
            btn.addEventListener('click', () => addToPressed(btn))
            calcParts.append(btn)
        }
    }

    const createFunctionalButtons = (arr) => {
        for (const button of arr) {
            const btn = makeEl("button")
            btn.innerText = button
            btn.value = button
            btn.className = "functional"
            btn.addEventListener('click', () => addToPressed(btn))
            calcParts.append(btn)
        }
    }

    const createEqualsButton = () => {
        equals = makeEl("button")
        equals.innerText = "="
        equals.className = "equals"
        equals.addEventListener("click", calculate)
        calcParts.append(equals)
    }

    const createClearButton = () => {
        clear = makeEl("button")
        clear.innerText = "Clear"
        clear.className = "clear"
        clear.addEventListener("click", () => {
            result.innerText = ''
            pressed = []
            }
        )
        calcParts.append(clear)
    }
    
    const addToPressed = (btn) => {
        pressed.push(btn.value)
        return result.innerText = pressed.join("")
    }

    const calculate = () => {
        answer = eval(pressed.join(""))
        result.innerText = answer
        pressed = []
    }

    createNumButtons()
    createFunctionalButtons(['+', '-', '*', '/'])
    createEqualsButton()
    createClearButton()
    calc.append(calcParts)
}

window.addEventListener('DOMContentLoaded', () => {
    createCalc()
});

// need to set result innerText to the keys pressed, then to the result of the sum