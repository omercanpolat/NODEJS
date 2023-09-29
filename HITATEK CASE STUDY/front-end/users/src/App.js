import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import userReducer from "./components/reducers";
import UserForm from "./components/UserForm";
// import UserSearch from "./components/UserSearch";
import UserList from "./components/UserList";
import { ToastContainer } from "react-toastify";
// import AppRouter from "./router/AppRouter";
// import store from "./app/store";

const store = createStore(userReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <AppRouter/> */}
        <UserForm />
        {/* <UserSearch/> */}
        <UserList/>
        <ToastContainer/>
        {/* Diğer bileşenleri buraya ekleyebilirsiniz */}
      </div>
    </Provider>
  );
};

export default App;
