import { useState } from "react";
import { paginate } from "../../../utils/MenuPageFunction";
export default function Menutable({ MenuItem, onDelete, onEdit }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Panggil util pagination
  const { currentItems, totalPages, startIndex } = paginate(
    MenuItem,
    currentPage,
    itemsPerPage
  );

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 font-medium text-gray-900">Nama Menu</th>
            <th className="px-4 py-2 font-medium text-gray-900">Tanggal Publish</th>
            <th className="px-4 py-2 font-medium text-gray-900">Asal Sekolah</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {currentItems.map((item, index) => (
            <tr key={startIndex + index} className="hover:bg-gray-50">
              <td className="flex items-center gap-3 px-4 py-2 font-normal text-gray-900">
                <div className="relative h-8 w-8">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={item.gambar}
                    alt=""
                  />
                </div>
                <div className="text-sm font-medium text-gray-900">
                  {item.nama_menu}
                </div>
              </td>
              <td className="px-4 py-2">{item.date_publish}</td>
              <td className="px-4 py-2">{item.asal_sekolah}</td>
              <td className="px-4 py-2 flex justify-end gap-3">
                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => onDelete?.(startIndex + index)}
                >
                  Delete
                </button>
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => onEdit?.(startIndex + index)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 p-4">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}