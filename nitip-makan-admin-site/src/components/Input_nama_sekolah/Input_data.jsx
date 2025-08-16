"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { saveUserData, updateUserData } from "../../../utils/Input_nama_sekolah";

export default function InputData({ users, onAddUser, editUser, editIndex, onCancelEdit }) {
  const [formData, setFormData] = useState({ picName: "", schoolName: "", picPhoto: null });
  const [photoPreview, setPhotoPreview] = useState(null);

  useEffect(() => {
    if (editUser) {
      setFormData({ picName: editUser.name, schoolName: editUser.school, picPhoto: null });
      setPhotoPreview(editUser.avatar !== "/default-avatar.png" ? editUser.avatar : null);
    } else {
      setFormData({ picName: "", schoolName: "", picPhoto: null });
      setPhotoPreview(null);
    }
  }, [editUser]);

  const handleInputChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFormData(prev => ({ ...prev, picPhoto: file }));
    const reader = new FileReader();
    reader.onload = (ev) => setPhotoPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!formData.picName || !formData.schoolName) return alert("Isi semua field!");

    const newUser = {
      name: formData.picName,
      email: "-",
      avatar: photoPreview || "/default-avatar.png",
      school: formData.schoolName,
      status: "Online"
    };

    if (editUser) {
      const updatedUsers = updateUserData(editIndex, newUser, users);
      onAddUser(updatedUsers);
      onCancelEdit();
    } else {
      const updatedUsers = saveUserData(newUser, users);
      onAddUser(updatedUsers);
    }

    setFormData({ picName: "", schoolName: "", picPhoto: null });
    setPhotoPreview(null);
  };

  const handleReset = () => {
    setFormData({ picName: "", schoolName: "", picPhoto: null });
    setPhotoPreview(null);
    onCancelEdit?.();
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border mb-6 p-6">
      <CardHeader className="pb-4">
        <CardTitle className="text-blue-600 text-lg">{editUser ? "Edit Nama Sekolah" : "Registrasi Nama Sekolah"}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-gray-600 text-base mb-3">Upload Foto PIC</h3>
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={() => document.getElementById("pic-upload").click()}>Upload 📁</Button>
            <input id="pic-upload" type="file" accept="image/*" onChange={handleFileUpload} className="hidden"/>
            {photoPreview && <img src={photoPreview} alt="Preview" className="w-16 h-16 object-cover rounded border"/>}
          </div>
        </div>

        <div>
          <label className="text-gray-600 text-base mb-2 block">Nama PIC / OSIS</label>
          <Input value={formData.picName} onChange={(e) => handleInputChange("picName", e.target.value)} placeholder="Masukkan nama PIC/OSIS" className="text-lg font-medium border-0 border-b-2 border-gray-300 rounded-none px-0 focus:border-blue-600"/>
        </div>

        <div>
          <label className="text-gray-600 text-base mb-2 block">Nama Asal Sekolah</label>
          <Input value={formData.schoolName} onChange={(e) => handleInputChange("schoolName", e.target.value)} placeholder="Masukkan nama asal sekolah" className="text-lg font-medium border-0 border-b-2 border-gray-300 rounded-none px-0 focus:border-blue-600"/>
        </div>

        <div className="flex justify-center pt-6 gap-4">
          <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md text-base font-medium">{editUser ? "UPDATE" : "SUBMIT"}</Button>
          <Button onClick={handleReset} variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent">RESET</Button>
        </div>
      </CardContent>
    </div>
  );
}
