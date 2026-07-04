export const metadata = { title: 'Privacy Policy — Speak Live Go' };

export default function Privacy() {
  return (
    <main className="container legal">
      <h1>Privacy Policy</h1>
      <div className="upd">Last updated: December 2023</div>

      <p>
        Speak Live Go (&quot;we&quot;, &quot;our&quot;, the &quot;App&quot;)
        helps people practice spoken English with live partners and AI tools.
        This policy explains what we collect, why, and how you stay in
        control.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <b>Account data:</b> email address, display name, and the profile
          details you choose to add (native language, English level, gender,
          age, country, interests, avatar).
        </li>
        <li>
          <b>Usage data:</b> calls started, ratings given and received,
          chat messages you send inside the App, and basic technical logs
          (device type, app version) used to keep the service reliable.
        </li>
        <li>
          <b>AI practice content:</b> when you take an AI speaking mock or
          talk to the AI tutor, your transcribed answers are processed to
          generate scores and feedback.
        </li>
      </ul>

      <h2>2. How we use it</h2>
      <ul>
        <li>To match you with speaking partners and run calls.</li>
        <li>To generate AI band scores, corrections and feedback.</li>
        <li>To protect the community (ratings, block/report, anti-abuse).</li>
        <li>To send essential notifications you can switch off anytime.</li>
      </ul>

      <h2>3. What we never do</h2>
      <ul>
        <li>We never sell your personal data.</li>
        <li>We never post anything on your behalf.</li>
        <li>
          Voice audio in live calls flows peer-to-peer where possible and is
          not recorded by us.
        </li>
      </ul>

      <h2>4. Third-party processors</h2>
      <p>
        AI feedback is generated using trusted AI providers (e.g. Anthropic)
        that process your practice transcripts only to return a score. Push
        notifications use Firebase Cloud Messaging. These providers act as
        processors and do not use your content for advertising.
      </p>

      <h2>5. Data retention &amp; deletion</h2>
      <p>
        You can delete your account anytime in Settings → Delete account.
        This permanently removes your profile, messages, ratings and practice
        history from our servers.
      </p>

      <h2>6. Children</h2>
      <p>
        The App is intended for users aged 13 and over. If you believe a
        younger child is using the App, contact us and we will remove the
        account.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about this policy:{' '}
        <a href="mailto:infosec554@gmail.com">infosec554@gmail.com</a> or{' '}
        <a href="https://t.me/speaklivego">@speaklivego</a> on Telegram.
      </p>

      <p style={{ marginTop: 30 }}>
        <a href="/">← Back to home</a>
      </p>
    </main>
  );
}
