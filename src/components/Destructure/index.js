const user1 = {
  username: "josuearag",
  country: "Mexico",
  social: {
    fb: "httpp:",
    tw: "twitter.com/josuearreola"
  }
};

const saluda = (user) => {
  const {
    // Saco el nombre, le pongo el nombre de la variable como name con defaultValue = "Josh"
    nombre: name = "Josh",
    country,
    // De social voy a sacar el tw como twitter
    social: { tw: twitter }
  } = user;

  console.log(
    `Hola soy ${name} y vivo en  ${country} mi twitter es ${twitter}`
  );

  const menu = ["pizza", "hamburguesa", "tacos", "tortas", "tlayudas"];

  // We get the rest of the elements inside a var called mexican
  const [pizza, burger, ...mexicanFood] = menu;
  console.log("Using rest operator to save the rest of menu", mexicanFood);
};

saluda(user1);
