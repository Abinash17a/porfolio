"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Volume2, VolumeX, Music } from "lucide-react"

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.loop = true
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="bg-white/90 backdrop-blur-sm border-2 border-gray-300 rounded-lg p-3 shadow-lg"
      >
        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          src="/sounds/japanese-ambient.mp3"
          preload="auto"
        />

        <div className="flex items-center gap-3">
          {/* Play/Pause Button */}
          <motion.button
            onClick={togglePlay}
            className="bg-[#d4a856] text-slate-950 p-2 rounded border border-[#f5c96a] hover:bg-[#f5c96a] transition-colors"
            style={{ boxShadow: '0 8px 18px rgba(212, 168, 86, 0.2)' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Music className="w-4 h-4" />
          </motion.button>

          {/* Mute Button */}
          <motion.button
            onClick={toggleMute}
            className={`p-2 rounded border transition-colors ${
              isMuted
                ? 'bg-slate-800 text-white border-slate-600 hover:bg-slate-700'
                : 'bg-[#7dd3fc] text-slate-950 border-[#bae6fd] hover:bg-[#bae6fd]'
            }`}
            style={{ boxShadow: '2px 2px 0px #fff' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </motion.button>

          {/* Volume Slider */}
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-16 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${volume * 100}%, #E5E7EB ${volume * 100}%, #E5E7EB 100%)`
              }}
            />
          </div>

          {/* Status Text */}
          <span className="text-xs text-gray-600 whitespace-nowrap">
            {isPlaying ? 'PLAYING' : 'PAUSED'}
          </span>
        </div>
      </motion.div>
    </div>
  )
}

export default BackgroundMusic