import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import Lookbookpage from "./pages/Lookbookpage";
import {RecoilRoot} from 'recoil';

import MainDrawer from "./components/common/MainDrawer";

export default function App() {

  return (
    <RecoilRoot>
      <MainDrawer/>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/lookbook" element={<Lookbookpage/>}/>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}