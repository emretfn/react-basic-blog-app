import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs/posts/:id" element={<Post />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
