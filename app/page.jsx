const APK_URL =
  'https://github.com/infosec554/speaklivvego-flutter/releases/download/apk-latest/app-release.apk';
const TELEGRAM_URL = 'https://t.me/speaklivego';
const EMAIL = 'infosec554@gmail.com';

/* ── 2D mini-screens (recreated from the real app, not screenshots) ──── */

function LobbyScreen() {
  return (
    <div className="phone-body">
      <div className="m-title">Ready to talk now</div>
      <div className="m-cards">
        <div className="m-card">
          <div className="av av-1">S</div>
          <div className="nm">Sophia</div>
          <div className="st">
            👍 <b>100%</b> · Female
          </div>
          <div className="talk">Talk now</div>
        </div>
        <div className="m-card">
          <div className="av av-2">L</div>
          <div className="nm">Liam</div>
          <div className="st">
            👍 <b>96%</b> · Male
          </div>
          <div className="talk">Talk now</div>
        </div>
      </div>
      <div className="m-title" style={{ marginTop: 12 }}>
        Invite online partners
      </div>
      <div className="m-row">
        <div className="av av-1">A</div>
        <div className="info">
          <div className="nm">Aziza</div>
          <div className="st">
            👍 <b>98%</b> · Female · C1 · 312 talks
          </div>
        </div>
        <div className="m-act">✆</div>
      </div>
      <div className="m-row">
        <div className="av av-2">J</div>
        <div className="info">
          <div className="nm">Jasur</div>
          <div className="st">
            👍 <b>94%</b> · Male · B2 · 158 talks
          </div>
        </div>
        <div className="m-act">✆</div>
      </div>
      <div className="m-find">✦ Find a perfect partner</div>
    </div>
  );
}

function TutorScreen() {
  return (
    <div className="phone-body">
      <div className="t-photo">
        <div className="face">👩‍🏫</div>
        <div className="spk">〰 Speaking…</div>
        <div className="tag">Sophia · 🔊 Australian</div>
      </div>
      <div className="bubble">
        Hi! I&apos;m Sophia, your English tutor. What would you like to talk
        about today?
      </div>
      <div className="bubble me">I goed to market yesterday</div>
      <div className="bubble tip">
        💡 &quot;goed&quot; emas — &quot;went&quot; bo&apos;ladi: “I went to the
        market yesterday.”
      </div>
      <div className="t-bar">
        <div className="side">⌨</div>
        <div className="mic">🎙</div>
        <div className="side">💡</div>
      </div>
    </div>
  );
}

function BandScreen() {
  return (
    <div className="phone-body">
      <div className="m-title">Your result</div>
      <div className="band">
        <div className="lbl">Overall band</div>
        <div className="val">6.5</div>
      </div>
      <div className="crit">
        <span>Fluency &amp; coherence</span>
        <b>6.5</b>
      </div>
      <div className="crit">
        <span>Lexical resource</span>
        <b>6.0</b>
      </div>
      <div className="crit">
        <span>Grammar accuracy</span>
        <b>7.0</b>
      </div>
      <div className="m-find" style={{ marginTop: 10 }}>
        Try again tomorrow — free
      </div>
    </div>
  );
}

