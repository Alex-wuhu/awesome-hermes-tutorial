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
          <span className="section-tag">Setup</span>
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
Using the built-in himalaya skill, first configure my email account,
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

      {/* ── Use Cases ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Use Cases</span>
          <h2>What Can Your Email Agent Do?</h2>
          <p className="section-lead">
            Sending a single draft is just the beginning. Here are real workflows
            you can set up with your Hermes Email Agent &mdash; copy any prompt
            below and try it yourself.
          </p>

          <div className="email-use-cases">
            {/* ── 1. Daily Inbox Digest ── */}
            <div className="email-use-case">
              <div className="email-use-case-label">1 &middot; Automation</div>
              <h3>Daily Inbox Digest at 9 AM</h3>
              <p>
                Set up a <strong>cron job</strong> that triggers every morning
                at 9:00 AM. Hermes reads your inbox, categorizes emails by
                urgency, and delivers a prioritized summary &mdash; so you start
                the day knowing exactly what needs attention.
              </p>
              <CodeBlock
                language="text"
                code={`Create a cron job that runs every day at 9:00 AM
to read my inbox from the last 24 hours and
generate a summary grouped by priority:

🔴 Urgent — needs reply today
🟡 Important — needs reply this week
🟢 FYI — no action needed

For each email, show: sender, subject, one-line
summary, and suggested action. Sort urgent items
by deadline.`}
              />
              <div className="step-img-placeholder">Screenshot coming soon</div>
            </div>

            {/* ── 2. Smart Reply Drafting ── */}
            <div className="email-use-case">
              <div className="email-use-case-label">2 &middot; Productivity</div>
              <h3>Batch-Draft Replies for Unread Emails</h3>
              <p>
                Instead of replying one by one, ask Hermes to scan all unread
                emails and <strong>draft context-aware replies</strong> for each.
                Review them all at once, tweak if needed, then send &mdash; inbox
                zero in minutes instead of hours.
              </p>
              <CodeBlock
                language="text"
                code={`Read all my unread emails. For each one, draft a
reply based on the content:

- If it's a meeting request → accept and confirm
  the time, or suggest an alternative if it
  conflicts with my calendar
- If it's a question → answer it based on context
- If it's a newsletter or notification → skip it

Show me all drafts for review before sending.
Format: Subject | From | Draft Reply`}
              />
            </div>

            {/* ── 3. Inbox Cleanup ── */}
            <div className="email-use-case">
              <div className="email-use-case-label">3 &middot; Maintenance</div>
              <h3>Weekly Inbox Cleanup &amp; Unsubscribe</h3>
              <p>
                Once a week, let Hermes audit your subscriptions. It identifies
                newsletters you never open, promotional emails that pile up, and
                mailing lists you forgot about &mdash; then helps you{' '}
                <strong>unsubscribe and archive in bulk</strong>.
              </p>
              <CodeBlock
                language="text"
                code={`Analyze my inbox from the past 7 days and find:

1. Newsletters & promotional emails — list them
   with sender, frequency, and whether I opened
   or replied to any in the past month
2. Automated notifications (GitHub, Jira, etc.)
   that I never interact with

For each, recommend: Keep / Unsubscribe / Filter.
Then help me unsubscribe from the ones I approve
and create email filters to auto-archive the rest.`}
              />
            </div>

            {/* ── 4. Email Analytics ── */}
            <div className="email-use-case">
              <div className="email-use-case-label">4 &middot; Insights</div>
              <h3>Weekly Email Analytics Report</h3>
              <p>
                Get a data-driven view of your email habits. Hermes counts
                incoming vs outgoing emails, identifies your most frequent
                contacts, measures your average response time, and flags
                emails that have been <strong>waiting for a reply too long</strong>.
              </p>
              <CodeBlock
                language="text"
                code={`Generate a weekly email analytics report for the
past 7 days:

📊 Volume: total received vs sent
👥 Top 5 contacts by email count
⏱️ My average reply time
🚨 Emails older than 48 hours still unanswered
📁 Breakdown by label/category

Present it as a clean summary I can review in
under 2 minutes.`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Extra: GWS CLI ── */}
      <section className="section">
        <div className="section-inner">
          <span className="section-tag">Extra</span>
          <div className="method-header">
            <h2>Google Workspace CLI</h2>
            <span className="method-badge method-badge--advanced">Advanced</span>
          </div>
          <p className="section-lead">
            Want more than just email? The official{' '}
            <a href="https://github.com/googleworkspace/cli" target="_blank" rel="noopener noreferrer">
              Google Workspace CLI
            </a>{' '}
            gives Hermes access to nearly all Google services &mdash; Gmail,
            Calendar, Sheets, Docs, and more.
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
