import { useEffect, useState, type CSSProperties } from 'react'
import './App.css'

const journeyFlowers = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  depth: index % 3,
  variant: [0, 2, 3][index % 3],
  x: 8 + ((index * 37) % 84),
  y: 8 + ((index * 61) % 78),
  delay: `${(-index * 0.43).toFixed(2)}s`,
}))

const journeyPhrases = [
  'Siempre brillas',
  'Flores para ti',
  'Por siempre',
  'Contigo todo es mejor',
  'Gracias por existir',
  'Un sol para ti',
  'Qué bonito coincidir',
  'Te quiero mucho',
  'Sigue brillando',
  'Aquí siempre hay luz',
]

const phraseVectors = [
  ['-42vw', '-28vh'],
  ['38vw', '-21vh'],
  ['-37vw', '25vh'],
  ['35vw', '28vh'],
  ['-46vw', '-3vh'],
  ['43vw', '5vh'],
  ['-22vw', '-38vh'],
  ['24vw', '39vh'],
  ['-18vw', '38vh'],
  ['21vw', '-39vh'],
]

function App() {
  const [journeyActive, setJourneyActive] = useState(false)
  const [finalActive, setFinalActive] = useState(false)

  const startJourney = () => {
    setFinalActive(false)
    setJourneyActive(true)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFinalActive(false)
        setJourneyActive(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('journey-is-open', journeyActive)
    return () => document.body.classList.remove('journey-is-open')
  }, [journeyActive])

  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="stars" aria-hidden="true" />
        <div className="hero__copy" id="top">
          <button className="hero-flower-button" type="button" onClick={startJourney} aria-label="Comenzar el viaje">
            <span className="hero-flower" aria-hidden="true">
              <span className="flower__petals" />
              <span className="flower__center" />
            </span>
          </button>
        </div>
      </section>

      {journeyActive && (
        <section className="journey" aria-label="Viaje por la galaxia de flores">
          <div className="journey__warp" aria-hidden="true" />
          <div className="journey__stars" aria-hidden="true">
            <span className="journey__stars-layer" />
            <span className="journey__stars-layer" />
            <span className="journey__stars-layer" />
            <span className="journey__stars-layer" />
          </div>
          <div className="journey__flowers" aria-hidden="true">
            {journeyFlowers.map((flower) => (
              <div
                className={`journey-flower journey-flower--depth-${flower.depth} journey-flower--variant-${flower.variant}`}
                key={flower.id}
                style={{
                  left: `${flower.x}%`,
                  top: `${flower.y}%`,
                  animationDelay: flower.delay,
                  '--rush-x': `${flower.x - 50}vw`,
                  '--rush-y': `${flower.y - 50}vh`,
                } as CSSProperties}
              >
                <span className="flower__petals" />
                <span className="flower__center" />
              </div>
            ))}
          </div>
          <div className="journey__phrases" aria-live="polite">
            {journeyPhrases.map((phrase, index) => (
              <p
                className={`journey-phrase journey-phrase--${index}`}
                style={{
                  animationDelay: `${index * -0.72}s`,
                  '--rush-x': phraseVectors[index][0],
                  '--rush-y': phraseVectors[index][1],
                } as CSSProperties}
                key={phrase}
              >
                {phrase}
              </p>
            ))}
          </div>
          <div className="journey__arrival">
            <button className="journey__arrival-light" type="button" onClick={() => setFinalActive(true)} aria-label="Abrir mensaje de llegada" />
            <p className="journey__arrival-hint">llegaste · pulsa la luz</p>
          </div>
          <div className="journey__controls">
            <button type="button" onClick={() => { setFinalActive(false); setJourneyActive(false) }}>Salir ×</button>
          </div>
          <p className="journey__speed">fuerza de velocidad <span>••••••••</span></p>
        </section>
      )}
      {finalActive && (
        <section className="finale" aria-labelledby="finale-title">
          <div className="finale__heading">
            <p className="eyebrow">capítulo uno / la llegada</p>
            <h2 id="finale-title">Contigo,<br /><i>todo es mejor.</i></h2>
          </div>
          <div className="finale__message">
            <p>Hay lugares que no aparecen en ningún mapa. Este se encuentra entre una sonrisa, una flor y todo lo que todavía falta por descubrir.</p>
            <span>— siempre tuyo, el jardín del espacio</span>
          </div>
          <div className="finale__flower" aria-hidden="true"><span className="flower__petals" /><span className="flower__center" /><span className="flower__stem" /></div>
        </section>
      )}
    </main>
  )
}

export default App
