import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Mainpage from "./pages/MainPage";
import Lookbookpage from "./pages/Lookbookpage";
import {RecoilRoot} from 'recoil';

import MainDrawer from "./components/common/MainDrawer";
import LookbookDetailpage from "./pages/LookbookDetailpage";

export default function App() {

  return (
    <RecoilRoot>
      <MainDrawer/>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/lookbook" element={<Lookbookpage/>}/>
          <Route path="/lookbookdetail" element={<LookbookDetailpage/>}/>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}