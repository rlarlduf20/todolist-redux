import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";

const initialState = [];
let inititalId = 1;

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { text: action.payload, id: inititalId++, isChecked: false },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isChecked: !todo.isChecked }
          : { ...todo }
      );
    default:
      return state;
  }
};

export default todoReducer;
