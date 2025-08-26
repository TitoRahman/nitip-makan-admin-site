"use client"
import { useState } from "react";
import { paginate } from "../../../utils/Input_nama_sekolah";

export default function UserTable({ users, onDeleteUser, onEditUser }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { currentItems, totalPages, startIndex } = paginate(users, currentPage, itemsPerPage);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-0">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">Nama</th>
            <th className="px-6 py-4 font-medium text-gray-900">Nama Sekolah</th>
            <th className="px-6 py-4 font-medium text-gray-900">Status</th>
            <th className="px-6 py-4 font-medium text-gray-900">Aksi</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {currentItems.map((user, index) => (
            <tr key={startIndex + index} className="hover:bg-gray-50">
              <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={user.avatar || "/default-avatar.png"}
                    alt=""
                  />
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">{user.name}</div>
                  <div className="text-gray-400">{user.email}</div> //gant
                </div>
              </td>

              <td className="px-6 py-4">{user.school}</td>

              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${
                    user.status === "Online"
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-50 text-gray-600"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      user.status === "Online" ? "bg-green-600" : "bg-gray-600"
                    }`}
                  ></span>
                  {user.status}
                </span>
              </td>

              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => onDeleteUser(startIndex + index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => onEditUser(user, startIndex + index)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Control */}
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
