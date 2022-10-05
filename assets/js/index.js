  let maas=1000;
  let numberFirst = Number(prompt("Pulu daxil edin"));
  let operator = prompt("Islem");

  calculation(operator,numberFirst,maas);

// function sum( maas,numberFirst) {
//      return maas + numberFirst;
//   }
//   function sub( maas,numberFirst) {
//     return maas - numberFirst;
//   }
  function calculation(operator, maas, numberFirst) {
    switch (operator) {
      case "+":
        prompt("Toplama:", maas+numberFirst );
        break;
      case "-":
        prompt("Cixma:", maas-numberFirst);
        break;
      default:
        prompt("Duzgun operator teyin edilmeyib!");
        break;
    }
  }