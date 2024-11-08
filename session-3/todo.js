const TODO = [];

// const addTodo = (arr, item, priority) => {
//   let toDoDb = [...arr];
//   if (priority === "high") {
//     toDoDb.unshift(item);
//   } else {
//     toDoDb.push(item);
//   }
// };

const addTodo = (arr, item, priority) => {
  if (priority === "high") {
    return [item, ...arr];
  } else {
    return [...arr, item];
  }
};

const clearTodo = (arr, index) => {
  const tempArr = [...arr];
  tempArr[index] = null;
  return tempArr;
};

const updateTodo = (arr, index, newItem) => {
  const tempArr = [...arr];
  tempArr[index] = newItem;
  return tempArr;
};

const getTodo = (arr, index) => {
  if (index) {
    return arr[index];
  }
  return arr;
};
