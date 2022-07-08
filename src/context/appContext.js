import React, { useReducer, useContext } from "react";
import reducer from "./reducer";
import { DISPLAY_ALERT, CLEAR_ALERT } from "./actions";
const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const display_alert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clear_alert();
  };
  const clear_alert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };
  return (
    <AppContext.Provider value={{ ...state, display_alert, clear_alert }}>
      {children}
    </AppContext.Provider>
  );
};
//custom hook in order to avoid importing AppContext and useContext in every child Components
// but with custom hooks i only need to import this custom hook, then all states are available to that
// specific component
const useAppContext = () => {
  return useContext(AppContext);
};
export { AppProvider, initialState, useAppContext };
