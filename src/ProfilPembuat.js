import Navbar from './Navbar';

  export default function Example() {
    return (
      <div className="bg-white">
        <Navbar/>
        <h1 align = "center" className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-indigo-600 xl:inline">PROFIL PEMBUAT</span>
        </h1><br></br>
        <div align = "center">
          <img 
          className="h-40 w-25"
          src="https://ump.ac.id/foto_berita/images/Logo%20UMP.png"
          alt=""
          />
        </div>
        <br></br>
        < h2 align="center" className="font-extrabold" >NAMA  : RIZAL SINGGIH PAMUJI</h2>
        < h2 align="center" className="font-extrabold" >NIM   : 1503040114          </h2>
        < h2 align="center" className="font-extrabold" >PRODI : TEKNIK INFORMATIKA  </h2>
        < h2 align="center" className="font-extrabold" >FAKULTAS : TEKNIK DAN SAINS </h2>
        <br></br>
        < h2 align="center" className="font-extrabold" >UNIVERSITAS MUHAMMADIYAH PURWOKERTO</h2>


      </div>
    )
  }