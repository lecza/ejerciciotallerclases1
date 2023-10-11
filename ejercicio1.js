// El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30

let peso = parseFloat(prompt("ingrese su peso")); 
let altura = parseFloat(prompt("ingrese su altura"));
let BMI = peso/(altura*altura);
console.log(BMI);
if (BMI<18.5) {
    console.log("bajo de peso");
} else if (BMI>18.5 && BMI<24.9){
    console.log("normal");
} else if (BMI>25 && BMI<29.9){
    console.log("sobrepeso");
} else if (BMI>=30){
    console.log("obeso");
}

    

