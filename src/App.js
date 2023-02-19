import { HashRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signin/Signin";
import FilesPage from "./pages/FilesPage/FilesPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<SignIn />} path={''} />
        <Route element={<FilesPage />} path={'/file-management'} />
      </Routes>
    </HashRouter>
  );
}

export default App;
