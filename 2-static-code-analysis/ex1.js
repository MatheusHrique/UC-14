function teste() {
  let a = 10;
  b = 20;
  c = a + b;

  if (a == 10) {
    /* eslint-disable-next-line */
    console.log("O valor de a é 10");
  }

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  function interna() {
    return;
    {
      valor: 1;
    }
  }

  let resultado = interna() ? true : false;

  let obj = {
    a: 1, b: 2,
    c: 3
  };

  if (resultado)
    console.log("Resultado é verdadeiro");

  return c;
}

teste();
