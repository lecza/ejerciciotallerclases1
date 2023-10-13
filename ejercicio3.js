// Obtener una lista con los nombres de los productos mas baratos, en el entendido que se considera barato un producto que no supera los 5 dólares.
// Calcular el costo promedio de todos productos de la lista cuyo precio y cantidad disponible es mayor a cero
// Calcular el costo total del inventario.

let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

// pregunta 1: Obtener una lista con los nombres de los productos mas baratos, en el entendido que se considera barato un producto que no supera los 5 dólares.
for(let i=0; i<products.length; i++){ 
    if (products[i].precio<=5 && products[i].precio>0 ){
        console.log(i, products[i].nombre);
    }
}
console.log("Productos baratos:", nombresProductosBaratos);

// Paso 2: Calcular el costo promedio de los productos con precio y cantidad mayores a cero

const productosValidos = products.filter(product => product.precio > 0 && product.cantidad > 0);
const totalCosto = productosValidos.reduce((total, product) => total + product.precio, 0);
const costoPromedio = totalCosto / productosValidos.length;
console.log("Costo promedio de productos válidos:", costoPromedio);

// Paso 3: Calcular el costo total del inventario

const costoTotalInventario = products.reduce((total, product) => total + (product.precio * product.cantidad), 0);

console.log("Costo total del inventario:", costoTotalInventario);

// Este código primero filtra los productos más baratos, luego calcula el costo promedio de los productos válidos y finalmente calcula el costo total del inventario. Los resultados se muestran en la consola.
