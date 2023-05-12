import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DemoPage from "./pages/DemoPage";
import FirstPage from "./pages/Firstpage";
import MainPage from "./pages/MainPage";

export default function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/main" element={<MainPage/>}/>
          {/* <Route path="/demo" element={<DemoPage/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}