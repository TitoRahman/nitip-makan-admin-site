import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Table_keuangan from "@/components/Keuangan/Table_keuangan";

export default function Laporan_keuangan_page() {

  const Data = [
    {
      date: "11-06-2025",
      sekolah: "SMA/SMP Swasta Sutomo 1",
      porsiterjual: "20/20",
      harga: "Rp. 25.000",
      subtotal: "Rp. 500.000",
      biayaqris: "Rp. 3.500",
      biayalayanan: "Rp. 100.000",
      profitnetto: "Rp. 390.000"
    },
    {
      date: "11-06-2025",
      sekolah: "SMA/SMP Swasta Sutomo 1",
      porsiterjual: "20/20",
      harga: "Rp. 25.000",
      subtotal: "Rp. 500.000",
      biayaqris: "Rp. 3.500",
      biayalayanan: "Rp. 100.000",
      profitnetto: "Rp. 390.000"
    },
    {
      date: "11-06-2025",
      sekolah: "SMA/SMP Swasta Sutomo 1",
      porsiterjual: "20/20",
      harga: "Rp. 25.000",
      subtotal: "Rp. 500.000",
      biayaqris: "Rp. 3.500",
      biayalayanan: "Rp. 100.000",
      profitnetto: "Rp. 390.000"
    },
    {
      date: "11-06-2025",
      sekolah: "SMA/SMP Swasta Sutomo 1",
      porsiterjual: "20/20",
      harga: "Rp. 25.000",
      subtotal: "Rp. 500.000",
      biayaqris: "Rp. 3.500",
      biayalayanan: "Rp. 100.000",
      profitnetto: "Rp. 390.000"
    },
    {
      date: "11-06-2025",
      sekolah: "SMA/SMP Swasta Sutomo 1",
      porsiterjual: "20/20",
      harga: "Rp. 25.000",
      subtotal: "Rp. 500.000",
      biayaqris: "Rp. 3.500",
      biayalayanan: "Rp. 100.000",
      profitnetto: "Rp. 390.000"
    },
    {
      date: "11-06-2025",
      sekolah: "SMA/SMP Swasta Sutomo 1",
      porsiterjual: "20/20",
      harga: "Rp. 25.000",
      subtotal: "Rp. 500.000",
      biayaqris: "Rp. 3.500",
      biayalayanan: "Rp. 100.000",
      profitnetto: "Rp. 390.000"
    },
  ]

  return (
    <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="row-span-5">
              <div className="row-span-2">
                  <Sidebar />
              </div>
            </div>
            
            <div className="col-span-4">
              <div className="col-span-4">
                <Navbar className="py-2 px-4" />
              </div>
            </div>
        <div className="col-span-4 row-span-4 col-start-2 row-start-2">
          <Table_keuangan DataItem={Data} />
        </div>
    </div>
  );
}
