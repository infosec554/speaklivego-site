const TELEGRAM_URL = 'https://t.me/speaklivego';
const EMAIL = 'infosec554@gmail.com';

/* Download is not public yet — buttons render without a link. */
function Soon({ className, children }) {
  return (
    <span
      className={className}
      title="Coming soon"
      style={{ cursor: 'default' }}
    >
      {children}
    </span>
  );
}

/* ── Realistic phone frame ────────────────────────────────────────────── */

function StatusBar() {
  return (
    <div className="sbar">
      <span>9:41</span>
      <span className="sicons">
        <span className="sig">
          <i />
          <i />
          <i />
          <i />
        </span>
        <svg width="14" height="11" viewBox="0 0 16 12" fill="none">
          <path
            d="M8 9.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM3.5 7.2a6.5 6.5 0 0 1 9 0l-1.6 1.6a4.2 4.2 0 0 0-5.8 0L3.5 7.2zM.8 4.4a10.4 10.4 0 0 1 14.4 0l-1.6 1.6a8.1 8.1 0 0 0-11.2 0L.8 4.4z"
            fill="#0c092a"
          />
        </svg>
        <span className="batt" />
      </span>
    </div>
  );
}

function Phone({ children, className = '' }) {
  return (
    <div className={`phone ${className}`}>
      <div className="screen">
        <div className="island" />
        <StatusBar />
        {children}
      </div>
    </div>
  );
}

/* ── App screens (faithful recreations) ───────────────────────────────── */

function LobbyScreen() {
  return (
    <div className="phone-body">
      <div className="appbar">
        Talk
        <span className="rgt">⛭</span>
      </div>
      <div className="h-sec">Ready to talk now</div>
      <div className="m-cards">
        <div className="m-card">
          <div className="avwrap">
            <img className="av" src="/avatars/sophia.jpg" alt="" />
            <img className="flagdot" src="/flags/us.png" alt="" />
          </div>
          <div className="nm">Sophia</div>
          <div className="st">
            👍 <b>100%</b> · Female
          </div>
          <div className="talk">Talk now</div>
        </div>
        <div className="m-card">
          <div className="avwrap">
            <img className="av" src="/avatars/liam.jpg" alt="" />
            <img className="flagdot" src="/flags/gb.png" alt="" />
          </div>
          <div className="nm">Liam</div>
          <div className="st">
            👍 <b>96%</b> · Male
          </div>
          <div className="talk">Talk now</div>
        </div>
      </div>

      <div className="refresh-line">
        <div className="h-sec" style={{ margin: 0 }}>
          Invite online partners
        </div>
        <div className="refresh-pill">⟳ Refresh</div>
      </div>

      <div className="m-row">
        <div>
          <div className="avwrap">
            <img className="av" src="/avatars/maya.jpg" alt="" />
            <img className="flagdot" src="/flags/in.png" alt="" />
          </div>
          <div className="under on">• online</div>
        </div>
        <div className="info">
          <div className="nm">Aaradhya</div>
          <div className="st">
            👍 <b>98%</b> · Female · C1 · 312 talks
          </div>
        </div>
        <div>
          <div className="m-act">✆</div>
          <div className="m-act-l">CALL</div>
        </div>
      </div>

      <div className="m-row">
        <div>
          <div className="avwrap">
            <img className="av" src="/avatars/efe.jpg" alt="" />
            <img className="flagdot" src="/flags/tr.png" alt="" />
          </div>
          <div className="under">offline</div>
        </div>
        <div className="info">
          <div className="nm">Efe</div>
          <div className="st">
            👍 <b>94%</b> · Male · B2 · 158 talks
          </div>
        </div>
        <div>
          <div className="m-act">🗨</div>
          <div className="m-act-l">MESSAGE</div>
        </div>
      </div>

      <div className="m-find">✦ Find a perfect partner</div>

      <div className="m-nav">
        <div className="it act">
          <span className="ic">⌂</span>Talk
        </div>
        <div className="it">
          <span className="ic">🗨</span>Chats
        </div>
        <div className="it">
          <span className="ai">✦</span>AI Coach
        </div>
        <div className="it">
          <span className="ic">🏆</span>Ranking
        </div>
        <div className="it">
          <span className="ic">☺</span>Profile
        </div>
      </div>
    </div>
  );
}

