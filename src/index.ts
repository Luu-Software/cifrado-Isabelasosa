import { preguntar } from './lib/consola.ts';
import { cifrar, descifrar } from './lib/funcionesCriptográficas.ts';

let palabra: string = preguntar("Ingresa la palabra"); // Preguntar por la palabra a cifrar o descifrar
let claveTexto: string = preguntar ("Clave del cifrado"); // Preguntar por la clave de cifrado (número)
let accion: string = preguntar ("Cifrar/Descifrar"); // Preguntar si se desea cifrar o descifrar (cifrar/descifrar)

let resultado: string = ''; // COMPLETAR
if(accion === "cifrar"){
    resultado = cifrar(palabra, Number(claveTexto));

}
else if (accion === "descifrar"){
    resultado = descifrar(palabra, Number(claveTexto));

}

console.log(resultado);
