import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import {Home} from "../pages/Home/Home";
import About from "../pages/About/About";
import Programs from "../pages/Programs/Programs";
import Blog from "../pages/Blog/Blog";
import {Login} from "../pages/Login/Login";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blog" element={<Blog />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
