import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import MainDrawer from './components/common/MainDrawer';
import LoginPage from './pages/LoginPage';
import LookbookDetailpage from './pages/LookbookDetailpage';
import Mainpage from './pages/MainPage';
import MyPage from './pages/MyPage';
import RegisterPage from './pages/RegisterPage';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <MainDrawer />
        <Router>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/lookbookdetail/:id"
              element={<LookbookDetailpage />}
            />
          </Routes>
        </Router>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
