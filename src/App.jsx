import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import CarForm from "./components/Form/CarForm";
import { useContext } from "react";
import { AppContext } from "./utils/AppContext";
import HomePage from "./pages/HomePage/HomePage";


function App() {
  const { form } = useContext(AppContext);
  return (
    <div className='app'>
      {form && <CarForm />}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<p>About Page</p>} />
        <Route path='/services' element={<p>Services Page</p>} />
        <Route path='/contact' element={<p>Contact Page</p>} />
      </Routes>
    </div>
  );
}

export default App;
