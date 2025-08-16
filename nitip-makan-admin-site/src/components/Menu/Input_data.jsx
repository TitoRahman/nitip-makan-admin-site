"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Calendar } from "lucide-react"
import { handleFileUpload, formatRupiah, resetMenuForm } from "../../../utils/Menu"
import "react-datepicker/dist/react-datepicker.css"

const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false })

export default function Input_data({ onAddMenu, editingItem, onUpdateMenu, cancelEdit }) {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [portions, setPortions] = useState("")
  const [pricePerPortion, setPricePerPortion] = useState("")
  const [menuName, setMenuName] = useState("")
  const [serviceFee, setServiceFee] = useState("")
  const [detailInformation, setDetailInformation] = useState("")
  const [selectedSchool, setSelectedSchool] = useState("")
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)

  useEffect(() => {
    if (editingItem) {
      setMenuName(editingItem.nama_menu)
      setSelectedSchool(editingItem.asal_sekolah)
      setPortions(editingItem.portions)
      setPricePerPortion(editingItem.pricePerPortion)
      setServiceFee(editingItem.serviceFee)
      setDetailInformation(editingItem.detailInformation)
      setSelectedDate(new Date(editingItem.date_publish))
      setPreview(editingItem.gambar)
    } else {
      resetMenuForm({ setMenuName, setSelectedSchool, setPortions, setPricePerPortion, setServiceFee, setDetailInformation, setSelectedDate, setFile, setPreview })
    }
  }, [editingItem])

  const handleSubmit = () => {
    if (!menuName || !selectedSchool || !portions || !pricePerPortion || !serviceFee || !detailInformation) {
      alert("Semua data harus diisi!")
      return
    }

    const formData = {
      gambar: file ? URL.createObjectURL(file) : preview || "/default-avatar.png",
      date_publish: selectedDate.toLocaleDateString(),
      nama_menu: menuName,
      asal_sekolah: selectedSchool,
      portions,
      pricePerPortion,
      serviceFee,
      detailInformation
    }

    if (editingItem?.index !== undefined) {
      onUpdateMenu(editingItem.index, formData)
    } else {
      onAddMenu(formData)
    }

    resetMenuForm({ setMenuName, setSelectedSchool, setPortions, setPricePerPortion, setServiceFee, setDetailInformation, setSelectedDate, setFile, setPreview })
  }

  return (
    <div className="w-full bg-white p-4 rounded-md border border-gray-200">
      <h1 className="text-xl font-semibold text-blue-700 mb-4">{editingItem ? "Edit Menu" : "Upload Menu"}</h1>

      <Card className="border border-gray-200">
        <CardContent className="space-y-6">

          {/* Upload & Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-600">Upload Foto Menu</Label>
              <input
                type="file"
                accept="image/png"
                className="hidden"
                id="fileInput"
                onChange={(e) => handleFileUpload(e, setFile, setPreview)}
              />
              <Button variant="outline" className="w-full h-10 justify-start gap-2 border-gray-300 bg-transparent"
                      onClick={() => document.getElementById("fileInput")?.click()}>
                <Upload className="h-4 w-4" />
                {file ? file.name : preview ? "Ganti Foto" : "Upload"}
              </Button>
              {preview && <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover border rounded-md" />}
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium text-gray-600">Tanggal Order</Label>
              <div className="relative">
                <DatePicker selected={selectedDate} onChange={(date) => date && setSelectedDate(date)}
                            dateFormat="dd - MMMM - yyyy"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10" />
                <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Input Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Jumlah Porsi" value={portions} setValue={setPortions} />
            <InputField label="Harga per 1 porsi" value={pricePerPortion} setValue={setPricePerPortion} isRupiah />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Nama Menu" value={menuName} setValue={setMenuName} />
            <InputField label="Biaya Layanan" value={serviceFee} setValue={setServiceFee} isRupiah />
          </div>

          <div className="space-y-3">
            <Label className="text-sm font-medium text-gray-600">Keterangan</Label>
            <textarea className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      rows={3} placeholder="Masukan keterangan"
                      value={detailInformation} onChange={(e) => setDetailInformation(e.target.value)} />
          </div>

          {/* Pilih Sekolah */}
          <div className="w-full relative">
            <label className="text-sm font-medium text-gray-600">Lokasi sekolah</label>
            <button type="button" onClick={() => setOpen(!open)}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-left">
              {selectedSchool || "Pilih sekolah..."}
            </button>
            {open && (
              <div className="mt-2 border border-gray-300 rounded-md bg-white shadow-md">
                {["SMP/SMA SUTOMO 1 MEDAN", "SMP/SMA SUTOMO 2 MEDAN", "SMP/SMA SUTOMO 3 MEDAN"].map((school) => (
                  <div key={school} className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                       onClick={() => { setSelectedSchool(school); setOpen(false) }}>
                    {school}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center gap-4 pt-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-2 rounded-md" onClick={handleSubmit}>
              {editingItem ? "UPDATE" : "SUBMIT"}
            </Button>
            {editingItem && (
              <Button className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded-md" onClick={cancelEdit}>
                CANCEL
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function InputField({ label, value, setValue, isRupiah }) {
  const format = (number) => isRupiah ? formatRupiah(number) : number
  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium text-gray-600">{label}</Label>
      <Input value={format(value)} placeholder={`Masukan ${label.toLowerCase()}`}
             onChange={(e) => setValue(isRupiah ? e.target.value.replace(/\D/g, "") : e.target.value.replace(/[^0-9]/g, ""))}
             className="border-gray-300" />
    </div>
  )
}
