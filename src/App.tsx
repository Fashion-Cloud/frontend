import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstPageEx from "./pages/FirstpageEx";
import MainPage from "./pages/MainPage";

export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPageEx/>}/>
          <Route path="/first" element={<FirstPageEx/>}/>
          <Route path="/main" element={<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}