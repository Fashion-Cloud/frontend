import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DemoPage from "./pages/DemoPage";
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
          <Route path="/demo" element={<DemoPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}