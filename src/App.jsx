import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import CarForm from "./components/Form/CarForm";
import { Suspense, lazy, useContext } from "react";
import { AppContext } from "./utils/AppContext";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

const AboutPage=lazy(()=>import('./pages/AboutPage/AboutPage.jsx'));
const ServicePage=lazy(()=>import('./pages/ServicePage/ServicePage.jsx'));
const ContactPage=lazy(()=>import('./pages/ContactPage/ContactPage.jsx'));


function App() {
  const { form } = useContext(AppContext);
  return (
    <div className='app'>
      {form && <CarForm />}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/About' element={<Suspense fallback={<Loader />}><AboutPage /></Suspense>} />
        <Route path='/Services' element={<Suspense fallback={<Loader />}><ServicePage /></Suspense>} />
        <Route path='/Contact' element={<Suspense fallback={<Loader />}><ContactPage /></Suspense>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
