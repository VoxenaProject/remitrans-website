"use client"

export default function HeroVideo() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <iframe
        src="https://www.youtube.com/embed/bct5gzxuM8c?autoplay=1&mute=1&loop=1&playlist=bct5gzxuM8c&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&iv_load_policy=3&cc_load_policy=0"
        className="absolute pointer-events-none"
        style={{
          width: "177.78vh",
          height: "100vh",
          minWidth: "100%",
          minHeight: "56.25vw",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        allow="autoplay; encrypted-media"
        allowFullScreen={false}
        frameBorder="0"
        title="Remitrans vloot"
      />
    </div>
  )
}
