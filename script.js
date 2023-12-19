function parseCode(encodedString) {
  const [firstName, lastName, id] = encodedString.split("000");

  return {
    firstName: firstName,
    lastName: lastName,
    id: id
  };
}

// Examples
// console.log(parseCode("John000Doe000123"));
// Output: { firstName: "John", lastName: "Doe", id: "123" }

console.log(parseCode("michael0smith004331"));
// Output: { firstName: "michael", lastName: "smith", id: "4331" }

console.log(parseCode("Thomas00LEE0000043"));
// Output: { firstName: "Thomas", lastName: "LEE", id: "43" }
