function setup() {
  //Code here
  console.log("factorialResult 1: " + factorial(1));
  console.log("factorialResult 2: " + factorial(2));
  console.log("factorialResult 3: " + factorial(3));
  console.log("factorialResult 5: " + factorial(5));
  console.log("factorialResult 8: " + factorial(8));
  console.log("factorialResult 13: " + factorial(13));
}

function factorial(factor, acumulador) {
  // 5! = 5 x 4 x 3 x 2 x 1 = 120
  if (factor - 1 > 0) {
  	if (acumulador === undefined) {
  		acumulador = factor * (factor - 1);
  	} else {
  		acumulador = acumulador * (factor - 1);
  	}
  }
	factor--;

  if (factor >= 1) {
		return factorial(factor, acumulador);
	} else {
		res = acumulador;
		acumulador = 0;
	  return res;
	}
}