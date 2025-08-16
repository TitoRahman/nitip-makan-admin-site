export default function Table_data_pembeli({ users }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 font-medium text-gray-900">Nama</th>
            <th className="px-6 py-4 font-medium text-gray-900">Nama Sekolah</th>
            <th className="px-6 py-4 font-medium text-gray-900">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              {/* Nama + Avatar */}
              <td className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative h-10 w-10">
                  <img
                    className="h-full w-full rounded-full object-cover object-center"
                    src={user.avatar}
                    alt=""
                  />
                  <span className={`absolute right-0 bottom-0 h-2 w-2 rounded-full ring ring-white ${user.status === "Online" ? 'bg-green-400' : 'bg-gray-400'}`}></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">{user.name}</div>
                  <div className="text-gray-400">{user.email}</div>
                </div>
              </td>

              {/* Nama Sekolah */}
              <td className="px-6 py-4">{user.school}</td>

              {/* Status dengan badge warna */}
              <td className="px-6 py-4">
                <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold ${user.status === "Online" ? 'bg-green-50 text-green-600' : 'bg-gray-50 text-gray-600'}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${user.status === "Online" ? 'bg-green-600' : 'bg-gray-600'}`}></span>
                  {user.status}
                </span>
              </td>

              {/* Tombol Edit & Delete */}
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
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
