import React, { useState } from "react";
import "./App.css";

// Import disesuaikan dengan folder pertemuan_4 di gambar kamu
import GuestView from "./pertemuan_4/GuestView"; 
import AdminView from "./pertemuan_4/AdminView";

// --- 1. REUSABLE COMPONENT ---
const CustomInput = ({ label, name, value, onChange, error, type = "text" }) => (
  <div style={{ marginBottom: "15px", textAlign: "left" }}>
    <label className="font-bold text-gray-700 block mb-1">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-pink-400 outline-none transition-all"
      placeholder={`Input ${label}...`}
    />
    {error && <span className="text-red-500 text-xs mt-1 block">⚠️ {error}</span>}
  </div>
);

// --- 2. REGISTRATION FORM COMPONENT ---
function RegistrationForm() {
  const [form, setForm] = useState({ nama: "", email: "", telepon: "", kursus: "", sesi: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (name, value) => {
    let msg = "";
    if (name === "nama") {
      if (!value) msg = "Wajib diisi!";
      else if (/\d/.test(value)) msg = "Tidak boleh angka!";
      else if (value.length < 3) msg = "Minimal 3 huruf!";
    }
    if (name === "email") {
      if (!value) msg = "Wajib diisi!";
      else if (!value.includes("@")) msg = "Harus ada '@'!";
      else if (!value.endsWith(".com")) msg = "Harus diakhiri .com!";
    }
    if (name === "telepon") {
      if (!value) msg = "Wajib diisi!";
      else if (isNaN(value)) msg = "Harus berupa angka!";
      else if (value.length < 10) msg = "Minimal 10 digit!";
    }
    return msg;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validateField(name, value) });
    setIsSubmitted(false);
  };

  const isValid = form.nama && form.email && form.telepon && form.kursus && form.sesi &&
                  !errors.nama && !errors.email && !errors.telepon;

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Form tidak di-reset agar data bisa dilihat di kotak sukses
  };

  return (
    <div className="p-2">
      <h3 className="text-xl font-bold text-center text-gray-800 mb-6">
        Form Pendaftaran Kursus 
      </h3>

      <CustomInput label="Nama Lengkap" name="nama" value={form.nama} onChange={handleInput} error={errors.nama} />
      <CustomInput label="Alamat Email" name="email" value={form.email} onChange={handleInput} error={errors.email} />
      <CustomInput label="Nomor WhatsApp" name="telepon" value={form.telepon} onChange={handleInput} error={errors.telepon} />

      <div className="mb-4 text-left">
        <label className="font-bold text-gray-700 block mb-1">Pilih Kursus</label>
        <select name="kursus" onChange={handleInput} className="w-full p-3 border rounded-xl bg-white">
          <option value="">-- Pilih --</option>
          <option value="React Master">React Master</option>
          <option value="UI/UX Design">UI/UX Design</option>
        </select>
      </div>

      <div className="mb-6 text-left">
        <label className="font-bold text-gray-700 block mb-1">Sesi Belajar</label>
        <select name="sesi" onChange={handleInput} className="w-full p-3 border rounded-xl bg-white">
          <option value="">-- Pilih --</option>
          <option value="Pagi">Pagi (08:00)</option>
          <option value="Malam">Malam (19:00)</option>
        </select>
      </div>

      <button 
        className={`w-full p-4 rounded-xl font-bold transition-all ${
          isValid ? "bg-pink-500 text-white shadow-lg hover:bg-pink-600" : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
        disabled={!isValid} 
        onClick={handleSubmit}
      >
        {isValid ? "Daftar Sekarang ✨" : "Lengkapi Form..."}
      </button>

      {isSubmitted && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm animate-bounce">
          <b className="block mb-1">✅ Pendaftaran Sukses!</b>
          Nama: {form.nama} <br />
          Kursus: {form.kursus} ({form.sesi})
        </div>
      )}
    </div>
  );
}

// --- 3. MAIN APP ---
function App() {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4 md:px-20">
      
      {/* Container untuk Form agar rapi di tengah */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl mb-12 border border-gray-100">
        <RegistrationForm />
      </div>

      <hr className="my-12 border-gray-200" />

      {/* GUEST VIEW SECTION */}
      <section className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">🌸 Guest View</h2>
          <p className="text-gray-500">Jelajahi ekosistem framework terbaik kami</p>
        </div>
        <GuestView />
      </section>

      {/* ADMIN VIEW SECTION */}
      <section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800">📊 Admin Dashboard</h2>
          <p className="text-gray-500">Kelola data pendaftar dan statistik kursus</p>
        </div>
        <AdminView />
      </section>

      <footer className="mt-20 text-center text-gray-400 text-xs pb-10">
        © 2026 Vanesya • Pertemuan 4 • Teknik Informatika
      </footer>
    </main>
  );
}

export default App;