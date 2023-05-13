const initialState = {
  user: "void",
  show: false,
  alertLog: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GETUSERLOG":
      return {
        ...state,
        user: action.payload,
      };

    case "UPDATE_USER":
      return { ...state, user: action.payload };

    case "SETSHOW":
      return { ...state, show: action.payload };

    case "SETALERT":
      return { ...state, alertLog: action.payload };

    case "RESET":
      return { ...state, user: action.payload };

    default:
      return { ...state };
  }
}