function TutorScreen() {
  return (
    <div className="phone-body">
      <div className="appbar">
        <span className="lft">‹</span>
        Sophia
        <span className="rgt">⚙</span>
      </div>
      <div className="t-photo">
        <img src="/avatars/tutor.jpg" alt="" />
        <div className="shade" />
        <div className="spk">〰 Speaking…</div>
        <div className="tag">
          Sophia · <img className="tagflag" src="/flags/au.png" alt="" />{' '}
          Australian
        </div>
      </div>
      <div className="bubble">
        Hi! I&apos;m Sophia, your English tutor. What would you like to talk
        about today?
      </div>
      <div className="bubble me">I goed to the market yesterday</div>
      <div className="bubble tip">
        💡 &quot;goed&quot; emas — to&apos;g&apos;risi &quot;went&quot;: “I
        went to the market yesterday.”
      </div>
      <div className="hintchip">💡 What to say?</div>
      <div className="t-bar">
        <div className="side">⌨</div>
        <div className="mic">🎙</div>
        <div className="side">💡</div>
      </div>
    </div>
  );
}

function ResultScreen() {
  return (
    <div className="phone-body">
      <div className="appbar">
        <span className="lft">‹</span>
        Your result
      </div>
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
        <span>Grammatical range</span>
        <b>7.0</b>
      </div>
      <div className="goodline">
        <span className="gi">✔</span>
        <span>Clear structure and confident delivery in Part 2</span>
      </div>
      <div className="goodline">
        <span className="gi">✔</span>
        <span>Good range of linking words</span>
      </div>
      <div className="m-find" style={{ marginTop: 12 }}>
        One free mock every day
      </div>
    </div>
  );
}

