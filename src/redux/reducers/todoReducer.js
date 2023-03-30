const initState = [];

function todoReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, action.payload];
    }
    case "UPDATE_TODO": {
      const todosClone = [...state];
      const selectedId = todosClone.findIndex(
        (todo) => todo.id === action.payload.id
      );
      todosClone[selectedId].isComplete = !todosClone[selectedId].isComplete;
      return [...todosClone];
    }
    default:
      return state;
  }
}

export default todoReducer;
