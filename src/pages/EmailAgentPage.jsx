import PageHero from '../components/PageHero'
import CodeBlock from '../components/CodeBlock'
import Step from '../components/Step'
import './EmailAgentPage.css'

export default function EmailAgentPage() {
  return (
    <>
      <PageHero
        tag="Use Case"
        title="Build an Email Agent"
        subtitle="Automate email drafting, replies, and inbox management with Hermes"
      />

      {/* ── Intro ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Overview</span>
          <h2>Two Ways to Manage Email</h2>
          <p className="section-lead">
            Hermes Agent can manage your email with a single prompt.
            Choose the method that fits your needs &mdash; a quick setup
            with the built-in Himalaya skill, or full Google Workspace
            integration via the official GWS CLI.
          </p>
        </div>
      </section>

      {/* ── Method 1: Himalaya ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Method 1</span>
          <div className="method-header">
            <h2>Himalaya Skill</h2>
            <span className="method-badge method-badge--simple">Simple</span>
          </div>
          <p className="section-lead">
            Hermes has a built-in <strong>himalaya</strong> skill for email
            management. No extra installation required &mdash; just start a
            conversation and give it a prompt.
          </p>

          <div className="steps">
            <Step number={1} title="Send the Prompt and Set Up Gmail">
              <p>
                Launch Hermes and paste the following prompt. The agent will
                guide you through configuring your Gmail account:
              </p>
              <CodeBlock
                language="text"
                code={`You are [Name], one of your daily tasks is managing my email.
Using the himalaya skill, first configure my email account,
then help me read, draft, and send emails.`}
              />
              <figure className="step-screenshot">
                <img src="/images/email_agent/mail_agent1-send prompt and set gmail account.png" alt="Send prompt and set up Gmail account" />
              </figure>
            </Step>

            <Step number={2} title="Create an App Password">
              <p>
                Hermes will ask you to create a Google App Password for
                secure access. Follow the agent&apos;s instructions to
                generate one from your Google Account settings.
              </p>
              <figure className="step-screenshot">
                <img src="/images/email_agent/mail_agent2-create app passward.png" alt="Create Google App Password" />
              </figure>
            </Step>

            <Step number={3} title="Verify Configuration">
              <p>
                Once the app password is entered, Hermes will confirm
                that your email account is configured successfully.
              </p>
              <figure className="step-screenshot">
                <img src="/images/email_agent/email_agenmt_configure_succeed.png" alt="Email agent configuration succeeded" />
              </figure>
            </Step>

            <Step number={4} title="Send Your First Email" last>
              <p>
                Try asking Hermes to send a test email &mdash; you should
                see it land in the recipient&apos;s inbox right away.
              </p>
              <figure className="step-screenshot">
                <img src="/images/email_agent/test_email_from_hermes.png" alt="Test email sent from Hermes" />
              </figure>
            </Step>
          </div>
        </div>
      </section>

      {/* ── Method 2: GWS CLI ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Method 2</span>
          <div className="method-header">
            <h2>Google Workspace CLI</h2>
            <span className="method-badge method-badge--advanced">Advanced</span>
          </div>
          <p className="section-lead">
            The official{' '}
            <a href="https://github.com/googleworkspace/cli" target="_blank" rel="noopener noreferrer">
              Google Workspace CLI
            </a>{' '}
            gives Hermes access to nearly all Google services &mdash; not just
            Gmail, but also Calendar, Sheets, Docs, and more.
          </p>

          <div className="steps">
            <Step number={1} title="Install GWS CLI">
              <p>
                Install the Google Workspace CLI from the official repository:
              </p>
              <CodeBlock
                language="bash"
                code={`# Install the Google Workspace CLI
# See https://github.com/googleworkspace/cli for details
go install github.com/googleworkspace/cli/cmd/gws@latest`}
              />
              <div className="step-img-placeholder">Screenshot coming soon</div>
            </Step>

            <Step number={2} title="Prompt Hermes to Configure Gmail">
              <p>
                Start Hermes and give it the following prompt to set up Gmail
                via the GWS CLI:
              </p>
              <CodeBlock
                language="text"
                code={`You are [Name], one of your daily tasks is managing my email
and productivity tools. Using the gws CLI, first install
https://github.com/googleworkspace/cli and configure my
Gmail account, then help me manage my email.`}
              />
              <div className="step-img-placeholder">Screenshot coming soon</div>
            </Step>

            <Step number={3} title="Beyond Email — Google Workspace" last>
              <p>
                With the GWS CLI, your Hermes Agent can interact with almost
                every Google Workspace service. Here&apos;s what you can do:
              </p>
              <div className="cards">
                <div className="card">
                  <h4>Gmail</h4>
                  <p>
                    Read, draft, send, and organize emails.
                    Automate replies and manage labels.
                  </p>
                </div>
                <div className="card">
                  <h4>Google Calendar</h4>
                  <p>
                    Create events, check availability, send invites,
                    and manage your schedule.
                  </p>
                </div>
                <div className="card">
                  <h4>Google Sheets</h4>
                  <p>
                    Read and write spreadsheet data, generate reports,
                    and automate data entry.
                  </p>
                </div>
                <div className="card">
                  <h4>Google Docs</h4>
                  <p>
                    Create, edit, and format documents.
                    Generate content and summarize files.
                  </p>
                </div>
              </div>
            </Step>
          </div>
        </div>
      </section>
    </>
  )
}
