import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import UserTable from "@/components/Input_nama_sekolah/User_table";
import InputData from "@/components/Input_nama_sekolah/Input_data";
import { useState } from "react";

export default function InputNameSekolahPage() {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddUser = (updatedUsers) => setUsers(updatedUsers);
  const handleDeleteUser = (index) => setUsers(prev => prev.filter((_, i) => i !== index));
  const handleEditUser = (user, index) => setEditIndex(index);
  const handleCancelEdit = () => setEditIndex(null);

  return (
    <div className="grid grid-cols-5 grid-rows-[auto_1fr] gap-4">
      <div className="row-span-2"><Sidebar /></div>
      <div className="col-span-4"><Navbar className="pt-4 pb-0" /></div>

      <div className="col-span-2">
        <InputData
          users={users}
          onAddUser={handleAddUser}
          editUser={editIndex !== null ? users[editIndex] : null}
          editIndex={editIndex}
          onCancelEdit={handleCancelEdit}
        />
      </div>

      <div className="col-span-2 bg-white">
        <UserTable
          users={users}
          onDeleteUser={handleDeleteUser}
          onEditUser={handleEditUser}
        />
      </div>
    </div>
  );
}
