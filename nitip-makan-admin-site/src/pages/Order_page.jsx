import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Order_table from "@/components/Order/Order_table";
import OrderStats from "@/components/Order/OrderStats";

export default function Order_page() {
  // Bisa dikirim dari sini sebagai props
  const users = [
    {
      name: "Rizky Dendy",
      email: "rizky@example.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      school: "SMK Mikroskil",
      status: "Paid",
      phone: "08123456789",
      payment: "Qris",
      bookingCode: "BK001"
    },
    {
      name: "Budi Santoso",
      email: "budi@example.com",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      school: "SMA Negeri 1",
      status: "Pending",
      phone: "08234567890",
      payment: "Qris",
      bookingCode: "BK002"
    },
  ]

  const statsData = [
    { label: "JUMLAH PESANAN", value: 0 },
    { label: "SISA PORSI", value: 15 },
    { label: "HARGA 1 PORSI", value: "IDR. 25.000" },
    { label: "TOTAL YANG SUDAH DITERIMA", value: "IDR. 2.375.000" },
  ];

  ;

  return (
    <div className="grid grid-cols-5 grid-rows-[auto_1fr] gap-4 bg-white">
      {/* Sidebar full height */}
      <div className="row-span-2">
        <Sidebar />
      </div>

      {/* Navbar baris pertama */}
      <div className="col-span-4">
        <Navbar className="pt-4 pb-0" />
      </div>

      {/* Konten utama */}
      <div className="col-span-3 col-start-2 row-start-2 bg-white">
        <Order_table users={users} />
      </div>

      <div className="col-start-5 row-start-2">
          
        <div className="col-start-5 row-start-2">
          <OrderStats stats={statsData} />
        </div>
    
      </div>
    </div>
  );
}
