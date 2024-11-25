import React, { useState } from 'react';
import './Kontak.css';
import { FaInstagram, FaEnvelope, FaTiktok, FaSpotify } from 'react-icons/fa';

function Kontak() {
  const [showPlaylists, setShowPlaylists] = useState(false);

  const spotifyPlaylists = [
    {
      id: 1,
      name: "Kelas 9B Hits",
      description: "Lagu-lagu favorit anak kelas 9B",
      embedUrl: "https://open.spotify.com/embed/playlist/4HzF1xVF5VCCsmA4D03BpZ?si=2yJf74D_TPGmbN9FdNRgzQ"
    },
  ];

  return (
    <section id="kontak" className="kontak">
      <div className="kontak-container">
        <h2>  Sosial Media</h2>
        
        <div className="sosial-media-section">
          <h3>Temukan Kami</h3>
          <div className="social-links">
            <a 
              href="https://instagram.com/crofeb_ofc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-wrapper"
            >
              <FaInstagram className="social-icon instagram" />
              <span>Instagram</span>
            </a>
            
            <a 
              href="https://tiktok.com/@crofe_b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-wrapper"
            >
              <FaTiktok className="social-icon tiktok" />
              <span>TikTok</span>
            </a>
            
            <a 
              href="mailto:waannz987@gmail.com"
              className="social-icon-wrapper"
            >
              <FaEnvelope className="social-icon email" />
              <span>Email</span>
            </a>
            
            <div 
              className="social-icon-wrapper"
              onClick={() => setShowPlaylists(!showPlaylists)}
              style={{ cursor: 'pointer' }}
            >
              <FaSpotify className="social-icon spotify" />
              <span>Spotify Playlist</span>
            </div>
          </div>
        </div>

        {/* Tampilkan Playlist di bawah kontak jika showPlaylists true */}
        {showPlaylists && (
          <div className="spotify-playlists">
            <h3>Spotify Playlists</h3>
            {spotifyPlaylists.map(playlist => (
              <div key={playlist.id} className="playlist-item">
                <h4>{playlist.name}</h4>
                <p>{playlist.description}</p>
                <iframe 
                  src={playlist.embedUrl} 
                  width="300" 
                  height="380" 
                  frameBorder="0" 
                  allowTransparency="true" 
                  allow="encrypted-media"
                  title={playlist.name}
                ></iframe>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Kontak;