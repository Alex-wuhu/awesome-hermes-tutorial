import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import CodeBlock from '../components/CodeBlock'
import Step from '../components/Step'
import './NovitaGuidePage.css'

export default function NovitaGuidePage() {
  return (
    <>
      <PageHero
        tag="Workshop Guide"
        title="Build Your First Hermes Agent with Novita AI"
        subtitle="A 40-minute hands-on workshop — from zero to a working AI agent"
      >
        <div className="hero-actions">
          <a href="#agenda" className="hero-btn hero-btn--primary">View Agenda</a>
          <a href="#hands-on-1" className="hero-btn hero-btn--secondary">Jump to Hands-on</a>
        </div>
      </PageHero>

      {/* ── Agenda Overview ── */}
      <section className="section" id="agenda">
        <div className="section-inner">
          <span className="section-tag">Agenda</span>
          <h2>Workshop Timeline</h2>
          <p className="section-lead">
            Everything you need to go from zero to a fully functional Hermes agent
            powered by Novita AI in under 40 minutes.
          </p>

          <div className="agenda-grid">
            <a href="#intro" className="agenda-item">
              <div className="agenda-time">2 min</div>
              <div className="agenda-content">
                <h4>Introduction</h4>
                <p>Welcome & today's agenda</p>
              </div>
            </a>
            <a href="#novita-ai" className="agenda-item">
              <div className="agenda-time">1 min</div>
              <div className="agenda-content">
                <h4>Novita AI Platform</h4>
                <p>Model API, Sandbox & GPU Instances</p>
              </div>
            </a>
            <a href="#hermes-overview" className="agenda-item">
              <div className="agenda-time">1 min</div>
              <div className="agenda-content">
                <h4>Hermes Agent Overview</h4>
                <p>Self-improving, memory, 40+ tools</p>
              </div>
            </a>
            <a href="#hands-on-1" className="agenda-item agenda-item--highlight">
              <div className="agenda-time">10 min</div>
              <div className="agenda-content">
                <h4>Hands-on: Launch Your First Agent</h4>
                <p>Step-by-step setup with GLM-5.1</p>
              </div>
            </a>
            <a href="#hands-on-2" className="agenda-item agenda-item--highlight">
              <div className="agenda-time">20 min</div>
              <div className="agenda-content">
                <h4>Hands-on: Build Your Use Case</h4>
                <p>Email manager & marketing assistant</p>
              </div>
            </a>
            <a href="#share" className="agenda-item">
              <div className="agenda-time">5 min</div>
              <div className="agenda-content">
                <h4>Share & Wrap-up</h4>
                <p>Share your build on X or Discord</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="section" id="intro">
        <div className="section-inner">
          <span className="section-tag">2 min</span>
          <h2>Introduction</h2>
          <p className="section-lead">
            Welcome to the workshop! Here's what we'll cover today.
          </p>
          <div className="info-cards">
            <div className="info-card">
              <div className="info-card-icon">👋</div>
              <h4>Self Introduction</h4>
              <p>Meet your workshop host</p>
            </div>
            <div className="info-card">
              <div className="info-card-icon">📋</div>
              <h4>Today's Agenda</h4>
              <p>40 mins from setup to a working agent</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Novita AI Platform ── */}
      <section className="section" id="novita-ai">
        <div className="section-inner">
          <span className="section-tag">1 min</span>
          <h2>Novita AI Platform</h2>
          <p className="section-lead">
            An all-in-one AI infrastructure provider — models, compute, and sandboxes.
          </p>

          <div className="platform-cards">
            <div className="platform-card">
              <div className="platform-card-badge">API</div>
              <h4>Model API</h4>
              <p>OpenAI-compatible inference with 200+ models including GLM, DeepSeek, Qwen, Llama and more.</p>
              <a href="https://novita.ai/model-api" target="_blank" rel="noopener noreferrer" className="platform-link">
                Explore Models →
              </a>
            </div>
            <div className="platform-card">
              <div className="platform-card-badge">Compute</div>
              <h4>Sandbox</h4>
              <p>Cloud dev environments with pre-configured AI toolchains — ready in seconds.</p>
              <a href="https://novita.ai/sandbox" target="_blank" rel="noopener noreferrer" className="platform-link">
                Try Sandbox →
              </a>
            </div>
            <div className="platform-card">
              <div className="platform-card-badge">GPU</div>
              <h4>GPU Instances</h4>
              <p>On-demand GPU compute for training, fine-tuning, and running models at scale.</p>
              <a href="https://novita.ai/gpu-instance" target="_blank" rel="noopener noreferrer" className="platform-link">
                View GPUs →
              </a>
            </div>
          </div>

          <figure className="section-screenshot">
            <img src="/images/Novita-web.png" alt="Novita AI platform dashboard" />
          </figure>
        </div>
      </section>

      {/* ── Hermes Agent Overview ── */}
      <section className="section" id="hermes-overview">
        <div className="section-inner">
          <span className="section-tag">1 min</span>
          <h2>Hermes Agent Highlights</h2>
          <p className="section-lead">
            A quick look at the key capabilities we'll leverage today.
            <Link to="/" className="section-link" style={{ display: 'inline', marginLeft: 8 }}>
              Full intro →
            </Link>
          </p>

          <div className="feature-grid">
            <div className="feature-item">
              <span className="feature-icon">🔄</span>
              <div>
                <h4>Self-Improving</h4>
                <p>Learns from interactions and adapts over time</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🧠</span>
              <div>
                <h4>Memory System</h4>
                <p>Persistent context across conversations</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🛠️</span>
              <div>
                <h4>40+ Built-in Tools</h4>
                <p>File ops, web browsing, code execution & more</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌐</span>
              <div>
                <h4>Browser Skills</h4>
                <p>Navigate, extract, interact with web pages</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hands-on 1: Launch Your First Agent ── */}
      <section className="section section--accent" id="hands-on-1">
        <div className="section-inner">
          <span className="section-tag">10 min · Hands-on</span>
          <h2>Launch Your First Agent</h2>
          <p className="section-lead">
            Follow along step by step to get Hermes running with Novita AI's GLM-5.1 model.
          </p>

          <div className="steps">
            <Step number={1} title="Get Your Novita AI API Key">
              <p>
                Sign up at{' '}
                <a href="https://novita.ai" target="_blank" rel="noopener noreferrer">
                  novita.ai
                </a>{' '}
                and create an API key from your dashboard.
              </p>
              <figure className="step-screenshot">
                <img src="/images/novita-get-api-key-3.webp" alt="Novita AI API key dashboard" />
              </figure>
            </Step>

            <Step number={2} title="Run Hermes Setup">
              <p>Launch the setup wizard and choose a custom endpoint:</p>
              <CodeBlock language="shell" code="hermes setup" />
              <figure className="step-screenshot">
                <img src="/images/setup1-chose-custom-endpoint.png" alt="Choose custom endpoint" />
              </figure>
            </Step>

            <Step number={3} title="Configure Novita Endpoint">
              <p>Enter the following when prompted:</p>
              <CodeBlock
                language="text"
                code={`API base URL:   https://api.novita.ai/openai
Model name:     zai-org/glm-5.1
Context length: 204800`}
              />
              <figure className="step-screenshot">
                <img src="/images/setup2-choose-modelname-context.png" alt="Configure model and context" />
              </figure>
            </Step>

            <Step number={4} title="Verify & Start Chatting">
              <p>Start Hermes and confirm it responds:</p>
              <CodeBlock language="bash" code="hermes" />
              <figure className="step-screenshot">
                <img src="/images/start-conversation.png" alt="First conversation with Hermes" />
              </figure>
            </Step>

            <Step number={5} title="Connect a Messaging Channel" last>
              <p>
                Hermes supports Discord, Slack, and Telegram. Here's a quick Telegram example:
              </p>
              <CodeBlock
                language="bash"
                code={`# In your Hermes config, add Telegram bot token
hermes setup --channel telegram`}
              />
              <p className="step-note">
                See the{' '}
                <a href="https://github.com/lachiefish/hermes" target="_blank" rel="noopener noreferrer">
                  Hermes docs
                </a>{' '}
                for Discord and Slack setup guides.
              </p>
            </Step>
          </div>
        </div>
      </section>

      {/* ── Hands-on 2: Build Your Use Case ── */}
      <section className="section section--accent" id="hands-on-2">
        <div className="section-inner">
          <span className="section-tag">20 min · Hands-on</span>
          <h2>Build Your Own Use Case</h2>
          <p className="section-lead">
            Choose one (or both!) of these real-world use cases to build with your agent.
          </p>

          <div className="usecase-cards">
            <Link to="/email-agent" className="usecase-card">
              <span className="usecase-card-badge">Use Case A</span>
              <div className="usecase-card-icon">📧</div>
              <h3>Email Manager</h3>
              <p>
                Automate your email workflow with AI-powered triage and responses.
                Uses Himalaya (built-in) + Google CLI (extra chapter).
              </p>
              <span className="usecase-card-link">Start building →</span>
            </Link>

            <Link to="/marketing-agent" className="usecase-card">
              <span className="usecase-card-badge">Use Case B</span>
              <div className="usecase-card-icon">📝</div>
              <h3>Content / Marketing Assistant</h3>
              <p>
                Create a specialized agent for content creation and marketing.
                Assign a soul.md and add popular marketing skills.
              </p>
              <span className="usecase-card-link">Start building →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Share ── */}
      <section className="section" id="share">
        <div className="section-inner">
          <span className="section-tag">5 min</span>
          <h2>Share Your Build</h2>
          <p className="section-lead">
            Built something cool? Share it with the community!
          </p>

          <div className="share-options">
            <a
              href="https://twitter.com/intent/tweet?text=Just%20built%20my%20first%20Hermes%20AI%20agent%20powered%20by%20%40novaborz!%20🤖"
              target="_blank"
              rel="noopener noreferrer"
              className="share-card"
            >
              <span className="share-icon">𝕏</span>
              <h4>Share on X</h4>
              <p>Post about your agent with a screenshot</p>
            </a>
            <a
              href="https://discord.gg/novitaai"
              target="_blank"
              rel="noopener noreferrer"
              className="share-card"
            >
              <span className="share-icon">💬</span>
              <h4>Join Discord</h4>
              <p>Show your build in the community channel</p>
            </a>
          </div>
        </div>
      </section>

      {/* ── Quick Links Footer ── */}
      <section className="section section--links">
        <div className="section-inner">
          <h3>Quick Links</h3>
          <div className="quick-links">
            <a href="https://novita.ai" target="_blank" rel="noopener noreferrer">Novita AI</a>
            <a href="https://github.com/lachiefish/hermes" target="_blank" rel="noopener noreferrer">Hermes GitHub</a>
            <Link to="/">Tutorial Home</Link>
            <Link to="/event">Upcoming Event</Link>
          </div>
        </div>
      </section>
    </>
  )
}
