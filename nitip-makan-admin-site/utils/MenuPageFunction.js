// utils/formUtils.js

// Format angka menjadi Rupiah
export const formatRupiah = (angka) => {
  if (!angka) return "Rp 0"
  const number = Number(angka)
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number)
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

export function paginate(array, currentPage, itemsPerPage) {
  const totalPages = Math.ceil(array.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = array.slice(startIndex, startIndex + itemsPerPage);

  return { currentItems, totalPages, startIndex };
}
