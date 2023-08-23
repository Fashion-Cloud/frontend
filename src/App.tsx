
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import {RecoilRoot} from 'recoil';

import MainDrawer from "./components/common/MainDrawer";
import LookbookDetailpage from "./pages/LookbookDetailpage";
import Lookbookpage from "./pages/Lookbookpage";
import Mainpage from "./pages/MainPage";

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
