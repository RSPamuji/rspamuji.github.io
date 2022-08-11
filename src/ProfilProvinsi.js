import Navbar from './Navbar';

  export default function Example() {
    return (
      <div className="bg-white">
        <Navbar/>
        <h1 align = "center" className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-indigo-600 xl:inline">PROFIL PROVINSI</span>
        </h1><br></br>
        <div>
        <div class="border border-indigo-600" align = "center">
          <img 
          className="h-40 w-100%" 
          src="https://www.tataruang.id/wp-content/uploads/2022/06/peta-kepulauan-riau.jpg"
          alt=""
          />
          <br></br>
        </div>
          <p align="justify" className="font-bold"> Kepulauan Riau merupakan Provinsi baru hasil pemekaran dari Provinsi Riau yang merupakan Provinsi ke-32 yang di bentuk berdasarkan Undang-undang Nomor 25 Tahun 2002 tanggal 24 September 2002 </p>
          <p align="justify" className="font-bold"> Provinsi Kepulauan Riau memiliki posisi yang sangat strategis. Selain itu, Provinsi Kepulauan Riau juga langsung mengunjungi beberapa provinsi lainnya di Indonesia.</p>
          <p align="center" className="font-extrabold"> Batas-batas wilayah tersebut meliputi:</p>
          <p align="justify" className="font-bold">
          Batas Utara    : Vietnam dan Kamboja, <br></br>
          Batas Selatan  : Sumatera Selatan dan Jambi,<br></br>
          Batas Barat    : Singapura, Malaysia, dan Provinsi Riau<br></br>
          Batas Timur    : Malaysia dan Kalimantan Barat.(BPS Provinsi Kepulauan Riau, 2021)</p>
        </div>

      </div>
    )
  }
  