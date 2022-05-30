window.onload = () => {
  /* -- Campo nome: Inicio -- */

  let nome = document.getElementById("nome");
  nome.onchange = () => {
    console.log("nome =", nome.value);
  };

  /* -- Campo nome: Fim -- */

  /* -- Campo salada: Inicio -- */

  let salada = document.getElementById("salada");
  salada.onchange = () => {
    console.log("salada =", salada.value);
  };

  /* -- Campo salada: Fim -- */

  /* -- Campo molho: Inicio -- */

  let molho1 = document.getElementById("molho1");
  let molho2 = document.getElementById("molho2");
  let molho3 = document.getElementById("molho3");

  // Exibe mensagem mostrando qual molho foi escolhido
  let escolheMolho = function () {
    console.log("molho1 =", molho1.checked);
    console.log("molho2 =", molho2.checked);
    console.log("molho3 =", molho3.checked);
  };

  // Invocando a função anônima escolheMolho quando houver alguma mudança no valor de molho1, molho2 ou molho3.
  molho1.onchange = escolheMolho;
  molho2.onchange = escolheMolho;
  molho3.onchange = escolheMolho;

  /* -- Campo molho: Fim -- */

  /* -- Campo complementos: Inicio -- */

  let pao = document.getElementById("pao");
  pao.onchange = () => {
    console.log("pao =", pao.checked);
  };

  let sobremesa = document.getElementById("sobremesa");
  sobremesa.onchange = () => {
    console.log("sobremesa =", sobremesa.checked);
  };

  /* -- Campo complementos: Fim -- */
};
