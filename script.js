const parseCode = (str) => {
  // your code here
let arr = [firstName, lastName, id] ;
 arr = encodedString.split("000");
	let ans =  {
    firstName: firstName,
    lastName: lastName,
    id: id
  };
	return ans ;
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
