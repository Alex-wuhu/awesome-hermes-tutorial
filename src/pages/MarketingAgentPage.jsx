import PageHero from '../components/PageHero'
import CodeBlock from '../components/CodeBlock'
import Step from '../components/Step'
import './MarketingAgentPage.css'

export default function MarketingAgentPage() {
  return (
    <>
      <PageHero
        tag="Use Case"
        title="Build a Marketing Agent"
        subtitle="Turn Hermes into a full-stack marketing teammate with marketingskills"
      />

      {/* ── Intro ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Overview</span>
          <h2>What is marketingskills?</h2>
          <p className="section-lead">
            <a href="https://github.com/coreyhaines31/marketingskills" target="_blank" rel="noopener noreferrer">
              <strong>marketingskills</strong>
            </a>{' '}
            is an open-source skill pack that gives Hermes Agent deep expertise
            in marketing &mdash; from copywriting and SEO to conversion
            optimization and paid ads. Install once, and every marketing task
            gets handled by a specialist.
          </p>
        </div>
      </section>

      {/* ── Skills Overview ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Capabilities</span>
          <h2>What&apos;s Included</h2>
          <p className="section-lead">
            The skill pack covers 6 key marketing areas with 30+ specialized skills.
          </p>

          <div className="skill-category">
            <h3>Conversion Optimization</h3>
            <div className="skill-tags">
              <span className="skill-tag">page-cro</span>
              <span className="skill-tag">signup-flow-cro</span>
              <span className="skill-tag">onboarding-cro</span>
              <span className="skill-tag">form-cro</span>
              <span className="skill-tag">popup-cro</span>
              <span className="skill-tag">paywall-upgrade-cro</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Content &amp; Copy</h3>
            <div className="skill-tags">
              <span className="skill-tag">copywriting</span>
              <span className="skill-tag">copy-editing</span>
              <span className="skill-tag">cold-email</span>
              <span className="skill-tag">email-sequence</span>
              <span className="skill-tag">social-content</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>SEO &amp; Discovery</h3>
            <div className="skill-tags">
              <span className="skill-tag">seo-audit</span>
              <span className="skill-tag">ai-seo</span>
              <span className="skill-tag">programmatic-seo</span>
              <span className="skill-tag">site-architecture</span>
              <span className="skill-tag">competitor-alternatives</span>
              <span className="skill-tag">schema-markup</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Paid &amp; Distribution</h3>
            <div className="skill-tags">
              <span className="skill-tag">paid-ads</span>
              <span className="skill-tag">ad-creative</span>
              <span className="skill-tag">social-content</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Measurement</h3>
            <div className="skill-tags">
              <span className="skill-tag">analytics-tracking</span>
              <span className="skill-tag">ab-test-setup</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Strategy &amp; Growth</h3>
            <div className="skill-tags">
              <span className="skill-tag">marketing-ideas</span>
              <span className="skill-tag">marketing-psychology</span>
              <span className="skill-tag">launch-strategy</span>
              <span className="skill-tag">pricing-strategy</span>
              <span className="skill-tag">churn-prevention</span>
              <span className="skill-tag">referral-program</span>
              <span className="skill-tag">free-tool-strategy</span>
              <span className="skill-tag">revops</span>
              <span className="skill-tag">sales-enablement</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Setup ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Setup</span>
          <h2>Install &amp; Configure</h2>
          <p className="section-lead">
            Make sure you have{' '}
            <a href="/#tutorial" className="section-link" style={{ marginBottom: 0, display: 'inline' }}>
              Hermes Agent installed
            </a>{' '}
            first, then follow these steps.
          </p>

          <div className="steps">
            <Step number={1} title="Start Hermes and Give It the Prompt" last>
              <p>
                Launch Hermes and paste the following prompt. The agent will
                install the skill pack and configure itself automatically:
              </p>
              <CodeBlock
                language="text"
                code={`You are my marketing assistant. First install the
marketingskills skill pack from
https://github.com/coreyhaines31/marketingskills,
then help me with my marketing tasks — I'll describe
what I need, and you pick the best skill and walk me
through it step by step.`}
              />
              <figure className="step-screenshot">
                <img src="/images/marketing_agent/marketing-agent-installskills-sucess.png" alt="Marketing skills installed successfully" />
              </figure>
            </Step>
          </div>
        </div>
      </section>

      {/* ── Try It: Novita AI Content ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Try It Now</span>
          <h2>Create Content for Novita AI</h2>
          <p className="section-lead">
            Let&apos;s put the skills to work — copy any prompt below into Hermes
            and watch your agent produce real marketing content in seconds.
          </p>

          <div className="use-cases">
            {/* ── Copywriting ── */}
            <div className="use-case">
              <div className="use-case-label">1 · Copywriting</div>
              <h3>Rewrite Landing Page Hero Copy</h3>
              <p>
                <strong>Copywriting</strong> is the craft of writing text that drives action
                — headlines that grab attention, CTAs that get clicks, taglines that stick.
                Unlike blog posts or docs, every word serves a conversion goal.
              </p>
              <p>
                Use the <strong>copywriting</strong> skill to generate
                audience-specific hero copy for novita.ai.
              </p>
              <CodeBlock
                language="text"
                code={`Visit https://novita.ai and read the current hero
section. Then write 3 alternative versions of the
headline + subheadline. Each version should target
a different audience:
1. Indie hackers building AI side projects
2. Enterprise teams replacing OpenAI
3. ML engineers who need GPU compute
Keep each headline under 10 words.`}
              />

              <div className="result-label">Agent Output</div>
              <div className="result-current">
                <div className="result-current-tag">Current</div>
                <h4>AI &amp; Agent Cloud for Developers</h4>
                <p>
                  Ship models and agents in minutes, call 200+ models with one API,
                  and run secure, fast agent sandboxes — developer-first and startup-friendly.
                </p>
              </div>

              <div className="result-alternatives">
                <div className="result-alt">
                  <div className="result-alt-audience">Indie Hackers</div>
                  <h4>Ship your AI side project tonight</h4>
                  <p>
                    200+ models, one OpenAI-compatible endpoint, pay-per-token pricing.
                    No subscription, no credit card gate — just plug in and ship.
                  </p>
                  <span className="result-alt-lever">Speed + Simplicity</span>
                </div>
                <div className="result-alt">
                  <div className="result-alt-audience">Enterprise</div>
                  <h4>One API to replace OpenAI</h4>
                  <p>
                    Access 200+ models — GLM, DeepSeek, Qwen, Llama — through an
                    OpenAI-compatible endpoint. Cut costs and diversify your model supply chain.
                  </p>
                  <span className="result-alt-lever">Cost + De-risk</span>
                </div>
                <div className="result-alt">
                  <div className="result-alt-audience">ML Engineers</div>
                  <h4>GPU instances, not GPU headaches</h4>
                  <p>
                    Launch H100, A100, and 4090 instances in minutes — or go serverless
                    and pay only when your models run.
                  </p>
                  <span className="result-alt-lever">Compute without pain</span>
                </div>
              </div>
            </div>

            {/* ── SEO ── */}
            <div className="use-case">
              <div className="use-case-label">2 · SEO</div>
              <h3>Run an SEO Audit on novita.ai</h3>
              <p>
                Use the <strong>seo-audit</strong> and <strong>ai-seo</strong> skills
                to get actionable SEO improvements.
              </p>
              <CodeBlock
                language="text"
                code={`Run a full SEO audit on https://novita.ai. Check:
- Title tags, meta descriptions, and H1 structure
- Page load speed and Core Web Vitals issues
- Internal linking and site architecture
- Content gaps vs competitors (together.ai, replicate)
- Schema markup (Organization, Product, FAQ)
Prioritize the top 5 fixes by traffic impact.`}
              />
            </div>

            {/* ── Programmatic SEO ── */}
            <div className="use-case">
              <div className="use-case-label">3 · Programmatic SEO</div>
              <h3>Generate Model Comparison Landing Pages</h3>
              <p>
                Use the <strong>programmatic-seo</strong> skill to plan
                high-volume, templated pages that capture long-tail search traffic.
              </p>
              <CodeBlock
                language="text"
                code={`Novita AI supports 200+ models. Design a programmatic
SEO strategy to create landing pages like:
- "GLM-5.1 vs GPT-4o: pricing, speed, context length"
- "Best open-source LLMs for code generation in 2025"
- "DeepSeek vs Llama 3: which is better for RAG?"

For each page template, give me: target keyword,
estimated monthly search volume, page structure
(H1/H2/sections), and internal linking strategy.
Generate 10 example pages to start.`}
              />
            </div>

            {/* ── CRO Audit ── */}
            <div className="use-case">
              <div className="use-case-label">4 · CRO Audit</div>
              <h3>Audit the Novita AI Pricing Page</h3>
              <p>
                Use the <strong>page-cro</strong> skill to find conversion
                opportunities on a real page.
              </p>
              <CodeBlock
                language="text"
                code={`Go to https://novita.ai/pricing and do a CRO audit.
Evaluate: pricing clarity, plan comparison layout,
CTA visibility, trust signals, and FAQ coverage.
Give me 5 specific, actionable improvements ranked
by expected impact.`}
              />
            </div>

            {/* ── Cold Outreach ── */}
            <div className="use-case">
              <div className="use-case-label">5 · Cold Outreach</div>
              <h3>Draft a Developer Outreach Email</h3>
              <p>
                Use the <strong>cold-email</strong> skill to write an
                outreach email targeting AI developers.
              </p>
              <CodeBlock
                language="text"
                code={`Write a cold email from Novita AI to developers who
currently use OpenAI's API. The pitch: same API format,
200+ model choices, lower cost. Keep it under 120 words,
no fluff. Include a subject line and a one-click CTA
to try the API with $5 free credit.`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
