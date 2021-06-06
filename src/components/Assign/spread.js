/***
 * Ep. 28 - Entendiendo el operador Spred
 */

const perfil = {
  nombre: "Gerardo"
};

const region = {
  pais: "México",
  info: {
    id: 214,
    direction: "Pablo garrza"
  }
};

const social = {
  twitter: "@luxfenix",
  info: {
    nombre: "a"
  }
};

/**
 * Si encuenttra una propiedad repetida, repetirá el último valor
 * Si importa el orde
 * No itera en profundidad
 * Es decir sólo se mete al primer nivel
 * Es parte del estandarr ES6
 * Si das soporte a navegadores antiguos necesitamos un polyfill
 */

const resultado = {
  ...region,
  ...social,
  ...perfil,
  info: {
    ...social.info,
    ...region.info
  }
};

console.log("Spread operator ->", resultado);
