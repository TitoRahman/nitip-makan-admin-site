export default function Table_keuangan({ DataItem }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 font-medium text-gray-900">Tanggal</th>
            <th className="px-4 py-2 font-medium text-gray-900">Sekolah</th>
            <th className="px-4 py-2 font-medium text-gray-900">Porsi Terjual</th>
            <th className="px-4 py-2 font-medium text-gray-900">Harga @</th>
            <th className="px-4 py-2 font-medium text-gray-900">Subtotal</th>
            <th className="px-4 py-2 font-medium text-gray-900">Biaya Qris</th>
            <th className="px-4 py-2 font-medium text-gray-900">Biaya Layanan @ Rp.5000</th>
            <th className="px-4 py-2 font-medium text-gray-900">Profit Netto</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {DataItem.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-2">{item.date}</td>
              <td className="px-4 py-2">{item.sekolah}</td>
              <td className="px-4 py-2">{item.porsiterjual}</td>
              <td className="px-4 py-2">{item.harga}</td>
              <td className="px-4 py-2">{item.subtotal}</td>
              <td className="px-4 py-2">{item.biayaqris}</td>
              <td className="px-4 py-2">{item.biayalayanan}</td>
              <td className="px-4 py-2">{item.profitnetto}</td>

              {/* Tombol Edit & Delete */}
              <td className="px-4 py-2">
                <div className="flex justify-end gap-3">
                  <button className="text-red-600 hover:text-red-800">Delete</button>
                  <button className="text-blue-600 hover:text-blue-800">Edit</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
