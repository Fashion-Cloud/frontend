import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DemoMain from "./pages/DemoMain";
import {RecoilRoot} from 'recoil';

export default function App() {

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<DemoMain/>}/>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}