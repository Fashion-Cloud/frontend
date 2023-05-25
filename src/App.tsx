import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DemoMain from "./pages/DemoMain";
import MainPage from "./pages/MainPage";

export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/" element={<DemoMain/>}/>
        </Routes>
      </Router>
    </div>
  );
}