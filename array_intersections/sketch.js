/*
Full explanation: 
	https://medium.com/@alvaro.saburido/set-theory-for-arrays-in-es6-eb2f20a61848

Full array methods:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/
function setup() {
  //Code here
  let arrA=[1,3,4,5];
  let arrB=[1,2,5,6,7];
  createP("arrA: ["+arrA+"]");
  createP("arrB: ["+arrB+"]");

  //Intersection
  let intersection = arrA.filter(x => arrB.includes(x));
  createP("intersection: "+ intersection);

  //Difference
  let leftDifference = arrA.filter(x => !arrB.includes(x));
  createP("leftDifference: "+ leftDifference);

  //Symmetrical Difference
  let simetricalDifference = arrA
		.filter(x => !arrB.includes(x))
		.concat(arrB.filter(x => !arrA.includes(x)));
	createP("simetricalDifference: "+ simetricalDifference);

	//Union
	let union = [...arrA, ...arrB];
	createP("union: "+ union);
}