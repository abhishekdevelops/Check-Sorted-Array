let array = [2, 4, 6, 9]; // Test array
let isSorted = true;

for (let i = 0; i < array.length - 1; i++) {
  if (array[i] > array[i + 1]) {
    isSorted = false;
    break;
  }
}

if (isSorted) {
  console.log("Array is sorted in ascending order");
} else {
  console.log("Array is NOT sorted");
}
