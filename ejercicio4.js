function binarioAEntero(arr) {
    let numero = 0;
    for (let i = 0; i < arr.length; i++) {
      const valor = arr[arr.length - 1 - i]; // Leemos los valores desde la derecha
      numero += valor * Math.pow(2, i);
    }
    return numero;
  }
  
  // Ejemplos de uso
  console.log(binarioAEntero([0, 0, 0, 1])); // Salida: 1
  console.log(binarioAEntero([0, 0, 1, 0])); // Salida: 2
  console.log(binarioAEntero([0, 1, 0, 1])); // Salida: 5
  console.log(binarioAEntero([1, 0, 0, 1])); // Salida: 9
  console.log(binarioAEntero([0, 0, 1, 0])); // Salida: 2
  console.log(binarioAEntero([0, 1, 1, 0])); // Salida: 6
  console.log(binarioAEntero([1, 1, 1, 1])); // Salida: 15
  console.log(binarioAEntero([1, 0, 1, 1])); // Salida: 11


//El problema consiste en tomar una matriz de unos (1) y ceros (0) y convertirla en un número entero equivalente en el sistema decimal. Cada posición en la matriz representa un dígito en la representación binaria de un número. El valor 1 en una posición indica que ese dígito está "prendido" en la representación binaria, mientras que el valor 0 indica que está "apagado".

//Por ejemplo, consideremos la matriz [0, 1, 0, 1]. En la representación binaria, esto se traduce en 0101. Ahora, para convertirlo a decimal, puedes pensar en sumar los valores de cada posición, teniendo en cuenta su posición y su valor:

//El último dígito (derecha) es 1, lo que representa 2^0 = 1.
//El siguiente dígito a la izquierda es 0, que no contribuye a la suma.
//El siguiente dígito es 1, que representa 2^1 = 2.
//El primer dígito (izquierda) es 0, que tampoco contribuye.
//Entonces, sumamos estos valores: 1 + 0 + 2 + 0 = 3. Por lo tanto, [0, 1, 0, 1] en binario es igual a 3 en decimal.






