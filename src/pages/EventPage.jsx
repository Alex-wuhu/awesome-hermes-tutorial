import PageHero from '../components/PageHero'
import './EventPage.css'

export default function EventPage() {
  return (
    <>
      <PageHero
        tag="Community Event"
        title="Break My AI"
        subtitle="AI builders put their products to the test — live with real users"
      />

      <section className="section">
        <div className="section-inner">
          <div className="event-card">
            <div className="event-card-header">
              <img src="/images/novita-logo.svg" alt="Novita AI" className="event-host-logo" />
              <div className="event-host-info">
                <span className="event-hosted-by">Presented by Novita AI</span>
                <span className="event-hosted-sub">Hosted by Johnny Chin</span>
              </div>
            </div>

            <div className="event-details">
              <div className="event-detail">
                <span className="event-label">Location</span>
                <span className="event-value">San Francisco, California</span>
              </div>
              <div className="event-detail">
                <span className="event-label">Format</span>
                <span className="event-value">In-person · Free entry</span>
              </div>
              <div className="event-detail">
                <span className="event-label">Attendees</span>
                <span className="event-value">100 confirmed</span>
              </div>
            </div>

            <div className="event-schedule">
              <h4>Schedule</h4>
              <div className="event-timeline">
                <div className="event-time-slot">
                  <span className="event-time">5:00 – 5:30 PM</span>
                  <span className="event-activity">Check-in</span>
                </div>
                <div className="event-time-slot">
                  <span className="event-time">5:30 – 8:00 PM</span>
                  <span className="event-activity">Live Testing</span>
                </div>
              </div>
            </div>

            <div className="event-about">
              <h4>About</h4>
              <p>
                Bring your AI product — from side projects to funded startups — and
                get it tested live by real users. No slides, no presentations.
                Just hands-on feedback and real performance insights.
              </p>
              <ul className="event-bring">
                <li>Bring your laptop</li>
                <li>Bring a tangible product to test</li>
                <li>Get direct user feedback</li>
              </ul>
            </div>

            <a
              href="https://luma.com/2lplib7a"
              target="_blank"
              rel="noopener noreferrer"
              className="event-rsvp-btn"
            >
              RSVP on Luma →
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
