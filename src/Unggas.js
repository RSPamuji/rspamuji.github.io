import Navbar from './Navbar';


  
  export default function Example() {
    return (
      <div className="bg-white">
        <Navbar/>
        <h1 align = "center" className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span className="block text-indigo-600 xl:inline">UNGGAS</span>
        </h1>
        <table align = "center" class="table auto">
  <thead class="border border-slate-600 ...">
    <tr align="center">
      <th class="border border-slate-600 ...">Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
</table>

        </div>
    )
  }