function Phone({ children, variant }) {
  return (
    <div className={`phone phone--${variant}`}>
      <div className="notch">
        <i />
      </div>
      {children}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-in">
          <a href="#top" className="brand">
            <img src="/logo.png" alt="Speak Live Go" />
            <span>
              Speak <span className="wm-live">Live</span>
              <span className="wm-go">Go</span>
            </span>
          </a>
          <a className="btn btn-blue btn-sm" href={APK_URL}>
            ⬇ Download
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-in">
            <div>
              <h1>
                Practice English.
                <br />
                Speak with <span className="hl-g">confidence</span> —{' '}
                <span className="hl">every day</span>.
              </h1>
              <p className="sub">
                Talk to real people around the world, take AI-scored IELTS
                speaking mocks and chat with an AI tutor that corrects your
                mistakes in your own language.
              </p>
              <div className="hero-ctas">
                <a className="btn btn-white" href={APK_URL}>
                  ⬇ Download APK
                </a>
                <a className="btn btn-ghost" href="#features">
                  See features
                </a>
              </div>
              <div className="hero-note">
                Free to start · Android (Google Play — coming soon)
              </div>
            </div>

            <div className="phones">
              <Phone variant="back">
                <TutorScreen />
              </Phone>
              <Phone variant="front">
                <LobbyScreen />
              </Phone>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container">
            <div className="kicker">Why Speak Live Go</div>
            <h2>Everything you need to start speaking</h2>
            <p className="lead">
              One app — live partners, an AI examiner and an AI tutor. No
              schedules, no expensive lessons.
            </p>
            <div className="grid">
              <div className="feature">
                <div className="ic">📞</div>
                <h3>Live 1-on-1 calls</h3>
                <p>
                  Find a partner by level, gender and rating — and just talk.
                  Real conversations, real progress.
                </p>
              </div>
              <div className="feature">
                <div className="ic g">🎤</div>
                <h3>AI Speaking Mock</h3>
                <p>
                  A full IELTS-style speaking test: the examiner reads the
                  questions, you answer — AI returns your band with detailed
                  feedback.
                </p>
              </div>
              <div className="feature">
                <div className="ic">🤖</div>
                <h3>AI Tutor</h3>
                <p>
                  Talk or type with a friendly tutor that replies by voice and
                  gently corrects your mistakes — in your native language.
                </p>
              </div>
              <div className="feature">
                <div className="ic g">🏆</div>
                <h3>Rating &amp; community</h3>
                <p>
                  Earn 👍 from partners, climb the leaderboard and build a
                  profile that shows how far you&apos;ve come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI COACH SPLIT */}
        <section className="section alt">
          <div
            className="container"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <div>
              <div className="kicker">AI Coach</div>
              <h2>Know your IELTS band — in 15 minutes, free</h2>
              <p className="lead">
                Part 1, cue card, Part 3 — exactly like the real exam. Instant
                band score, strengths, corrections and advice. One free mock
                every day.
              </p>
              <div style={{ marginTop: 26 }}>
                <a className="btn btn-blue" href={APK_URL}>
                  Try a free mock
                </a>
              </div>
            </div>
            <div className="phones" style={{ minHeight: 480 }}>
              <Phone variant="front">
                <BandScreen />
              </Phone>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container">
            <div className="kicker">How it works</div>
            <h2>Three steps to fluent speaking</h2>
            <div className="steps">
              <div className="step">
                <div className="n">1</div>
                <h3>Create your profile</h3>
                <p>
                  Pick your goal, native language and level — takes one minute.
                </p>
              </div>
              <div className="step">
                <div className="n">2</div>
                <h3>Talk every day</h3>
                <p>
                  Call live partners or practice with the AI tutor whenever you
                  want.
                </p>
              </div>
              <div className="step">
                <div className="n">3</div>
                <h3>Track your growth</h3>
                <p>
                  Weekly AI mocks show your band climbing. Ratings show the
                  world you can talk.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta">
              <h2>Start speaking today — it&apos;s free</h2>
              <p>Your first AI mock and your first conversation are waiting.</p>
              <a className="btn btn-white" href={APK_URL}>
                ⬇ Download Speak Live Go
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" style={{ marginTop: 0 }}>
        <div className="container footer-in">
          <a href="#top" className="brand">
            <img src="/logo.png" alt="Speak Live Go" />
            <span>
              Speak <span className="wm-live">Live</span>
              <span className="wm-go">Go</span>
            </span>
          </a>
          <div className="links">
            <a href={TELEGRAM_URL}>Telegram</a>
            <a href={`mailto:${EMAIL}`}>Contact</a>
            <a href={APK_URL}>Download</a>
          </div>
          <small>© {new Date().getFullYear()} Speak Live Go</small>
        </div>
      </footer>
    </>
  );
}
