function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  const objectsArr = numberArray.map((element) => {
    return { val: element };
  });
  console.log(numberArray);
  console.log(objectsArr);

  return objectsArr;
}

arr = [1, 2, 3];


console.log(transformToObjects(arr))
