import React from 'react';
import './SpotifyPlaylistModal.css';

function SpotifyPlaylistModal({ playlists, onClose }) {
  return (
    <div className="spotify-modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <h2>Spotify Playlists</h2>
 {playlists.map(playlist => (
          <div key={playlist.id} className="playlist-item">
            <h3>{playlist.name}</h3>
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
    </div>
  );
}

export default SpotifyPlaylistModal;