function MockScreen() {
  return (
    <div className="phone-body">
      <div className="appbar">
        <span className="lft">‹</span>
        Speaking Mock
        <span className="rgt">01:32</span>
      </div>
      <div className="mk-part">Part 2 · Cue card</div>
      <div className="mk-card">
        <b>Describe a person who inspires you.</b>
        <ul>
          <li>who this person is</li>
          <li>how you know them</li>
          <li>why they inspire you</li>
        </ul>
      </div>
      <div className="mk-read">
        <span className="dot">🔊</span>
        <div>
          <b>Examiner is reading aloud…</b>
          <div className="wave">
            <i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i />
            <i /><i /><i /><i />
          </div>
        </div>
      </div>
      <div className="mk-you">
        <span className="rec" />
        Recording your answer… <b>0:47</b>
      </div>
      <div className="t-bar">
        <div className="side">⏸</div>
        <div className="mic">🎙</div>
        <div className="side">➔</div>
      </div>
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
          <nav className="nav">
            <a href="#features">Features</a>
            <a href="#coach">AI Coach</a>
            <a href="#faq">FAQ</a>
          </nav>
          <Soon className="btn btn-blue btn-sm">⬇ Coming soon</Soon>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="container hero-in">
            <div>
              <div className="hero-badge">
                <b>NEW</b> AI Coach — IELTS band score in 15 minutes
              </div>
              <h1>
                Practice English. Speak with{' '}
                <span className="gword">confidence</span> — every day.
              </h1>
              <p className="sub">
                Talk to real people around the world, take AI-scored IELTS
                speaking mocks and chat with an AI tutor that corrects your
                mistakes in your own language.
              </p>
              <div className="hero-ctas">
                <Soon className="btn btn-white">⬇ Download — soon</Soon>
                <a className="btn btn-ghost" href="#features">
                  See features
                </a>
              </div>
              <div className="trust">
                <div className="avs">
                  <img src="/avatars/sophia.jpg" alt="" />
                  <img src="/avatars/liam.jpg" alt="" />
                  <img src="/avatars/maya.jpg" alt="" />
                  <img src="/avatars/daniel.jpg" alt="" />
                </div>
                <p>
                  <b>Early learners are already talking.</b>
                  <br />
                  Free to start · Android &amp; iOS — coming soon
                </p>
              </div>
            </div>

            <div className="phones">
              <Phone className="phone--back">
                <TutorScreen />
              </Phone>
              <Phone className="phone--front">
                <LobbyScreen />
              </Phone>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="statband">
          <div className="container statband-in">
            <div className="statitem">
              <b>660+</b>
              <span>real IELTS speaking questions</span>
            </div>
            <div className="statitem">
              <b>15 min</b>
              <span>to get your AI band score</span>
            </div>
            <div className="statitem">
              <b>1-on-1</b>
              <span>live calls with real partners</span>
            </div>
            <div className="statitem">
              <b>100%</b>
              <span>free to start, every day</span>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="container center">
            <span className="eyebrow">Why Speak Live Go</span>
            <h2>Everything you need to start speaking</h2>
            <p className="lead">
              One app — live partners, an AI examiner and an AI tutor. No
              schedules, no expensive lessons.
            </p>
            <div className="grid" style={{ textAlign: "left" }}>
              <div className="feature">
                <div className="ic">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <h3>Live 1-on-1 calls</h3>
                <p>
                  Find a partner by level, gender and rating — and just talk.
                  Real conversations, real progress.
                </p>
              </div>
              <div className="feature">
                <div className="ic g">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>
                </div>
                <h3>AI Speaking Mock</h3>
                <p>
                  A full IELTS-style speaking test: the examiner reads the
                  questions, you answer — AI returns your band with detailed
                  feedback.
                </p>
              </div>
              <div className="feature">
                <div className="ic">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8"/><path d="M8 13h5"/></svg>
                </div>
                <h3>AI Tutor</h3>
                <p>
                  Talk or type with a friendly tutor that replies by voice and
                  gently corrects your mistakes — in your native language.
                </p>
              </div>
              <div className="feature">
                <div className="ic g">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
                </div>
                <h3>Rating &amp; community</h3>
                <p>
                  Earn 👍 from partners, climb the leaderboard and build a
                  profile that shows how far you&apos;ve come.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE COMMUNITY SPLIT */}
        <section className="section ice">
          <div className="container split">
            <div className="phones" style={{ minHeight: 600 }}>
              <Phone>
                <LobbyScreen />
              </Phone>
            </div>
            <div>
              <span className="eyebrow">Live community</span>
              <h2>Real people. Real conversations.</h2>
              <p className="lead">
                The Talk tab shows who&apos;s ready to speak right now. Filter
                by level, gender and rating, tap once — and you&apos;re in a
                live call. Every partner has a public rating, so great speakers
                are easy to find.
              </p>
              <ul className="ticks">
                <li>Green “Talk now” — partners searching this second</li>
                <li>👍 ratings and talk counts on every profile</li>
                <li>Block, report and friend controls built in</li>
              </ul>
            </div>
          </div>
        </section>

        {/* AI COACH — dark stage */}
        <section className="stage" id="coach">
          <div className="container center">
            <span className="eyebrow on-dark">AI Coach</span>
            <h2>
              Know your IELTS band —{' '}
              <span className="gword">in 15 minutes</span>, free
            </h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              Part 1, cue card, Part 3 — exactly like the real exam. Instant
              band score, corrections and advice. One free mock every day.
            </p>
            <div className="duo">
              <div className="chip-float chip-a">
                <span className="dot">🎯</span>
                <span>
                  Band 6.5
                  <small>+0.5 this month</small>
                </span>
              </div>
              <div className="chip-float chip-b">
                <span className="dot">💡</span>
                <span>
                  Corrected in Uzbek
                  <small>“goed” → “went”</small>
                </span>
              </div>
              <div className="chip-float chip-c">
                <span className="dot">🔊</span>
                <span>
                  Examiner reads aloud
                  <small>you just speak</small>
                </span>
              </div>
              <Phone>
                <MockScreen />
              </Phone>
              <Phone>
                <ResultScreen />
              </Phone>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section ice">
          <div className="container center">
            <span className="eyebrow">Early users</span>
            <h2>What learners say</h2>
            <div className="grid" style={{ textAlign: "left" }}>
              <div className="quote">
                <div className="stars">★★★★★</div>
                <p>
                  “I took my first AI mock and got Band 5.5. Three weeks of
                  daily calls later — 6.0. Seeing the number move keeps me
                  going.”
                </p>
                <div className="qwho">
                  <img src="/avatars/daniel.jpg" alt="" />
                  <div>
                    <b>Jasur</b>
                    <span>IELTS candidate, Tashkent</span>
                  </div>
                </div>
              </div>
              <div className="quote">
                <div className="stars">★★★★★</div>
                <p>
                  “The AI tutor corrects me in Uzbek, so I actually understand
                  my mistakes. It feels like a patient teacher who is never
                  tired.”
                </p>
                <div className="qwho">
                  <img src="/avatars/maya.jpg" alt="" />
                  <div>
                    <b>Madina</b>
                    <span>University student</span>
                  </div>
                </div>
              </div>
              <div className="quote">
                <div className="stars">★★★★★</div>
                <p>
                  “I was scared to talk to strangers. The ratings helped me find
                  kind partners — now I speak every evening after work.”
                </p>
                <div className="qwho">
                  <img src="/avatars/liam.jpg" alt="" />
                  <div>
                    <b>Bekzod</b>
                    <span>Software engineer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section">
          <div className="container center">
            <span className="eyebrow">How it works</span>
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

        {/* FAQ */}
        <section className="section ice" id="faq">
          <div className="container center">
            <span className="eyebrow">FAQ</span>
            <h2>Frequently asked questions</h2>
            <div className="faq" style={{ textAlign: "left" }}>
              <details open>
                <summary>Is Speak Live Go really free?</summary>
                <p>
                  Yes. Live 1-on-1 calls are unlimited and free. The AI Coach
                  gives you one full IELTS speaking mock every day and a daily
                  AI-tutor allowance — also free. A Premium plan with unlimited
                  AI practice will come later, but the core of the app stays
                  free.
                </p>
              </details>
              <details>
                <summary>How accurate is the AI band score?</summary>
                <p>
                  The AI examiner scores you on the official IELTS speaking
                  criteria — fluency &amp; coherence, lexical resource and
                  grammatical range — and explains exactly what held your band
                  down. Treat a single mock as a strong practice estimate; take
                  one every day and the <b>trend</b> becomes very reliable.
                </p>
              </details>
              <details>
                <summary>Do I need to schedule lessons?</summary>
                <p>
                  No — that&apos;s the point. Open the Talk tab and you see who
                  is ready to speak <b>this second</b>: tap once and
                  you&apos;re in a call. No bookings, no calendars, no
                  waiting for a teacher. The AI Coach is awake 24/7 too.
                </p>
              </details>
              <details>
                <summary>I&apos;m a beginner — can I still use it?</summary>
                <p>
                  Absolutely. You set your level (A1–C2) during onboarding and
                  the app matches you with partners at a similar level, so
                  nobody feels judged. The AI tutor adapts its vocabulary to
                  you, corrects gently and explains every mistake in your
                  native language.
                </p>
              </details>
              <details>
                <summary>Which languages does the AI tutor explain in?</summary>
                <p>
                  Your own. Pick your native language during onboarding —
                  Uzbek, Russian, Turkish, Hindi, Arabic, Spanish and more —
                  and every correction comes with an explanation in that
                  language, so you understand <b>why</b> it was wrong, not just
                  what to say instead.
                </p>
              </details>
              <details>
                <summary>How do partner ratings work?</summary>
                <p>
                  After every call both sides leave quick feedback. Each
                  profile shows a public 👍 percentage and a talk count, so you
                  can see at a glance who is friendly, patient and worth
                  calling. Great speakers rise; rude ones don&apos;t get calls.
                </p>
              </details>
              <details>
                <summary>What about bad behaviour on calls?</summary>
                <p>
                  Three layers of protection: public ratings make bad actors
                  visible, <b>Block</b> and <b>Report</b> are one tap away
                  during and after any call, and blocked users can never call
                  or message you again. Repeat offenders are banned.
                </p>
              </details>
              <details>
                <summary>When can I download it?</summary>
                <p>
                  We&apos;re finishing the final polish before the store
                  release. Follow{' '}
                  <a href={TELEGRAM_URL}>@speaklivego on Telegram</a> — the
                  download link will be published there first, and early
                  followers get their profiles in before everyone else.
                </p>
              </details>
              <p className="faq-more">
                Still have questions? Write to us —{' '}
                <a href={TELEGRAM_URL}>@speaklivego</a> on Telegram or{' '}
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta">
              <h2>Start speaking today — it&apos;s free</h2>
              <p>
                Your first AI mock and your first conversation are waiting.
              </p>
              <a className="btn btn-white" href={TELEGRAM_URL}>
                ✈ Follow @speaklivego
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="#top" className="brand">
                <img src="/logo.png" alt="Speak Live Go" />
                <span>
                  Speak <span className="wm-live">Live</span>
                  <span className="wm-go">Go</span>
                </span>
              </a>
              <p className="tagline">
                Live English speaking practice with real people — plus an AI
                examiner and tutor in your pocket.
              </p>
            </div>
            <div className="fcol">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#coach">AI Coach</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="fcol">
              <h4>Contact</h4>
              <a href={TELEGRAM_URL}>Telegram — @speaklivego</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
            </div>
          </div>
          <div className="footer-bar">
            <span>© 2023 Speak Live Go. All rights reserved.</span>
            <span>Made for English learners, everywhere.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
