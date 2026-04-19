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
              <div className="step-img-placeholder">Screenshot coming soon</div>
            </Step>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Examples</span>
          <h2>Real-World Use Cases</h2>
          <p className="section-lead">
            Here are some practical prompts to get you started. Just paste
            them into Hermes after installing the skill pack.
          </p>

          <div className="use-cases">
            <div className="use-case">
              <h3>Optimize a Landing Page</h3>
              <p>
                Have Hermes audit your landing page and suggest conversion
                improvements using the <strong>page-cro</strong> skill.
              </p>
              <CodeBlock
                language="text"
                code={`Review my landing page at https://example.com and give me
a full CRO audit. Focus on headline clarity, CTA placement,
social proof, and signup friction. Provide specific copy
rewrites and layout suggestions.`}
              />
              <div className="step-img-placeholder">Screenshot coming soon</div>
            </div>

            <div className="use-case">
              <h3>Write a Cold Email Sequence</h3>
              <p>
                Generate a multi-step outreach sequence using the{' '}
                <strong>cold-email</strong> and <strong>email-sequence</strong> skills.
              </p>
              <CodeBlock
                language="text"
                code={`Write a 5-email cold outreach sequence for my SaaS product.
Target audience: startup CTOs. Goal: book a demo call.
Include subject lines, body copy, and follow-up timing
for each email.`}
              />
              <div className="step-img-placeholder">Screenshot coming soon</div>
            </div>

            <div className="use-case">
              <h3>Run an SEO Audit</h3>
              <p>
                Get a comprehensive SEO analysis using the{' '}
                <strong>seo-audit</strong> and <strong>schema-markup</strong> skills.
              </p>
              <CodeBlock
                language="text"
                code={`Run a full SEO audit on my website. Check technical SEO,
on-page optimization, content gaps, and schema markup.
Prioritize fixes by impact and give me an action plan
I can execute this week.`}
              />
              <div className="step-img-placeholder">Screenshot coming soon</div>
            </div>

            <div className="use-case">
              <h3>Plan a Product Launch</h3>
              <p>
                Build a launch strategy using the{' '}
                <strong>launch-strategy</strong> and <strong>social-content</strong> skills.
              </p>
              <CodeBlock
                language="text"
                code={`I'm launching a new feature next month. Create a launch
plan that covers: pre-launch teaser content, launch day
social posts, email announcement, Product Hunt copy,
and a 2-week post-launch follow-up schedule.`}
              />
              <div className="step-img-placeholder">Screenshot coming soon</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
