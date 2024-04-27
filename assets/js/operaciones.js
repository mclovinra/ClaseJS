
export const sumar = (num1 = 1, num2 =1) => {
    return parseInt(num1) + parseInt(num2);
}

export const restar = (num1 = 1, num2 =1) => {
    return parseInt(num1) - parseInt(num2);
}

export const getResultado = (html,result) => {
    html.innerHTML = result;
    html.style.color = "blue";
    html.style.fontSize = "2rem";
}