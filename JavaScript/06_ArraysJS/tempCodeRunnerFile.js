frutas = ['Maçã', 'Banana', 'Morango', 'Pêssego'];

console.log("\nMétodos no Array: splice - Substituindo Elementos");
console.log("Array de frutas antigo:");
console.log(frutas); 

console.log("Frutas substituidas > Substitui 2 elementos a partir do índice 1:");
let frutasSubstituidas = frutas.splice(1, 2, 'Laranja', 'Uva');
console.log(frutasSubstituidas); 

console.log("Array de frutas novo:");
console.log(frutas); 