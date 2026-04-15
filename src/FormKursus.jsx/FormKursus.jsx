import React, { useState } from 'react';
import InputPesan from './InputPesan';

const FormKursus = () => {
  const [form, setForm] = useState({ nama: '', email: '', telepon: '', kelas: '', sesi: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Logika Validasi (Minimal 3 validasi per input)
  const validate = (name, value) => {
    let msg = "";
    if (name === 'nama') {
      if (!value) msg = "Nama wajib diisi!";
      else if (/\d/.test(value)) msg = "Nama tidak boleh mengandung angka!";
      else if (value.length < 3) msg = "Minimal 3 karakter!";
    }
    if (name === 'email') {
      if (!value) msg = "Email wajib diisi!";
      else if (!value.includes('@')) msg = "Format email harus valid (gunakan @)!";
      else if (!value.endsWith('.com')) msg = "Email harus berakhiran .com!";
    }
    if (name === 'telepon') {
      if (!value) msg = "Nomor telepon wajib diisi!";
      else if (isNaN(value)) msg = "Harus berupa angka!";
      else if (value.length < 10) msg = "Minimal 10 digit nomor!";
    }
    return msg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  // Cek apakah form valid & semua field terisi
  const isValid = 
    form.nama && form.email && form.telepon && form.kelas && form.sesi &&
    !errors.nama && !errors.email && !errors.telepon;

  return (
    <div style={{ maxWidth: '450px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ color: '#364A5F' }}>Pendaftaran Kursus IT</h2>
      
      <InputPesan label="Nama Lengkap" name="nama" value={form.nama} onChange={handleChange} error={errors.nama} />
      <InputPesan label="Email" type="email" name="email" value={form.email} onChange={handleChange} error={errors.email} />
      <InputPesan label="Nomor WhatsApp" name="telepon" value={form.telepon} onChange={handleChange} error={errors.telepon} />

      {/* 2 Select Dropdown */}
      <div style={{ marginBottom: '15px' }}>
        <label style={{ fontWeight: 'bold' }}>Pilih Kelas</label>
        <select name="kelas" onChange={handleChange} style={{ width: '100%', padding: '10px', marginTop: '5px' }}>
          <option value="">-- Pilih Program --</option>
          <option value="React Native">Android (React Native)</option>
          <option value="Web Expert">Web Expert</option>
        </select>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ fontWeight: 'bold' }}>Pilih Sesi</label>
        <select name="sesi" onChange={handleChange} style={{ width: '100%', padding: '10px', marginTop: '5px' }}>
          <option value="">-- Pilih Waktu --</option>
          <option value="Pagi">Pagi (09:00 - 12:00)</option>
          <option value="Malam">Malam (19:00 - 21:00)</option>
        </select>
      </div>

      {/* Tombol Submit muncul hanya jika validasi sukses */}
      {isValid && (
        <button 
          onClick={() => setIsSubmitted(true)}
          style={{ width: '100%', padding: '12px', backgroundColor: '#364A5F', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
        >
          Kirim Data Pendaftaran
        </button>
      )}

      {/* Respon Hasil Inputan (Conditional Rendering) */}
      {isSubmitted && (
        <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e7f3ff', borderLeft: '5px solid #364A5F' }}>
          <h4>✅ Pendaftaran Diterima!</h4>
          <p>Terima kasih <b>{form.nama}</b>. Anda telah terdaftar di kelas <b>{form.kelas}</b> untuk sesi <b>{form.sesi}</b>. Kami akan menghubungi email <b>{form.email}</b> segera.</p>
        </div>
      )}
    </div>
  );
};

export default FormKursus;