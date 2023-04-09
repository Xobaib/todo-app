import { Add_Title_Todo, Remove_Todo } from "../action";

const initialState = {
  list: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Title_Todo:
      const {
        titleData: titleData,
        categoryData: categoryData,
        id: id,
      } = action.payload;
      return {
        ...state,
        list: [...state.list, { titleData, categoryData, id }],
      };

    case Remove_Todo:
      const newList = state.list.filter((newItem) => newItem.id !== action.id);
      return {
        ...state,
        list: newList,
      };
    default:
      return state;
  }
};
