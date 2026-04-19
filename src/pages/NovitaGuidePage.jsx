import PageHero from '../components/PageHero'
import CodeBlock from '../components/CodeBlock'
import Step from '../components/Step'
import './NovitaGuidePage.css'

export default function NovitaGuidePage() {
  return (
    <>
      <PageHero
        tag="Provider Guide"
        title="Connect Hermes Agent with Novita AI"
        subtitle="Set up Novita AI as your LLM provider in minutes"
      />

      {/* ── Why Novita AI ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Provider</span>
          <h2>Why Novita AI?</h2>
          <p className="section-lead">
            Novita AI provides an OpenAI-compatible inference API with access
            to 200+ models including DeepSeek, Qwen, Llama, and more.
            It integrates seamlessly with Hermes Agent as a custom LLM provider.
          </p>
          <a className="section-link" href="https://novita.ai" target="_blank" rel="noopener noreferrer">
            Visit Novita AI &rarr;
          </a>
          <figure className="section-screenshot">
            <img src="/images/Novita-web.png" alt="Novita AI website" />
          </figure>
        </div>
      </section>

      {/* ── Setup Steps ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Setup</span>
          <h2>Configuration Steps</h2>
          <p className="section-lead">
            Make sure you have{' '}
            <a href="/#tutorial" className="section-link" style={{ marginBottom: 0, display: 'inline' }}>
              Hermes Agent installed
            </a>{' '}
            first, then follow these steps.
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
                <img src="/images/Novita-web.png" alt="Novita AI API key dashboard" />
              </figure>
            </Step>

            <Step number={2} title="Run Hermes Setup">
              <p>Launch the setup wizard and select a custom endpoint:</p>
              <CodeBlock language="shell" code="hermes setup" />
              <figure className="step-screenshot">
                <img src="/images/setup1-chose-custom-endpoint.png" alt="Choose custom endpoint" />
              </figure>
            </Step>

            <Step number={3} title="Configure Novita Endpoint">
              <p>Fill in the following parameters when prompted:</p>
              <CodeBlock
                language="text"
                code={`API base URL:   https://api.novita.ai/openai
Model name:     zai-org/glm-5.1
Context length: 204800`}
              />
              <figure className="step-screenshot">
                <img src="/images/setup2-choose-modelname-context.png" alt="Configure model name and context" />
              </figure>
            </Step>

            <Step number={4} title="Verify Connection" last>
              <p>Start Hermes to verify everything is working:</p>
              <CodeBlock language="bash" code="hermes" />
              <figure className="step-screenshot">
                <img src="/images/start-conversation.png" alt="Hermes Agent first conversation" />
              </figure>
              <p>
                If you see a response from the agent, you&apos;re all set!
                Hermes is now using Novita AI&apos;s inference to power every response.
              </p>
            </Step>
          </div>
        </div>
      </section>
    </>
  )
}
