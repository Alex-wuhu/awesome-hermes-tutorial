import { useEffect, useRef, useState, useCallback } from 'react'
import Reveal from 'reveal.js'
import 'reveal.js/reveal.css'
import 'reveal.js/theme/white.css'
import './NovitaSlidesPage.css'

const TOC_ITEMS = [
  { label: 'Title' },
  { label: 'Agenda' },
  { label: 'Novita AI' },
  { label: 'Hermes' },
  { label: 'Steps 1–2' },
  { label: 'Steps 3–4' },
  { label: 'Discord Setup' },
  { label: 'Discord (a–c)' },
  { label: 'Discord (d–f)' },
  { label: 'Your Server' },
  { label: 'Verify' },
  { label: 'Wrap-up' },
]

function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="slide-lightbox" onClick={onClose}>
      <button type="button" className="slide-lightbox-close" onClick={onClose}>✕</button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  )
}

function SlideCode({ code, language = 'bash' }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(code) } catch {
      const ta = document.createElement('textarea')
      ta.value = code; ta.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(ta); ta.select()
      document.execCommand('copy'); document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="slide-code">
      <div className="slide-code-header">
        <span className="slide-code-lang">{language}</span>
        <button type="button" className="slide-code-copy" onClick={handleCopy}>
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  )
}

