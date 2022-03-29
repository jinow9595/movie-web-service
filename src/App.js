import { BrowserRouter, Routes, Route } from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    // gh pages 배포 시 router에 basename 추가 필요
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Detail />}>
          <Route path=":id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
