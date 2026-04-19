import PageHero from '../components/PageHero'
import './EventPage.css'

export default function EventPage() {
  return (
    <>
      <PageHero
        tag="Community"
        title="Hermes Agent Event"
        subtitle="Join us for hands-on workshops and talks"
      />

      <section className="section">
        <div className="section-inner">
          <div className="event-card">
            <div className="event-card-header">
              <img src="/images/novita-logo.svg" alt="Novita AI" className="event-host-logo" />
              <span className="event-hosted-by">Hosted by Novita AI</span>
            </div>

            <div className="event-details">
              <div className="event-detail">
                <span className="event-label">Date &amp; Time</span>
                <span className="event-value event-tbd">To be announced</span>
              </div>
              <div className="event-detail">
                <span className="event-label">Location</span>
                <span className="event-value event-tbd">To be announced</span>
              </div>
              <div className="event-detail">
                <span className="event-label">RSVP</span>
                <span className="event-value event-tbd">Luma link coming soon</span>
              </div>
            </div>

            <p className="event-description">
              Details coming soon &mdash; stay tuned!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
