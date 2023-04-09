export const Add_Title_Todo = "Add_Title_Todo";
export const Remove_Todo = "Remove_Todo";

export const addTodo = (titleData, categoryData) => {
  return {
    type: Add_Title_Todo,
    payload: {
      titleData: titleData,
      categoryData: categoryData,
      id: new Date().getTime().toString(),
    },
  };
};

export const removeTodo = (id) => {
  return {
    type: Remove_Todo,
    id,
  };
};
