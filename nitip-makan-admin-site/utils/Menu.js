// utils/formUtils.js

// Format angka menjadi Rupiah
export function formatRupiah(number) {
  if (!number) return ""
  return "Rp " + number.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

// Handle file upload & preview
export function handleFileUpload(e, setFile, setPreview) {
  const selected = e.target.files?.[0] || null
  setFile(selected)

  if (!selected) {
    setPreview(null)
    return
  }

  const objectUrl = URL.createObjectURL(selected)
  setPreview(objectUrl)
  return () => URL.revokeObjectURL(objectUrl)
}

// Reset semua form input
export function resetMenuForm(setters) {
  const { setMenuName, setSelectedSchool, setPortions, setPricePerPortion, setServiceFee, setDetailInformation, setSelectedDate, setFile, setPreview } = setters

  setMenuName("")
  setSelectedSchool("")
  setPortions("")
  setPricePerPortion("")
  setServiceFee("")
  setDetailInformation("")
  setSelectedDate(new Date())
  setFile(null)
  setPreview(null)
}
