import React from 'react';
import './StrukturKelas.css';

const strukturData = [
  {
    jabatan: "Wali Kelas",
    nama: "Ibu Sri Wahyuni, S.Pd",
    foto: "/path/to/wali-kelas.jpg"
  },
  {
    jabatan: "Ketua Kelas",
    nama: "Andi Setiawan",
    foto: "/path/to/ketua-kelas.jpg"
  },
  {
    jabatan: "Wakil Ketua",
    nama: "Budi Pratama",
    foto: "/path/to/wakil-ketua.jpg"
  },
  {
    jabatan: "Sekretaris",
    nama: "Siti Nurhaliza",
    foto: "/path/to/sekretaris.jpg"
  },
  {
    jabatan: "Bendahara",
    nama: "Rini Oktavia",
    foto: "/path/to/bendahara.jpg"
  }
];

function StrukturKelas() {
  return (
    <section id="struktur" className="struktur-kelas">
      <div className="container">
        <h2 style={{textAlign: 'center', marginBottom: '50px'}}>
          Struktur Organisasi Kelas
        </h2>
        <div className="struktur-grid">
          {strukturData.map((anggota, index) => (
            <div key={index} className="struktur-card">
              <div className="struktur-card-inner">
                <div className="struktur-card-front">
                  <img src={anggota.foto} alt={anggota.nama} />
                </div>
                <div className="struktur-card-back">
                  <h3>{anggota.nama}</h3>
                  <p>{anggota.jabatan}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StrukturKelas;