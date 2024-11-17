import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Login } from "./components/login-components/Login";

function App() {
  return (
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;
