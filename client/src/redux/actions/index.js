import axios from "axios";

export function userSearch(data) {
  return async (dispatch) => {
    try {
      let response = await axios.post("/compare", data);

      dispatch({ type: "GETUSERLOG", payload: response.data });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUser(id, data) {
  return async (dispatch) => {
    const response = await axios.put(`/users/${id}`, data);
    dispatch({ type: "UPDATE_USER", payload: response.data });
  };
}

export function setShow(state) {
  return (dispatch) => {
    dispatch({ type: "SETSHOW", payload: state });
  };
}

export function setAlert(state) {
  return (dispatch) => {
    dispatch({ type: "SETALERT", payload: state });
  };
}

export function reset() {
  return (dispatch) => {
    dispatch({ type: "RESET", payload: "void" });
  };
}
