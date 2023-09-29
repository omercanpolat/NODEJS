import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UserForm from "../components/UserForm";
// import UserSearch from "../components/UserSearch";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/api/users/:userId" element={<UserForm />}>
        </Route>
        {/* <Route path="/api/send-email" element={<UserSearch />}>
        </Route> */}

      </Routes>
    </Router>
  );
};

export default AppRouter;
