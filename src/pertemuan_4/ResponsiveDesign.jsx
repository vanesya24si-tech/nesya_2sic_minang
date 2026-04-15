import { useState } from "react";
import GuestView from "./GuestView";
import AdminView from "./AdminView";

export default function ResponsiveDesign() {
  const [page, setPage] = useState("guest");

  return (
    <div className="p-6">
      <div className="flex gap-3 mb-6">
        <button onClick={() => setPage("guest")} className="px-4 py-2 bg-blue-500 text-white rounded">
          Guest
        </button>
        <button onClick={() => setPage("admin")} className="px-4 py-2 bg-green-500 text-white rounded">
          Admin
        </button>
      </div>

      {page === "guest" && <GuestView />}
      {page === "admin" && <AdminView />}
    </div>
  );
}