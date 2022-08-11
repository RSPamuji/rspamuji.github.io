/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import Navbar from './Navbar';

const products = [
    {
      id: 1,
      name: 'Nama Kota/Kabupaten :',
      href: 'TanjungPinang',
      imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Lambang_Kota_Tanjungpinang.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'Kota Tanjungpinang',
      color: '',
    },
    {
        id: 2,
        name: 'Nama Kota/Kabupaten :',
        href: 'Batam',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Lambang_Kota_Batam.png/437px-Lambang_Kota_Batam.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Kota Batam',
        color: '',
      },
      {
        id: 3,
        name: 'Nama Kota/Kabupaten :',
        href: 'Bintan',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Lambang_Kabupaten_Bintan.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Kabupaten Bintan',
        color: '',
      },
      {
        id: 4,
        name: 'Nama Kota/Kabupaten :',
        href: 'Karimun',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lambang_Kabupaten_Karimun.gif/800px-Lambang_Kabupaten_Karimun.gif',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Kabupaten Karimun',
        color: '',
      },
      {
        id: 5,
        name: 'Nama Kota/Kabupaten :',
        href: 'Anambas',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lambang_Kabupaten_Kepulauan_Anambas.jpg/800px-Lambang_Kabupaten_Kepulauan_Anambas.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Kabupaten Kepulauan Anambas',
        color: '',
      },
      {
        id: 6,
        name: 'Nama Kota/Kabupaten :',
        href: 'Lingga',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Lambang_Kabupaten_Lingga.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Kabupaten Lingga',
        color: '',
      },
      {
        id: 7,
        name: 'Nama Kota/Kabupaten :',
        href: 'Natuna',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Lambang_Kabupaten_Natuna.png',
        imageAlt: "Front of men's Basic Tee in black.",
        price: 'Kabupaten Natuna',
        color: ''
      },
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <Navbar/>
        <h1 align = "center" className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-indigo-600 xl:inline">KABUPATEN</span>
        </h1>
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 align = "center" className="text-2xl font-extrabold tracking-tight text-gray-900">DAFTAR KABUPATEN DI PROVINSI KEPULUAN RIAU</h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
                <div>
                
                  <p className="text-sm font-medium text-gray-900">{product.jumlah}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  