import data from "./services.json";
import { useState } from "react";
import { 
  Search, 
  Plus, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Briefcase, 
  Users, 
  Star, 
  MapPin, 
  ChevronDown 
} from "lucide-react";

export default function AdminView() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || item.category === category)
  );

  const getCategoryColor = (cat) => {
    const colors = {
      IT: "bg-blue-100 text-blue-700 border-blue-200",
      Design: "bg-pink-100 text-pink-700 border-pink-200",
      Marketing: "bg-purple-100 text-purple-700 border-purple-200",
      Business: "bg-amber-100 text-amber-700 border-amber-200",
    };
    return colors[cat] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8 bg-slate-50 min-h-screen">
      
      {/* HEADER & ACTION SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-none">
            Dashboard <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">Admin</span>
          </h2>
          <p className="text-slate-500 font-medium mt-3">Manajemen data layanan dan profesional terdaftar.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-2xl font-bold shadow-lg shadow-indigo-200 transition-all active:scale-95">
          <Plus size={20} />
          Data Baru
        </button>
      </div>

      {/* QUICK STATS Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[
          { label: "Total Lowongan", val: filtered.length, icon: Briefcase, color: "bg-blue-500" },
          { label: "Kategori Aktif", val: "4", icon: Star, color: "bg-amber-500" },
          { label: "Provider Lokal", val: "12", icon: Users, color: "bg-emerald-500" },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-indigo-100 transition-all">
            <div className={`p-4 rounded-2xl ${stat.color} text-white shadow-lg shadow-inner`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h4 className="text-2xl font-black text-slate-800">{stat.val}</h4>
            </div>
          </div>
        ))}
      </div>

      {/* SEARCH & FILTER COMPACT */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
          <input 
            type="text"
            placeholder="Cari nama atau posisi..." 
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-slate-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all font-medium"
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
        <div className="relative min-w-[200px]">
          <select 
            onChange={(e) => setCategory(e.target.value)} 
            className="w-full px-5 py-4 bg-white border border-slate-200 rounded-2xl text-slate-700 font-bold appearance-none focus:outline-none focus:ring-4 focus:ring-indigo-500/10 cursor-pointer"
          >
            <option value="">Semua Kategori</option>
            <option value="IT">IT & Tech</option>
            <option value="Design">Creative</option>
            <option value="Marketing">Marketing</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={18} />
        </div>
      </div>

      {/* REFINED TABLE */}
      <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl shadow-slate-200/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-8 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Informasi Utama</th>
                <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Kategori</th>
                <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Estimasi Gaji</th>
                <th className="px-6 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Lokasi</th>
                <th className="px-8 py-6 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 font-medium text-slate-700">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-all group">
                    <td className="px-8 py-5">
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-slate-400 font-bold"># {item.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className={`px-4 py-1.5 border rounded-xl text-[10px] font-black tracking-wider uppercase ${getCategoryColor(item.category)}`}>
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-1.5 font-bold text-slate-800">
                        <span className="text-emerald-500 text-xs">Rp</span>
                        {item.price?.toLocaleString() || "0"}
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <MapPin size={14} className="text-slate-300" />
                        {item.provider?.location || "Remote"}
                      </div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                        <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:text-indigo-600 hover:border-indigo-200 shadow-sm transition-all">
                          <Edit size={16} />
                        </button>
                        <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:text-red-600 hover:border-red-200 shadow-sm transition-all">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-28 text-center bg-white">
                    <div className="flex flex-col items-center">
                      <div className="text-6xl grayscale opacity-30 mb-6">🔍</div>
                      <h3 className="text-xl font-black text-slate-800">Tidak ada hasil</h3>
                      <p className="text-slate-400 mt-2">Coba gunakan kata kunci pencarian yang berbeda.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}