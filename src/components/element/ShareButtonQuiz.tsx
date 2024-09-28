import React from "react"
import { FaFacebook, FaTwitterSquare } from "react-icons/fa"

interface ShareButtonProps {
  score: number
  className: any
}

const ShareButtonQuiz: React.FC<ShareButtonProps> = ({ score, className }) => {
  const handleShareTwitter = () => {
    const shareText = `I just completed a quiz and scored ${score} points!`
    const shareUrl = window.location.href // URL to share (you can customize this)
    const shareMessage = encodeURIComponent(shareText)
    const twitterUrl = `https://twitter.com/intent/tweet?text=${shareMessage}&url=${encodeURIComponent(shareUrl)}`
    window.open(twitterUrl, "_blank")
  }

  const handleShareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
      "_blank"
    )
  }

  return (
    <div
      className={
        className +
        " flex items-start h-full shadow-lg rounded-lg p-4 mb-4 gap-3"
      }
    >
      <button
        className="relative group bg-blue-500 text-white rounded-full p-2 transition hover:bg-blue-600"
        onClick={handleShareTwitter}
      >
        <FaTwitterSquare />
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded p-1">
          Twitter
        </span>
      </button>
      <button
        className="relative group bg-blue-700 text-white rounded-full p-2 transition hover:bg-blue-800"
        onClick={handleShareFacebook}
      >
        <FaFacebook />
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded p-1">
          Facebook
        </span>
      </button>
    </div>
  )
}

export default ShareButtonQuiz
