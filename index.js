const arrayWithValues = [
  { id: "a", value: "abc" },
  { id: "b", value: "bcd" },
  { id: "c", value: "cde" },
  { id: "d", value: "def" }
];

const array = ["a", "b", "c", "d", "e"];

for (var i = 0; i < array.length; i++) {
  let index = arrayWithValues.findIndex(j => j.id == array[i]);
  if (index != -1) {
    console.log(`Value is: ${arrayWithValues[index].value}`);
  } else {
    console.log(`Value not found`);
  }
}
