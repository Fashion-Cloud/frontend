import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import MainDrawer from './components/common/MainDrawer';
import LookbookDetailpage from './pages/LookbookDetailpage';
import Mainpage from './pages/MainPage';
import MyPage from './pages/MyPage';

export default function App() {
  return (
    <RecoilRoot>
      <MainDrawer />
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/lookbookdetail/:id" element={<LookbookDetailpage />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
