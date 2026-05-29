import React from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300">
      <div className="relative w-full max-w-4xl bg-rsiDark-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="relative aspect-video w-full bg-black">
          {/* HTML5 video player playing local MP4 file */}
          <video 
            className="absolute inset-0 w-full h-full"
            src="/videoretrospectiva.mp4"
            controls
            autoPlay
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
}
