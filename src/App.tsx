import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import MainPage from "./pages/MainPage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/main" element={<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}