function ConfigRow({ label, value, placeholder = false }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = async () => {
    try { await navigator.clipboard.writeText(value) } catch {
      const ta = document.createElement('textarea')
      ta.value = value; ta.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(ta); ta.select()
      document.execCommand('copy'); document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }
  return (
    <div className="slide-config-row">
      <span className="slide-config-label">{label}</span>
      <div className={`slide-config-value${placeholder ? ' is-placeholder' : ''}`}>
        <code>{value}</code>
        {!placeholder && (
          <button type="button" className="slide-config-copy" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
    </div>
  )
}

function SlideToc({ currentIndex, onJump }) {
  return (
    <nav className="slides-toc">
      <a href="/" className="slides-toc-home">← Home</a>
      <ul>
        {TOC_ITEMS.map((item, i) => (
          <li key={i}>
            <button
              type="button"
              className={`slides-toc-item${i === currentIndex ? ' is-active' : ''}`}
              onClick={() => onJump(i)}
            >
              <span className="slides-toc-dot" />
              <span className="slides-toc-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function ClickableImg({ src, alt, onOpen }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ cursor: 'zoom-in' }}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onOpen(src, alt) }}
    />
  )
}

export default function NovitaSlidesPage() {
  const deckRef = useRef(null)
  const revealRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = useCallback((src, alt) => setLightbox({ src, alt }), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  const handleJump = useCallback((index) => {
    if (revealRef.current) revealRef.current.slide(index)
  }, [])

  useEffect(() => {
    if (!deckRef.current || revealRef.current) return
    const deck = new Reveal(deckRef.current, {
      hash: true,
      slideNumber: false,
      transition: 'slide',
      width: 1060,
      height: 700,
      margin: 0.04,
      center: false,
      progress: true,
      controls: false,
    })
    deck.initialize()
    deck.on('slidechanged', (e) => setCurrentSlide(e.indexh))
    revealRef.current = deck
    return () => {
      try { deck.destroy() } catch { /* reveal.js may already be destroyed */ }
      revealRef.current = null
    }
  }, [])

  return (
    <div className="slides-wrapper">
      <div className="slides-main">
        <div className="reveal" ref={deckRef}>
          <div className="slides">

            {/* ─── 1. Title ─── */}
            <section className="slide-title">
              <span className="slide-tag">Workshop Guide</span>
              <h1>Build Your First Hermes Agent<br />with Novita AI</h1>
              <p className="slide-subtitle">
                A 40-minute hands-on workshop — from zero to a working AI agent
              </p>
            </section>

            {/* ─── 2. Agenda ─── */}
            <section>
              <span className="slide-tag">Agenda</span>
              <h2>Workshop Timeline</h2>
              <p>From zero to a fully functional Hermes agent in 40 minutes.</p>

              <div className="slide-agenda">
                <div className="slide-agenda-item">
                  <span className="slide-agenda-time">2 min</span>
                  <div className="slide-agenda-text">
                    <h4>👋 Introduction</h4>
                    <p>Welcome &amp; today's agenda</p>
                  </div>
                </div>
                <div className="slide-agenda-item">
                  <span className="slide-agenda-time">1 min</span>
                  <div className="slide-agenda-text">
                    <h4>Novita AI Platform</h4>
                    <p>Model API, Sandbox &amp; GPU Instances</p>
                  </div>
                </div>
                <div className="slide-agenda-item">
                  <span className="slide-agenda-time">1 min</span>
                  <div className="slide-agenda-text">
                    <h4>Hermes Agent Overview</h4>
                    <p>Self-improving, memory, 40+ tools</p>
                  </div>
                </div>
                <div className="slide-agenda-item slide-agenda-item--highlight">
                  <span className="slide-agenda-time">10 min</span>
                  <div className="slide-agenda-text">
                    <h4>🛠️ Hands-on: Launch Agent</h4>
                    <p>Step-by-step setup with GLM-5.1</p>
                  </div>
                </div>
                <div className="slide-agenda-item slide-agenda-item--highlight">
                  <span className="slide-agenda-time">20 min</span>
                  <div className="slide-agenda-text">
                    <h4>🛠️ Hands-on: Build Use Case</h4>
                    <p>Email manager &amp; marketing assistant</p>
                  </div>
                </div>
                <div className="slide-agenda-item">
                  <span className="slide-agenda-time">5 min</span>
                  <div className="slide-agenda-text">
                    <h4>Share &amp; Wrap-up</h4>
                    <p>Share your build on X or Discord</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── 3. Novita AI Platform ─── */}
            <section>
              <span className="slide-tag">1 min</span>
              <h2>Novita AI Platform</h2>
              <p>An all-in-one AI infrastructure provider — models, compute, and sandboxes.</p>

              <div className="slide-two-col" style={{ gap: 20 }}>
                <div>
                  <div className="slide-cards-compact">
                    <div className="slide-card-h">
                      <div className="slide-card-badge">API</div>
                      <div>
                        <h4>Model API</h4>
                        <p>OpenAI-compatible, 200+ models (GLM, DeepSeek, Qwen, Llama…)</p>
                      </div>
                    </div>
                    <div className="slide-card-h">
                      <div className="slide-card-badge">Compute</div>
                      <div>
                        <h4>Sandbox</h4>
                        <p>Cloud dev environments with pre-configured AI toolchains</p>
                      </div>
                    </div>
                    <div className="slide-card-h">
                      <div className="slide-card-badge">GPU</div>
                      <div>
                        <h4>GPU Instances</h4>
                        <p>On-demand GPU for training, fine-tuning, and inference at scale</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slide-screenshot slide-screenshot--fill">
                  <ClickableImg src="/images/Novita-web.png" alt="Novita AI platform dashboard" onOpen={openLightbox} />
                </div>
              </div>
            </section>

            {/* ─── 4. Hermes Highlights ─── */}
            <section>
              <span className="slide-tag">1 min</span>
              <h2>Hermes Agent Highlights</h2>
              <p>Key capabilities we'll leverage today.</p>

              <div className="slide-cards slide-cards--4">
                <div className="slide-feature">
                  <span className="slide-feature-icon">🔄</span>
                  <div><h4>Self-Improving</h4><p>Learns from interactions and adapts over time</p></div>
                </div>
                <div className="slide-feature">
                  <span className="slide-feature-icon">🧠</span>
                  <div><h4>Memory System</h4><p>Persistent context across conversations</p></div>
                </div>
                <div className="slide-feature">
                  <span className="slide-feature-icon">🛠️</span>
                  <div><h4>40+ Built-in Tools</h4><p>File ops, web browsing, code execution &amp; more</p></div>
                </div>
                <div className="slide-feature">
                  <span className="slide-feature-icon">🌐</span>
                  <div><h4>Browser Skills</h4><p>Navigate, extract, interact with web pages</p></div>
                </div>
              </div>
            </section>

            {/* ─── 5. Steps 1–2 ─── */}
            <section>
              <span className="slide-tag">10 min · Hands-on</span>

              <div className="slide-step-section">
                <div className="slide-step-header">
                  <span className="slide-step-num">1</span>
                  <h3>Install Hermes Agent</h3>
                </div>
                <div className="slide-two-col slide-two-col--text-img">
                  <div>
                    <p>One-liner installer — Linux, macOS, WSL2.</p>
                    <SlideCode language="bash" code={`curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc && hermes --version`} />
                  </div>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/hermes-version.png" alt="hermes --version output" onOpen={openLightbox} />
                  </div>
                </div>
              </div>

              <div className="slide-divider" />

              <div className="slide-step-section">
                <div className="slide-step-header">
                  <span className="slide-step-num">2</span>
                  <h3>Get Your Novita AI API Key</h3>
                </div>
                <div className="slide-two-col slide-two-col--text-img">
                  <p>Sign up at <a href="https://novita.ai" target="_blank" rel="noopener noreferrer">novita.ai</a> → Dashboard → Create API key.</p>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/novita-get-api-key-3.webp" alt="Novita AI API key dashboard" onOpen={openLightbox} />
                  </div>
                </div>
              </div>
            </section>

            {/* ─── 6. Steps 3–4 ─── */}
            <section>
              <div className="slide-step-section">
                <div className="slide-step-header">
                  <span className="slide-step-num">3</span>
                  <h3>Run Hermes Setup</h3>
                </div>
                <div className="slide-two-col slide-two-col--text-img">
                  <div>
                    <p>Launch the setup wizard, choose custom endpoint:</p>
                    <SlideCode language="shell" code="hermes setup" />
                  </div>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup1-choose-custom-endpoint.png" alt="Choose custom endpoint" onOpen={openLightbox} />
                  </div>
                </div>
              </div>

              <div className="slide-divider" />

              <div className="slide-step-section">
                <div className="slide-step-header">
                  <span className="slide-step-num">4</span>
                  <h3>Configure Novita Endpoint</h3>
                </div>
                <p className="text-primary" style={{ margin: '0 0 6px' }}>Paste each value when prompted — <strong>API Key</strong> is the only one unique to you:</p>
                <div className="slide-config">
                  <ConfigRow label="API base URL:" value="https://api.novita.ai/openai" />
                  <ConfigRow label="API Key:" value="YOUR-OWN-KEY" placeholder />
                  <ConfigRow label="Model name:" value="zai-org/glm-5.1" />
                  <ConfigRow label="Context length:" value="204800" />
                  <ConfigRow label="Display name:" value="NovitaAI" />
                </div>
              </div>
            </section>

            {/* ─── 7. Select Discord as Message Channel ─── */}
            <section>
              <div className="slide-step-header">
                <span className="slide-step-num">5</span>
                <h2>Connect Discord</h2>
              </div>
              <p>Hermes supports Discord, Slack, and Telegram — for today's workshop we'll all use <strong>Discord</strong> so everyone lands in the same playground.</p>
              <p>When the setup wizard asks for a messaging platform, pick <strong>Discord</strong>:</p>

              <div className="slide-screenshot" style={{ marginTop: 12 }}>
                <ClickableImg src="/images/setup-discord/01-select-discord.png" alt="Select Discord as the messaging platform in Hermes" onOpen={openLightbox} />
              </div>

              <div className="slide-tip slide-tip--compact">
                <h4>💡 Tips</h4>
                <p>Press <code>Space</code> to select Discord, then press <code>Enter</code> to proceed to the next step.</p>
              </div>
            </section>

            {/* ─── 8. Step 5 a–c ─── */}
            <section>
              <div className="slide-step-header">
                <span className="slide-step-num">5</span>
                <h2>Discord Setup (a–c)</h2>
              </div>

              <div className="slide-three-col">
                <div className="slide-substep-card">
                  <h4 className="slide-substep">5a · Create App</h4>
                  <p>
                    <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer">Developer Portal</a>{' '}
                    → <strong>New Application</strong><br />
                    Name it "Hermes Agent" → <strong>Create</strong>
                  </p>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup-discord/02-create-discord-app.png" alt="Create Discord app" onOpen={openLightbox} />
                  </div>
                </div>

                <div className="slide-substep-card">
                  <h4 className="slide-substep">5b · Enable Intents</h4>
                  <p><strong>Bot</strong> tab → Privileged Gateway Intents:</p>
                  <ul className="slide-list">
                    <li><strong>Server Members Intent</strong></li>
                    <li><strong>Message Content Intent</strong></li>
                  </ul>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup-discord/03-choose-bot-permission.png" alt="Gateway Intents" onOpen={openLightbox} />
                  </div>
                </div>

                <div className="slide-substep-card">
                  <h4 className="slide-substep">5c · Copy Bot Token</h4>
                  <p>
                    <strong>Bot</strong> tab → <strong>Reset Token</strong><br />
                    Copy immediately — Discord only shows it once. Treat it like a password.
                  </p>
                  <div className="slide-tip slide-tip--compact">
                    <p>⚠️ If you lose the token, you'll need to reset it again.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── 9. Step 5 d–f ─── */}
            <section>
              <div className="slide-step-header">
                <span className="slide-step-num">5</span>
                <h2>Discord Setup (d–f)</h2>
              </div>

              <div className="slide-three-col">
                <div className="slide-substep-card">
                  <h4 className="slide-substep">5d · Invite Bot</h4>
                  <p><strong>Installation</strong> tab → <strong>Guild Install</strong></p>
                  <div className="slide-mini-table">
                    <div><strong>Scopes</strong></div>
                    <div><code>bot</code>, <code>applications.commands</code></div>
                    <div><strong>Permissions</strong></div>
                    <div>View Channels, Send Messages, Embed Links, Attach Files, Read History</div>
                  </div>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup-discord/install your-app-on-your-sever.png" alt="Install bot" onOpen={openLightbox} />
                  </div>
                </div>

                <div className="slide-substep-card">
                  <h4 className="slide-substep">5e · Find User ID</h4>
                  <p>
                    Discord → <strong>Settings</strong> → <strong>Advanced</strong><br />
                    → Turn on <strong>Developer Mode</strong>
                  </p>
                  <p>Right-click your username → <strong>Copy User ID</strong></p>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup-discord/copy-your-userID.png" alt="Copy User ID" onOpen={openLightbox} />
                  </div>
                </div>

                <div className="slide-substep-card">
                  <h4 className="slide-substep">5f · Paste into Hermes</h4>
                  <p>
                    Back in the setup wizard, paste:<br />
                    • <strong>Bot Token</strong><br />
                    • <strong>User ID</strong>
                  </p>
                  <p>Hermes writes them to <code>~/.hermes/.env</code></p>
                  <div className="slide-screenshot">
                    <ClickableImg src="/images/setup-discord/set-up-finished.png" alt="Setup finished" onOpen={openLightbox} />
                  </div>
                </div>
              </div>
            </section>

            {/* ─── 10. Create Your Server ─── */}
            <section>
              <div className="slide-step-header">
                <span className="slide-step-num">5</span>
                <h2>Create Your Discord Server</h2>
              </div>
              <p>Before starting Hermes, make sure you have your <strong>own Discord server</strong> ready for the bot to join.</p>

              <div className="slide-two-col" style={{ gap: 24 }}>
                <div>
                  <h3>Quick Steps</h3>
                  <ul className="slide-list" style={{ fontSize: '0.72em' }}>
                    <li>Open Discord → click the <strong>+</strong> button in the server sidebar</li>
                    <li>Choose <strong>"Create My Own"</strong> → name your server (e.g. "Hermes Workshop")</li>
                    <li>Go back to the <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer">Developer Portal</a> → your app → <strong>Installation</strong> tab</li>
                    <li>Click the <strong>install link</strong> and select your new server to invite the bot</li>
                    <li>Confirm the bot appears in your server's member list</li>
                  </ul>

                  <div className="slide-tip slide-tip--compact">
                    <h4>💡 Why your own server?</h4>
                    <p>Your Hermes agent needs a server where it has the right permissions. A personal server gives you full control to test and experiment.</p>
                  </div>
                </div>
                <div className="slide-screenshot slide-screenshot--fill">
                  <ClickableImg src="/images/setup-discord/install your-app-on-your-sever.png" alt="Invite bot to your server" onOpen={openLightbox} />
                </div>
              </div>
            </section>

            {/* ─── 11. Step 6 + Pro Tip ─── */}
            <section>
              <div className="slide-step-header">
                <span className="slide-step-num">6</span>
                <h2>Verify Gateway Status</h2>
              </div>

              <div className="slide-two-col" style={{ gap: 24 }}>
                <div>
                  <p>Start the Hermes gateway and confirm it's running:</p>
                  <SlideCode language="bash" code="hermes gateway status" />
                  <p>You should see the gateway service listed as <strong>active / running</strong>. If everything is green, your agent is ready to go — head to your Discord server and start chatting!</p>
                  <div className="slide-tip">
                    <h4>💡 Pro tip — skip the @mention</h4>
                    <p>Send this message in your Discord channel:</p>
                    <SlideCode language="text" code="Can you set the config that I don't need to ping you and you can still answer me" />
                    <p>Then restart <code>hermes</code>. No <code>@</code> needed from now on.</p>
                  </div>
                </div>
                <div className="slide-screenshot slide-screenshot--fill">
                  <ClickableImg src="/images/gateway status .png" alt="hermes gateway status showing active" onOpen={openLightbox} />
                </div>
              </div>
            </section>

            {/* ─── 12. Use Cases + Share ─── */}
            <section>
              <span className="slide-tag">20 min · Hands-on</span>
              <h2>Build Your Use Case</h2>

              <div className="slide-two-col" style={{ gap: 16, marginBottom: 20 }}>
                <a href="/email-agent" target="_blank" rel="noopener noreferrer" className="slide-usecase">
                  <div className="slide-usecase-top">
                    <span className="slide-usecase-badge">Use Case A</span>
                    <span className="slide-usecase-icon">📧</span>
                  </div>
                  <h3>Email Manager</h3>
                  <p>AI-powered email triage &amp; responses using Himalaya (built-in) + Google CLI.</p>
                  <span className="slide-usecase-link">Start building →</span>
                </a>
                <a href="/marketing-agent" target="_blank" rel="noopener noreferrer" className="slide-usecase">
                  <div className="slide-usecase-top">
                    <span className="slide-usecase-badge">Use Case B</span>
                    <span className="slide-usecase-icon">📝</span>
                  </div>
                  <h3>Marketing Assistant</h3>
                  <p>Content creation agent with soul.md &amp; popular marketing skills.</p>
                  <span className="slide-usecase-link">Start building →</span>
                </a>
              </div>

              <div className="slide-share-cta">
                <div className="slide-share-cta-icon">🎉</div>
                <h3>Share Your Agent &amp; Earn Extra Credits</h3>

                <div className="slide-share-channels">
                  <div className="slide-share-channel">
                    <h4>💬 Discord</h4>
                    <p>Join our server and post a screenshot of your agent in <code>#built-on-novita</code> to receive <strong>extra Novita AI credits</strong>.</p>
                    <a href="https://discord.gg/dTVYXBvMP6" target="_blank" rel="noopener noreferrer" className="slide-share-btn slide-share-btn--discord">
                      Join Discord
                    </a>
                  </div>

                  <div className="slide-share-channel-divider" />

                  <div className="slide-share-channel">
                    <h4>𝕏 Twitter / X</h4>
                    <p>Screenshot your agent in action, follow <strong>@novita_labs</strong>, then hit share — the tweet is pre-filled for you.</p>
                    <div className="slide-share-cta-actions">
                      <a href="https://x.com/intent/follow?screen_name=novita_labs" target="_blank" rel="noopener noreferrer" className="slide-share-btn slide-share-btn--x">
                        Follow @novita_labs
                      </a>
                      <a href="https://twitter.com/intent/tweet?text=Just%20built%20my%20first%20Hermes%20AI%20agent%20powered%20by%20%40novita_labs!%20%F0%9F%A4%96%0A%0A%23BuiltOnNovita" target="_blank" rel="noopener noreferrer" className="slide-share-btn slide-share-btn--x-share">
                        Post on X
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>

      <SlideToc currentIndex={currentSlide} onJump={handleJump} />
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={closeLightbox} />}
    </div>
  )
}
