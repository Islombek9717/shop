import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./data";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const user = true;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map(({ pathname, id, Element }) => (
            <Route key={id} path={pathname} element={<Element />} />
          ))}
          <Route
            path="/login"
            {...(user ? <Navigate to={"/home"} /> : <Login />)}
          />
          <Route
            path="/register"
            {...(user ? <Navigate to={"/home"} /> : <Register />)}
          />
          <Route path="/" element={<Navigate to={"/home"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
