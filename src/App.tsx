import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import {RecoilRoot} from 'recoil';

export default function App() {

  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}