let numero1 = 0;
let numero2 = 0;
let result = 0;

let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let resultado = document.getElementById("resultado");

let btnsumar = document.getElementById("btnSumar");

btnsumar.addEventListener("click",function(){
    numero1 = document.getElementById("numero1").value;
    console.log(numero1);

    numero2 = document.getElementById("numero2").value;
    console.log(numero2);

    if (numero1 === "") {
        //error1.innerHTML = "Debe digitar el primer número";
        //error1.style.color = "red";
        Swal.fire({
            title: "ATENCIÓN",
            text: "Ingresar el primer número",
            icon: "warning"
          });
        return;
    }

    if (numero2 === "") {
        error2.innerHTML = "Debe agregar el segundo número";
        error2.style.color = "green";
        return;
    }

    result = parseInt(numero1) + parseInt(numero2);
    resultado.innerHTML = result;
    resultado.style.color = "blue";
    resultado.style.fontSize = "2rem";

});
