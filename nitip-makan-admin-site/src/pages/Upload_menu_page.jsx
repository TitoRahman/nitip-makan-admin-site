"use client"

import { useState, useEffect } from "react"
import Input_data from "../components/Menu/Input_data"
import Menutable from "../components/Menu/Menu_table"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"

export default function MenuPage() {
  const [menuList, setMenuList] = useState([])
  const [editingItem, setEditingItem] = useState(null)

  useEffect(() => {
    const storedData = localStorage.getItem("submittedData")
    if (storedData) setMenuList(JSON.parse(storedData))
  }, [])

  const handleAddMenu = (menu) => {
    const updated = [...menuList, menu]
    setMenuList(updated)
    localStorage.setItem("submittedData", JSON.stringify(updated))
  }

  const handleUpdateMenu = (index, menu) => {
    const updated = [...menuList]
    updated[index] = menu
    setMenuList(updated)
    localStorage.setItem("submittedData", JSON.stringify(updated))
    setEditingItem(null)
  }

  const handleDeleteMenu = (index) => {
    const updated = menuList.filter((_, i) => i !== index)
    setMenuList(updated)
    localStorage.setItem("submittedData", JSON.stringify(updated))
  }

  const handleEditMenu = (index) => {
    setEditingItem({ ...menuList[index], index })
  }

  const cancelEdit = () => setEditingItem(null)

  return (
    <div className="grid grid-cols-5 grid-rows-[auto_1fr] gap-4">
      <div className="row-span-2"><Sidebar /></div>
      <div className="col-span-4"><Navbar className="pt-4 pb-0" /></div>

      <div className="col-span-2">
        <Input_data onAddMenu={handleAddMenu} editingItem={editingItem} onUpdateMenu={handleUpdateMenu} cancelEdit={cancelEdit} />
      </div>

      <div className="col-span-2 bg-white">
        <Menutable MenuItem={menuList} onDelete={handleDeleteMenu} onEdit={handleEditMenu} />
      </div>
    </div>
  )
}
