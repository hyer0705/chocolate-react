export const ACTIONS = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
};

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.CREATE:
      return [action.data, ...state];
    case ACTIONS.UPDATE:
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo
      );
    case ACTIONS.DELETE:
      return state.filter(({ id }) => id !== action.targetId);
    default:
      return state;
  }
}
