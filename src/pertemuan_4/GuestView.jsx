import data from "./services.json";
import { useState } from "react";
import { Search, MapPin, Tag, ArrowRight } from "lucide-react"; // Opsional: Gunakan lucide-react untuk ikon

export default function GuestView() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || item.category === category) &&
    (location === "" || item.provider?.location === location)
  );

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Temukan Layanan Terbaik
        </h1>
        <p className="text-gray-500">Cari profesional yang tepat untuk kebutuhan proyek Anda</p>
      </div>

      {/* Filter Section */}
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
          <input
            placeholder="Cari keahlian atau nama jasa..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative">
            <Tag className="absolute left-3 top-3 text-gray-400" size={18} />
            <select 
              onChange={(e) => setCategory(e.target.value)} 
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none outline-none text-gray-700"
            >
              <option value="">Semua Kategori</option>
              <option>IT</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>

          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400" size={18} />
            <select 
              onChange={(e) => setLocation(e.target.value)} 
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border-none rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none outline-none text-gray-700"
            >
              <option value="">Semua Lokasi</option>
              <option>Jakarta</option>
              <option>Bandung</option>
              <option>Surabaya</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold text-blue-600 rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg text-gray-800 leading-tight group-hover:text-blue-600 transition-colors">
                    {item.name}
                  </h3>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm">
                  <MapPin size={14} className="mr-1" />
                  {item.provider?.location}
                </div>

                <hr className="border-gray-50" />

                <button className="w-full py-2.5 bg-blue-50 text-blue-600 font-semibold rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                  Lihat Detail
                  <ArrowRight size={16} className="ml-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed">
          <p className="text-gray-400 font-medium">Ups! Pekerjaan tidak ditemukan.</p>
        </div>
      )}
    </div>
  );
}