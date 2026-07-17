import './ParticlesBackground.css'

const PARTICLE_COUNT = 40

/* Deterministic pseudo-random so particles don't jump on re-render */
const seeded = (i, salt) => {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453
  return x - Math.floor(x)
}

const PARTICLES = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
  id: i,
  left: `${(seeded(i, 1) * 100).toFixed(2)}%`,
  top: `${(seeded(i, 2) * 100).toFixed(2)}%`,
  size: `${(2 + seeded(i, 3) * 5).toFixed(1)}px`,
  duration: `${(10 + seeded(i, 4) * 16).toFixed(1)}s`,
  delay: `${(-seeded(i, 5) * 20).toFixed(1)}s`,
  opacity: (0.12 + seeded(i, 6) * 0.35).toFixed(2),
}))

const ParticlesBackground = () => (
  <div className="sf-particles" aria-hidden="true">
    {PARTICLES.map((p) => (
      <span
        key={p.id}
        className="sf-particles__dot"
        style={{
          left: p.left,
          top: p.top,
          width: p.size,
          height: p.size,
          opacity: p.opacity,
          animationDuration: p.duration,
          animationDelay: p.delay,
        }}
      />
    ))}
  </div>
)

export default ParticlesBackground
