import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Table_data_pembeli from "@/components/Akun/Table_data_pembeli";

export default function Akun_page() {

  const users = [
    {
      name: "Rizky Dendy",
      email: "rizky@example.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      school: "SMK Mikroskil",
      status: "Online"
    },
    {
      name: "Budi Santoso",
      email: "budi@example.com",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      school: "SMA Negeri 1",
      status: "Offline",
    },
    {
      name: "Rizky Dendy",
      email: "rizky@example.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      school: "SMK Mikroskil",
      status: "Online"
    },
    {
      name: "Budi Santoso",
      email: "budi@example.com",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      school: "SMA Negeri 1",
      status: "Offline",
    },
    {
      name: "Rizky Dendy",
      email: "rizky@example.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      school: "SMK Mikroskil",
      status: "Online"
    },
    {
      name: "Budi Santoso",
      email: "budi@example.com",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
      school: "SMA Negeri 1",
      status: "Offline",
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
    <div className="col-span-2 row-span-4 col-start-2">
      <Table_data_pembeli users={users} />
    </div>
    <div className="col-span-2 row-span-4 col-start-4 bg-yellow-400">4</div>
</div>
  );
}
