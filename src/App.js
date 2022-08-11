import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Product = lazy(() => import('./Product'));
const Features = lazy(() => import('./Features'));
const Navbar = lazy(() => import('./Navbar'));
const Maps = lazy(() => import('./Maps'));
const Kabupaten = lazy(() => import('./Kabupaten'));
const Unggas = lazy(() => import('./Unggas'));
const ProfilPembuat = lazy(() => import('./ProfilPembuat'));
const ProfilProvinsi = lazy(() => import('./ProfilProvinsi'));
const AyamKampung = lazy(() => import('./mapunggas/AyamKampung'));
const AyamPedaging = lazy(() => import('./mapunggas/AyamPedaging'));
const AyamPetelur = lazy(() => import('./mapunggas/AyamPetelur'));
const ItikdanItikmanila = lazy(() => import('./mapunggas/ItikdanItikmanila'));
const Anambas = lazy(() => import('./mapunggas/kabupaten/Anambas'));
const Batam = lazy(() => import('./mapunggas/kabupaten/Batam'));
const Bintan = lazy(() => import('./mapunggas/kabupaten/Bintan'));
const Karimun = lazy(() => import('./mapunggas/kabupaten/Karimun'));
const Lingga = lazy(() => import('./mapunggas/kabupaten/Lingga'));
const Natuna = lazy(() => import('./mapunggas/kabupaten/Natuna'));
const TanjungPinang = lazy(() => import('./mapunggas/kabupaten/TanjungPinang'));
function App() {
  return (
    <Router>
      <Suspense fallback={<div align ="center" >
        <img width="200" height="200" src="https://kepri-travel.kepriprov.go.id/wp-content/uploads/LAMBANG-PROVINSI-KEPRI-1-225x300.jpg"
          alt=""
        />
      </div>}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Features" element={<Features/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>    
        <Route path="/Maps" element={<Maps/>}/>
        <Route path="/Kabupaten" element={<Kabupaten/>}/>
        <Route path="/Unggas" element={<Unggas/>}/>
        <Route path="/ProfilPembuat" element={<ProfilPembuat/>}/>  
        <Route path="/ProfilProvinsi" element={<ProfilProvinsi/>}/>
        <Route path="/AyamKampung" element={<AyamKampung/>}/>
        <Route path="/AyamPedaging" element={<AyamPedaging/>}/>
        <Route path="/AyamPetelur" element={<AyamPetelur/>}/>  
        <Route path="/ItikdanItikmanila" element={<ItikdanItikmanila/>}/>
        <Route path="/Anambas" element={<Anambas/>}/>
        <Route path="/Batam" element={<Batam/>}/>
        <Route path="/Bintan" element={<Bintan/>}/>
        <Route path="/Karimun" element={<Karimun/>}/>  
        <Route path="/Lingga" element={<Lingga/>}/>
        <Route path="/Natuna" element={<Natuna/>}/>
        <Route path="/TanjungPinang" element={<TanjungPinang/>}/>  
      </Routes>
      </Suspense>   
    </Router>
  )
}
export default App;
