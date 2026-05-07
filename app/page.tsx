export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SaaS Founders
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Which Customers Will{' '}
          <span className="text-[#58a6ff]">Cancel</span> — Before They Do
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your Stripe account and get instant churn risk scores for every subscriber. Know who's about to leave and exactly what to do about it.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Predicting Churn — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No credit card required to try.</p>

        {/* Social proof */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
          <div>
            <div className="text-2xl font-bold text-white">87%</div>
            <div className="text-xs text-[#8b949e] mt-1">Churn prediction accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">2 min</div>
            <div className="text-xs text-[#8b949e] mt-1">Setup with Stripe</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">100+</div>
            <div className="text-xs text-[#8b949e] mt-1">Subscribers analyzed</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl bg-[#161b22] p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Stripe API integration in 2 minutes',
              'Churn risk score for every subscriber',
              'AI-powered retention recommendations',
              'Payment pattern analysis',
              'Weekly risk digest via email',
              'Unlimited subscribers',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How does it connect to Stripe?</h3>
            <p className="text-[#8b949e] text-sm">You paste your Stripe restricted API key (read-only). We analyze your subscription events, payment history, and usage patterns — no write access needed.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">How accurate is the churn prediction?</h3>
            <p className="text-[#8b949e] text-sm">Our model achieves ~87% accuracy on SaaS subscription data by analyzing payment failures, downgrade signals, engagement drops, and billing cycle patterns.</p>
          </div>
          <div className="border border-[#21262d] rounded-xl p-6 bg-[#161b22]">
            <h3 className="font-semibold text-white mb-2">Do I need 100+ subscribers to use this?</h3>
            <p className="text-[#8b949e] text-sm">The model works best with 100+ subscribers for statistical significance, but you can start with fewer. Predictions improve as your subscriber base grows.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} Stripe Churn Predictor. All rights reserved.
      </footer>
    </main>
  )
}
