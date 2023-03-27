import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstPage from "./pages/FirstPage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}
