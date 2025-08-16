import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function Chat_page() {
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
    <div className="row-span-4 col-start-2 row-start-2">3</div>
    <div className="col-span-2 row-span-4 col-start-3 row-start-2">4</div>
    <div className="row-span-4 col-start-5 row-start-2">5</div>
    </div>
  );
}
