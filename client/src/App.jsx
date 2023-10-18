import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import signIn from './pages/SignIn';
import signUp from "./pages/signUp";
import About from "./pages/about";
import Profile from "./pages/Profile";

export default function App() {
  return <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/sign-in" element={<signIn />} />
     <Route path="/sign-up" element={<signUp />} />
     <Route path="/about" element={<About />} />
     <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>;
}
