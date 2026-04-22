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
            {/* ── Ad Creative ── */}
            <div className="use-case">
              <div className="use-case-label">1 · Ads &amp; Paid</div>
              <h3>Generate Ad Variants for Novita AI</h3>
              <p>
                <strong>Ad creative</strong> is the headline, body, and CTA
                combo you hand to a paid media buyer. Strong creative leans
                on a customer pain point, fits the platform&apos;s character
                limits, and gives the team multiple angles to A/B test.
              </p>
              <p>
                Use the <strong>ad-creative</strong> skill to generate 5
                Meta &amp; Google ad variants for novita.ai.
              </p>
              <CodeBlock
                language="text"
                code={`Use the ad-creative skill to write 5 ad variations
for https://novita.ai targeting AI startup founders.
For each variant, give:
- Headline (max 30 chars)
- Body (max 90 chars)
- Primary CTA
- Which customer pain point it leverages
Cover different angles: cost, speed, model choice,
OpenAI compatibility, and GPU availability.`}
              />

              <div className="result-label">Agent Output — 5 Variants</div>
              <div className="ad-variants">
                <div className="ad-variant">
                  <div className="ad-variant-angle">Variant 1 &middot; Cost</div>
                  <div className="ad-variant-field">
                    <div className="ad-variant-field-label">
                      Headline <span className="ad-variant-chars">22 chars</span>
                    </div>
                    <div className="ad-variant-headline">Cut AI Infra Costs 50%</div>
                  </div>
                  <div className="ad-variant-field">
                    <div className="ad-variant-field-label">
                      Body <span className="ad-variant-chars">88 chars</span>
                    </div>
                    <div className="ad-variant-body">
                      Run 200+ models at half the cost. Spot GPUs, cache discounts,
                      pay-per-token. Startup-friendly.
                    </div>
                  </div>
                  <div className="ad-variant-cta-row">
                    <span className="ad-variant-cta">Start Free</span>
                  </div>
                  <div className="ad-variant-pain">
                    <div className="ad-variant-pain-label">Pain Point</div>
                    <p>
                      Burn rate on GPU/API spend &mdash; founders bleed cash on
                      overpriced inference before finding PMF.
                    </p>
                  </div>
                </div>

                <div className="ad-variant">
                  <div className="ad-variant-angle">Variant 2 &middot; Speed</div>
                  <div className="ad-variant-field">
                    <div className="ad-variant-field-label">
                      Headline <span className="ad-variant-chars">29 chars</span>
                    </div>
                    <div className="ad-variant-headline">Ship AI in Minutes, Not Months</div>
                  </div>
                  <div className="ad-variant-field">
                    <div className="ad-variant-field-label">
                      Body <span className="ad-variant-chars">89 chars</span>
                    </div>
                    <div className="ad-variant-body">
                      One API, 200+ models, zero infra setup. Go from prototype to
                      production before your next standup.
                    </div>
                  </div>
                  <div className="ad-variant-cta-row">
                    <span className="ad-variant-cta">Get Started</span>
                  </div>
                  <div className="ad-variant-pain">
                    <div className="ad-variant-pain-label">Pain Point</div>
                    <p>
                      Slow iteration cycles &mdash; founders waste weeks on DevOps
                      instead of shipping features and talking to users.
                    </p>
                  </div>
                </div>

                <div className="ad-variant">
                  <div className="ad-variant-angle">Variant 3 &middot; Model Choice</div>
                  <div className="ad-variant-field">
                    <div className="ad-variant-field-label">
                      Headline <span className="ad-variant-chars">24 chars</span>
                    </div>
                    <div className="ad-variant-headline">200+ Models, One API Key</div>
                  </div>
                  <div className="ad-variant-field">
                    <div className="ad-variant-field-label">
                      Body <span className="ad-variant-chars">88 chars</span>
                    </div>
                    <div className="ad-variant-body">
                      DeepSeek, Llama, Qwen, image, video, TTS &mdash; swap models in
                      one line. No vendor lock-in, ever.
                    </div>
                  </div>
                  <div className="ad-variant-cta-row">
                    <span className="ad-variant-cta">Browse Models</span>
                  </div>
                  <div className="ad-variant-pain">
                    <div className="ad-variant-pain-label">Pain Point</div>
                    <p>
                      Lock-in anxiety &mdash; founders who commit to a single provider
                      get stuck when a better model drops or pricing changes.
                    </p>
                  </div>
                </div>

                <div className="ad-variant">
                  <div className="ad-variant-angle">Variant 4 &middot; OpenAI Compat</div>
                  <div className="ad-variant-field">
                    <div className="ad-variant-field-label">
                      Headline <span className="ad-variant-chars">20 chars</span>
                    </div>
                    <div className="ad-variant-headline">Drop-In OpenAI Swap</div>
                  </div>
                  <div className="ad-variant-field">
                    <div className="ad-variant-field-label">
                      Body <span className="ad-variant-chars">89 chars</span>
                    </div>
                    <div className="ad-variant-body">
                      Already using the OpenAI SDK? Change 2 lines, cut costs 50%.
                      Zero refactors, same chat completions.
                    </div>
                  </div>
                  <div className="ad-variant-cta-row">
                    <span className="ad-variant-cta">View Docs</span>
                  </div>
                  <div className="ad-variant-pain">
                    <div className="ad-variant-pain-label">Pain Point</div>
                    <p>
                      Migration fear &mdash; founders built on OpenAI and dread the
                      rewrite, even as costs spiral; they need a painless exit ramp.
                    </p>
                  </div>
                </div>

                <div className="ad-variant">
                  <div className="ad-variant-angle">Variant 5 &middot; GPU Availability</div>
                  <div className="ad-variant-field">
                    <div className="ad-variant-field-label">
                      Headline <span className="ad-variant-chars">23 chars</span>
                    </div>
                    <div className="ad-variant-headline">GPUs When You Need Them</div>
                  </div>
                  <div className="ad-variant-field">
                    <div className="ad-variant-field-label">
                      Body <span className="ad-variant-chars">87 chars</span>
                    </div>
                    <div className="ad-variant-body">
                      Launch GPU instances in seconds across global regions. Train,
                      finetune, infer &mdash; on-demand or spot.
                    </div>
                  </div>
                  <div className="ad-variant-cta-row">
                    <span className="ad-variant-cta">Explore GPUs</span>
                  </div>
                  <div className="ad-variant-pain">
                    <div className="ad-variant-pain-label">Pain Point</div>
                    <p>
                      GPU scarcity &mdash; founders hit capacity walls mid-training
                      or can&apos;t get A100s when competitors can, stalling their roadmap.
                    </p>
                  </div>
                </div>
              </div>

              <div className="result-label">Quick Reference</div>
              <div className="seo-table-wrap">
                <table className="seo-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Angle</th>
                      <th>Headline</th>
                      <th>Pain Point</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Cost</td>
                      <td>Cut AI Infra Costs 50%</td>
                      <td>Burn rate on overpriced inference</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Speed</td>
                      <td>Ship AI in Minutes, Not Months</td>
                      <td>Slow iteration / DevOps tax</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Model Choice</td>
                      <td>200+ Models, One API Key</td>
                      <td>Vendor lock-in anxiety</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>OpenAI Compat</td>
                      <td>Drop-In OpenAI Swap</td>
                      <td>Migration fear + spiraling costs</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>GPU Availability</td>
                      <td>GPUs When You Need Them</td>
                      <td>GPU scarcity stalling roadmap</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* ── Lead Magnets ── */}
            <div className="use-case">
              <div className="use-case-label">2 · Growth &amp; Retention</div>
              <h3>Brainstorm Lead Magnets for Novita AI</h3>
              <p>
                A <strong>lead magnet</strong> is a free, high-value resource
                you trade for an email or signup &mdash; checklists, templates,
                mini-courses, calculators. The best magnets solve one sharp
                problem for one specific persona.
              </p>
              <p>
                Use the <strong>lead-magnets</strong> skill to generate 10
                ideas aimed at developers evaluating novita.ai.
              </p>
              <CodeBlock
                language="text"
                code={`Use the lead-magnets skill to brainstorm 10 lead
magnet ideas for developers evaluating
https://novita.ai. Mix formats: checklists,
templates, mini-courses, comparison tools,
notebooks. For each, give me:
- Title
- Format (PDF / Notion / GitHub repo / web tool)
- Target persona (indie hacker / ML eng / enterprise)
- Distribution channel (X, Reddit, HN, newsletter)`}
              />
              <div className="step-img-placeholder">Screenshot coming soon</div>
            </div>

            {/* ── Copywriting ── */}
            <div className="use-case">
              <div className="use-case-label">3 · Copywriting</div>
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

            {/* ── Social Media Content ── */}
            <div className="use-case">
              <div className="use-case-label">4 · Social Content</div>
              <h3>Generate Multi-Platform Social Posts</h3>
              <p>
                Use the <strong>social-content</strong> skill to write
                platform-specific posts for Twitter/X, LinkedIn, and Reddit
                about any product &mdash; tailored to each audience in seconds.
              </p>
              <CodeBlock
                language="text"
                code={`Use the social-content skill to write social media
posts about https://novita.ai for three platforms:

1. Twitter/X — punchy, under 280 chars, with hook
2. LinkedIn — professional tone, 3-4 paragraphs,
   highlight developer benefits and cost savings
3. Reddit (r/MachineLearning) — technical and
   authentic, no marketing speak, focus on the
   200+ open-source models and API compatibility

Include relevant hashtags for each platform.`}
              />
              <div className="step-img-placeholder">Screenshot coming soon</div>
            </div>

            {/* ── SEO ── */}
            <div className="use-case">
              <div className="use-case-label">5 · SEO</div>
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

              <div className="seo-time-warning">
                <span className="seo-time-warning-icon">&#9200;</span>
                <div>
                  <strong>This audit takes 10&ndash;15 minutes to complete.</strong>
                  <p>The agent visits multiple pages, runs performance checks, and compares against competitors. Not recommended for live workshop testing &mdash; review the results below instead.</p>
                </div>
              </div>

              <div className="result-label">Agent Output</div>

              {/* ── Detailed Audit Sections ── */}
              <div className="seo-audit-details">

                {/* 1. On-Page SEO */}
                <div className="seo-audit-detail">
                  <h4>1. On-Page SEO: Title Tags, Meta Descriptions, H1 Structure</h4>
                  <div className="seo-table-wrap">
                    <table className="seo-table">
                      <thead>
                        <tr>
                          <th>Page</th>
                          <th>Title</th>
                          <th>Issues</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Homepage</td>
                          <td className="seo-status--good">&ldquo;Novita AI - AI &amp; Agent Cloud for Developers&rdquo; (43 chars)</td>
                          <td>3 pairs of duplicate H2s</td>
                        </tr>
                        <tr>
                          <td>/models</td>
                          <td className="seo-status--bad">&ldquo;MoonshotAI&rdquo; (JS override)</td>
                          <td>Dynamic JS overwrites title; H1 says &ldquo;Dedicated Endpoint&rdquo; (wrong)</td>
                        </tr>
                        <tr>
                          <td>/pricing</td>
                          <td className="seo-status--bad">&ldquo;Mistral&rdquo; (JS override)</td>
                          <td>2 H1 tags; H3 text bugs (&ldquo;MoonshotAIMoonshotAI&rdquo;)</td>
                        </tr>
                        <tr>
                          <td>/docs/guides/introduction</td>
                          <td className="seo-status--warn">&ldquo;Introduction - Documentation&rdquo; (28 chars, generic)</td>
                          <td>No meta description at all</td>
                        </tr>
                        <tr>
                          <td>/sandbox</td>
                          <td className="seo-status--warn">71 chars (over 60 limit)</td>
                          <td>Title too long; H2 typo &ldquo;andConcurrency&rdquo;</td>
                        </tr>
                        <tr>
                          <td>/gpus-console/templates-library</td>
                          <td className="seo-status--good">Title ok</td>
                          <td>No H1 tag; no headings at all</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="seo-audit-note">
                    Critical: Client-side JS is overwriting &lt;title&gt; on /models and /pricing with random model names. Google sees nonsensical titles.
                  </p>
                </div>

                {/* 2. Core Web Vitals */}
                <div className="seo-audit-detail">
                  <h4>2. Core Web Vitals &amp; Page Speed</h4>
                  <div className="seo-table-wrap">
                    <table className="seo-table">
                      <thead>
                        <tr>
                          <th>Metric</th>
                          <th>Mobile</th>
                          <th>Desktop</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Performance Score</td>
                          <td>52/100</td>
                          <td>53/100</td>
                          <td className="seo-status--bad">Poor</td>
                        </tr>
                        <tr>
                          <td>LCP</td>
                          <td>3.3s</td>
                          <td>3.4s</td>
                          <td className="seo-status--warn">Needs Work (&le;2.5s)</td>
                        </tr>
                        <tr>
                          <td>CLS</td>
                          <td>0</td>
                          <td>0</td>
                          <td className="seo-status--good">Good</td>
                        </tr>
                        <tr>
                          <td>Speed Index</td>
                          <td>27.1s</td>
                          <td>12.0s</td>
                          <td className="seo-status--bad">Poor</td>
                        </tr>
                        <tr>
                          <td>Total Blocking Time</td>
                          <td>2,630ms</td>
                          <td>1,980ms</td>
                          <td className="seo-status--bad">Poor (&le;200ms)</td>
                        </tr>
                        <tr>
                          <td>TTFB (lab)</td>
                          <td>70ms</td>
                          <td>80ms</td>
                          <td className="seo-status--good">Good</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="seo-audit-note">
                    Root cause: 54&ndash;65 seconds of JavaScript main-thread work. Massive un-split Next.js bundles block rendering and interactivity.
                  </p>
                </div>

                {/* 3. Internal Linking */}
                <div className="seo-audit-detail">
                  <h4>3. Internal Linking &amp; Site Architecture</h4>
                  <div className="seo-list-columns">
                    <div>
                      <div className="seo-list-heading seo-list-heading--good">What&apos;s Working</div>
                      <ul className="seo-list-good">
                        <li>Canonical tags on all pages, consistent HTTPS non-www</li>
                        <li>HTTP&rarr;HTTPS redirect (308), www&rarr;non-www redirect (301)</li>
                        <li>HSTS header with 2-year max-age</li>
                        <li>7 sub-sitemaps covering ~655 URLs</li>
                      </ul>
                    </div>
                    <div>
                      <div className="seo-list-heading seo-list-heading--bad">Issues Found</div>
                      <ul className="seo-list-bad">
                        <li>GPU dropdown is JS-only &mdash; no crawlable links to /gpus, /gpus-spot, /gpu-baremetal, /serverless</li>
                        <li>2 orphan pages in sitemap but not linked from site</li>
                        <li>Model sub-category pages only reachable via JS tabs</li>
                        <li>415 docs pages are 3+ clicks deep</li>
                        <li>Blog on separate subdomain &mdash; doesn&apos;t pass link authority to main domain</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 4. Content Gaps */}
                <div className="seo-audit-detail">
                  <h4>4. Content Gaps vs Competitors</h4>
                  <div className="seo-table-wrap">
                    <table className="seo-table">
                      <thead>
                        <tr>
                          <th>Content Type</th>
                          <th>Novita</th>
                          <th>Together.ai</th>
                          <th>Replicate</th>
                          <th>Gap</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Main-site pages</td>
                          <td>~20</td>
                          <td>~568</td>
                          <td>~6,300+</td>
                          <td className="seo-status--bad">10&ndash;300x</td>
                        </tr>
                        <tr>
                          <td>Model landing pages</td>
                          <td>0</td>
                          <td>222</td>
                          <td>5,867</td>
                          <td className="seo-status--bad">Critical</td>
                        </tr>
                        <tr>
                          <td>&ldquo;/vs-X&rdquo; comparison pages</td>
                          <td>0</td>
                          <td>Several</td>
                          <td>0</td>
                          <td className="seo-status--warn">High</td>
                        </tr>
                        <tr>
                          <td>OpenAI alternative page</td>
                          <td>0</td>
                          <td>Yes</td>
                          <td>0</td>
                          <td className="seo-status--warn">High</td>
                        </tr>
                        <tr>
                          <td>Model provider pages</td>
                          <td>0</td>
                          <td>54</td>
                          <td>0</td>
                          <td className="seo-status--warn">High</td>
                        </tr>
                        <tr>
                          <td>Deploy/quickstart guides</td>
                          <td>0</td>
                          <td>9</td>
                          <td>Many</td>
                          <td className="seo-status--warn">Medium</td>
                        </tr>
                        <tr>
                          <td>Use-case/solution pages</td>
                          <td>0</td>
                          <td>1</td>
                          <td>39</td>
                          <td className="seo-status--warn">Medium</td>
                        </tr>
                        <tr>
                          <td>Enterprise page</td>
                          <td>404</td>
                          <td>Yes</td>
                          <td>No</td>
                          <td className="seo-status--warn">Medium</td>
                        </tr>
                        <tr>
                          <td>Customer case studies</td>
                          <td>0</td>
                          <td>18</td>
                          <td>Some</td>
                          <td className="seo-status--warn">Medium</td>
                        </tr>
                        <tr>
                          <td>Cookbooks/tutorials</td>
                          <td>0</td>
                          <td>10+</td>
                          <td>30+</td>
                          <td className="seo-status--warn">Medium</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 5. Schema Markup */}
                <div className="seo-audit-detail">
                  <h4>5. Schema Markup</h4>
                  <p className="seo-audit-note" style={{ marginBottom: 12, marginTop: 0 }}>
                    Effectively zero structured data. The only JSON-LD found is auto-generated by Mintlify on the docs page and credits Mintlify, not Novita AI.
                  </p>
                  <div className="seo-table-wrap">
                    <table className="seo-table">
                      <thead>
                        <tr>
                          <th>Schema Type</th>
                          <th>Status</th>
                          <th>Impact if Added</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Organization</td>
                          <td className="seo-status--bad">Missing</td>
                          <td>Knowledge panel in SERPs</td>
                        </tr>
                        <tr>
                          <td>WebSite</td>
                          <td className="seo-status--bad">Missing</td>
                          <td>Sitelinks search box</td>
                        </tr>
                        <tr>
                          <td>SoftwareApplication</td>
                          <td className="seo-status--bad">Missing</td>
                          <td>Software app rich results</td>
                        </tr>
                        <tr>
                          <td>Product</td>
                          <td className="seo-status--bad">Missing</td>
                          <td>Product rich results with pricing</td>
                        </tr>
                        <tr>
                          <td>FAQPage</td>
                          <td className="seo-status--bad">Missing</td>
                          <td>FAQ rich snippets &mdash; doubles SERP visibility</td>
                        </tr>
                        <tr>
                          <td>BreadcrumbList</td>
                          <td className="seo-status--bad">Missing</td>
                          <td>Breadcrumb trail in SERPs</td>
                        </tr>
                        <tr>
                          <td>Service + Offer</td>
                          <td className="seo-status--bad">Missing</td>
                          <td>Service listings</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Score Overview */}
              <div className="seo-overview">
                <div className="seo-score">
                  <span className="seo-score-badge seo-score--red">Needs Work</span>
                  <p>
                    Solid technical foundations (HTTPS, canonicals, sitemaps) but major gaps
                    in on-page optimization, page speed, content depth, and structured data.
                  </p>
                </div>
                <div className="seo-metrics">
                  <div className="seo-metric">
                    <span className="seo-metric-value seo-metric--red">52</span>
                    <span className="seo-metric-label">Mobile Score</span>
                  </div>
                  <div className="seo-metric">
                    <span className="seo-metric-value seo-metric--red">3.3s</span>
                    <span className="seo-metric-label">LCP</span>
                  </div>
                  <div className="seo-metric">
                    <span className="seo-metric-value seo-metric--green">0</span>
                    <span className="seo-metric-label">CLS</span>
                  </div>
                  <div className="seo-metric">
                    <span className="seo-metric-value seo-metric--red">~20</span>
                    <span className="seo-metric-label">Pages (vs 6K+)</span>
                  </div>
                </div>
              </div>

              {/* Top 5 Fixes */}
              <div className="seo-fixes">
                <div className="seo-fix">
                  <div className="seo-fix-rank">#1</div>
                  <div className="seo-fix-body">
                    <div className="seo-fix-header">
                      <h4>Launch Model-Specific Landing Pages</h4>
                      <span className="seo-fix-impact seo-fix-impact--high">Very High Impact</span>
                    </div>
                    <p>
                      200+ models but 0 dedicated pages. Together.ai has 222, Replicate has 5,867.
                      Templatize and generate at scale for &ldquo;deepseek api&rdquo;, &ldquo;qwen api&rdquo; keywords.
                    </p>
                    <span className="seo-fix-estimate">+5K–50K organic visits/mo</span>
                  </div>
                </div>

                <div className="seo-fix">
                  <div className="seo-fix-rank">#2</div>
                  <div className="seo-fix-body">
                    <div className="seo-fix-header">
                      <h4>Fix Broken Title Tags</h4>
                      <span className="seo-fix-impact seo-fix-impact--high">High Impact</span>
                    </div>
                    <p>
                      Client-side JS overwrites &lt;title&gt; on /models and /pricing with random model
                      names (&ldquo;MoonshotAI&rdquo;, &ldquo;Mistral&rdquo;). Google sees nonsensical titles.
                    </p>
                    <span className="seo-fix-estimate">+20–40% CTR · Fix in 1–2 days</span>
                  </div>
                </div>

                <div className="seo-fix">
                  <div className="seo-fix-rank">#3</div>
                  <div className="seo-fix-body">
                    <div className="seo-fix-header">
                      <h4>Add Schema Markup</h4>
                      <span className="seo-fix-impact seo-fix-impact--high">High Impact</span>
                    </div>
                    <p>
                      Zero structured data. FAQ page has 20+ Q&amp;As with no markup — adding
                      FAQPage schema doubles SERP visibility. Also missing Organization &amp; Product schemas.
                    </p>
                    <span className="seo-fix-estimate">+10–25% CTR · Fix in 1–3 days</span>
                  </div>
                </div>

                <div className="seo-fix">
                  <div className="seo-fix-rank">#4</div>
                  <div className="seo-fix-body">
                    <div className="seo-fix-header">
                      <h4>Create &ldquo;/vs&rdquo; Comparison Pages</h4>
                      <span className="seo-fix-impact seo-fix-impact--medium">High Impact</span>
                    </div>
                    <p>
                      No &ldquo;openai alternative&rdquo; or comparison pages. Build /vs-openai,
                      /vs-together-ai, /vs-replicate to capture bottom-of-funnel searchers.
                    </p>
                    <span className="seo-fix-estimate">+1K–10K organic visits/mo</span>
                  </div>
                </div>

                <div className="seo-fix">
                  <div className="seo-fix-rank">#5</div>
                  <div className="seo-fix-body">
                    <div className="seo-fix-header">
                      <h4>Fix Core Web Vitals</h4>
                      <span className="seo-fix-impact seo-fix-impact--medium">Medium-High</span>
                    </div>
                    <p>
                      Mobile performance 52/100. 54–65s of JS main-thread work. Code-split bundles,
                      remove 76 KiB unused CSS, add font-display: swap.
                    </p>
                    <span className="seo-fix-estimate">+5–15% ranking improvement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Programmatic SEO ── */}
            <div className="use-case">
              <div className="use-case-label">6 · Programmatic SEO</div>
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
              <div className="use-case-label">7 · CRO Audit</div>
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
              <div className="use-case-label">8 · Cold Outreach</div>
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
