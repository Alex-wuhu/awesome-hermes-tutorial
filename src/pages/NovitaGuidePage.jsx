import { useState } from 'react'
import { Link } from 'react-router'
import PageHero from '../components/PageHero'
import CodeBlock from '../components/CodeBlock'
import Step from '../components/Step'
import './NovitaGuidePage.css'

function ConfigPromptRow({ label, value, placeholder = false }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = value
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="config-prompt-row">
      <span className="config-prompt-label">{label}</span>
      <div className={`config-prompt-value${placeholder ? ' is-placeholder' : ''}`}>
        <code>{value}</code>
        {!placeholder && (
          <button type="button" className="config-prompt-copy" onClick={handleCopy}>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        )}
      </div>
    </div>
  )
}

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
            <Step number={1} title="Install Hermes Agent">
              <p>
                Run the one-liner installer. Works on Linux, macOS, and WSL2.
              </p>
              <CodeBlock
                language="bash"
                code={`curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash
source ~/.bashrc
hermes --version`}
              />
              <figure className="step-screenshot">
                <img src="/images/hermes-version.png" alt="hermes --version output" />
              </figure>
            </Step>

            <Step number={2} title="Get Your Novita AI API Key">
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

            <Step number={3} title="Run Hermes Setup">
              <p>Launch the setup wizard and choose a custom endpoint:</p>
              <CodeBlock language="shell" code="hermes setup" />
              <figure className="step-screenshot">
                <img src="/images/setup1-choose-custom-endpoint.png" alt="Choose custom endpoint" />
              </figure>
            </Step>

            <Step number={4} title="Configure Novita Endpoint">
              <p>
                The setup wizard will prompt you one field at a time.
                Paste the value on the right when each field is asked &mdash;
                <strong> API Key</strong> is the only one unique to you:
              </p>
              <div className="config-prompts">
                <ConfigPromptRow
                  label="API base URL:"
                  value="https://api.novita.ai/openai"
                />
                <ConfigPromptRow
                  label="API Key:"
                  value="YOUR-OWN-KEY"
                  placeholder
                />
                <ConfigPromptRow
                  label="Select model [1-96] or type name:"
                  value="zai-org/glm-5.1"
                />
                <ConfigPromptRow
                  label="Context length in tokens [leave blank for auto-detect]:"
                  value="204800"
                />
                <ConfigPromptRow
                  label="Display name [Api.novita.ai]:"
                  value="NovitaAI"
                />
              </div>
              <figure className="step-screenshot">
                <img src="/images/setup2-choose-modelname-context.png" alt="Configure model and context" />
              </figure>
            </Step>

            <Step number={5} title="Connect Discord (Required for this workshop)">
              <p>
                Hermes supports Discord, Slack, and Telegram &mdash; but for
                today&apos;s hands-on we&apos;ll all use <strong>Discord</strong>
                so everyone lands in the same playground. When the wizard asks
                for a messaging port, pick Discord:
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-discord/01-select-discord.png" alt="Select Discord as the messaging platform in Hermes" />
              </figure>

              <h4 className="step-substep">5a &middot; Create a Discord Application</h4>
              <p>
                Open the{' '}
                <a
                  href="https://discord.com/developers/applications"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discord Developer Portal
                </a>
                , click <strong>New Application</strong>, name it something
                like <em>&ldquo;Hermes Agent&rdquo;</em>, and hit{' '}
                <strong>Create</strong>. When the onboarding asks what brings
                you here, choose <strong>Build a Bot</strong>:
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-discord/02-create-discord-app.png" alt="Discord Developer Portal — create new application" />
              </figure>

              <h4 className="step-substep">5b &middot; Enable Privileged Gateway Intents</h4>
              <p>
                In the sidebar, open the <strong>Bot</strong> tab and scroll to
                <strong> Privileged Gateway Intents</strong>. Toggle both on,
                then click <strong>Save Changes</strong>:
              </p>
              <ul className="step-list">
                <li><strong>Server Members Intent</strong> &mdash; resolves usernames</li>
                <li><strong>Message Content Intent</strong> &mdash; lets the bot read what you send it</li>
              </ul>
              <p>
                Miss this and the bot will see messages arrive but won&apos;t be
                able to read them &mdash; easy to overlook, so double-check both
                switches are blue.
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-discord/03-choose-bot-permission.png" alt="Privileged Gateway Intents toggled on, with Bot Permissions below" />
              </figure>

              <h4 className="step-substep">5c &middot; Copy the Bot Token</h4>
              <p>
                Still on the <strong>Bot</strong> tab, click{' '}
                <strong>Reset Token</strong>, complete 2FA if prompted, and
                copy the token right away &mdash; Discord only shows it once.
                Treat it like a password.
              </p>

              <h4 className="step-substep">5d &middot; Invite the Bot to Your Server</h4>
              <p>
                Go to the <strong>Installation</strong> tab, enable{' '}
                <strong>Guild Install</strong>, and pick{' '}
                <strong>Discord Provided Link</strong>. Then set scopes and
                permissions as below.
              </p>
              <p className="config-group-label">Scopes</p>
              <ul className="step-list">
                <li><code>bot</code></li>
                <li><code>applications.commands</code></li>
              </ul>
              <p className="config-group-label">Required permissions</p>
              <ul className="step-list">
                <li>View Channels</li>
                <li>Send Messages</li>
                <li>Embed Links</li>
                <li>Attach Files</li>
                <li>Read Message History</li>
              </ul>
              <p className="config-group-label">Recommended (nice-to-have)</p>
              <ul className="step-list">
                <li><strong>Send Messages in Threads</strong> &mdash; respond inside threads</li>
                <li><strong>Add Reactions</strong> &mdash; react to messages for acknowledgment</li>
              </ul>
              <p>
                Copy the generated install link, open it in a new tab, choose
                your server, and click <strong>Authorize</strong>. The bot will
                show up offline &mdash; that&apos;s expected until we start the
                gateway.
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-discord/install your-app-on-your-sever.png" alt="Authorize the bot to join your Discord server" />
              </figure>

              <h4 className="step-substep">5e &middot; Find Your Discord User ID</h4>
              <p>
                In the Discord app, open{' '}
                <strong>Settings &rarr; Advanced</strong> and turn on{' '}
                <strong>Developer Mode</strong>. Then right-click your own
                username and choose <strong>Copy User ID</strong> &mdash;
                you&apos;ll get a long number like{' '}
                <code>284102345871466496</code>.
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-discord/copy-your-userID.png" alt="Right-click your username and choose Copy User ID" />
              </figure>

              <h4 className="step-substep">5f &middot; Paste Credentials into Hermes</h4>
              <p>
                Back in the Hermes setup wizard, paste your{' '}
                <strong>Bot Token</strong> and <strong>User ID</strong> when
                prompted. Hermes writes them to{' '}
                <code>~/.hermes/.env</code> for you and confirms setup is
                complete:
              </p>
              <figure className="step-screenshot">
                <img src="/images/setup-discord/set-up-finished.png" alt="Hermes setup finished — tool availability summary" />
              </figure>
            </Step>

            <Step number={6} title="Verify & Start Chatting" last>
              <p>Start Hermes and confirm it responds:</p>
              <CodeBlock language="bash" code="hermes" />
              <figure className="step-screenshot">
                <img src="/images/start-conversation.png" alt="First conversation with Hermes" />
              </figure>
              <p>
                Try asking it to search the web, write code, or manage files.
                Hermes will use Novita AI&apos;s GLM-5.1 to power every response.
              </p>

              <div className="step-tip">
                <div className="step-tip-header">
                  <span className="step-tip-icon">&#128161;</span>
                  <h4>Pro tip &mdash; skip the @mention on Discord</h4>
                </div>
                <p>
                  By default Hermes only replies on Discord when you{' '}
                  <code>@</code>-mention it. Paste this message in your channel
                  to let it respond to every message:
                </p>
                <CodeBlock
                  language="text"
                  code="Can you set the config that I don't need to ping you and you can still answer me"
                />
                <p>
                  The agent reads its own config, flips the{' '}
                  <code>discord.require_mention</code> flag, and tells you to
                  restart the gateway. Re-run <code>hermes</code> &mdash; from
                  then on plain messages work, no <code>@</code> needed.
                </p>
              </div>
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
