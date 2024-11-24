import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProfilSiswa.css';

const siswaData = [
  { 
    nama: "Andi Setiawan", 
    foto: "/andi.jpg", 
    prestasi: "Juara 1 Olimpiade Matematika" 
  },
  {
    nama: "Budi Pratama", 
    foto: "/budi.jpg", 
    prestasi: "Juara 2 Lomba Sains" 
  },
  {
    nama: "Siti Nurhaliza", 
    foto: "/siti.jpg", 
    prestasi: "Juara 1 Lomba Seni" 
  },
  // ... data siswa lainnya
];

function ProfilSiswa() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  // Hanya menampilkan 1 slide
    slidesToScroll: 1,
    centerMode: true,  // Mengaktifkan mode tengah
    centerPadding: '20%', // Memberikan padding di sisi kiri dan kanan
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '15%',
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: '10%',
        }
      }
    ]
  };

  return (
    <section id="profil" className="profil">
      <div className="container">
        <h2 className="section-title">
          Profil Siswa Berprestasi
        </h2>
        <Slider {...settings}>
          {siswaData.map((siswa, index) => (
            <div className="profil-card-wrapper" key={index}>
              <div className="profil-card">
                <div className="profil-card-image">
                  <img src={siswa.foto} alt={siswa.nama} />
                </div>
                <div className="profil-card-content">
                  <h3>{siswa.nama}</h3>
                  <p>{siswa.prestasi}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ProfilSiswa;