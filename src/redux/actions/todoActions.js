// Action creators

export const addTodo = (payload) => {
  return {
    type: "ADD_TODO",
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: "UPDATE_TODO",
    payload,
  };
};
