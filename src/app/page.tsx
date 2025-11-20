import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white">
        <div className="text-2xl font-bold">SentryDock</div>
        <nav className="hidden md:flex space-x-4">
          <a href="#pricing" className="text-gray-700">Pricing</a>
          <a href="#monitors" className="text-gray-700">Monitors</a>
          <a href="#news" className="text-gray-700">News</a>
          <a href="#write" className="text-gray-700">Write</a>
          <a href="#sources" className="text-gray-700">Sources</a>
        </nav>
        <div className="flex space-x-2">
          <button className="text-gray-700">Log in</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Create account</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Your AI news analyst gets you the headline before the move.</h1>
        <p className="text-lg mb-8">Every minute</p>
        <div className="flex justify-center space-x-4 mb-8">
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded">Predict</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">India-Pakistan Relations</span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded">Ukraine War Escalation</span>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded">Middle East Tensions</span>
          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded">U.S. Government Shutdown</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded text-lg">Get Started</button>
      </section>

      {/* What should I monitor? */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">What should I monitor?</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Be early to the move</h3>
            <p className="mb-4">Pick a company, market, event, or conflict. Add your trusted sources and we'll find more sources that report news first. As soon as something material happens, you'll get an alert.</p>
            <Image src="https://www.sentrydock.com/monitoring-screenshot.webp" alt="Feature preview" width={400} height={300} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Instant alerts</h3>
            <p className="mb-4">While you focus on your job, our AI checks your sources every few minutes. When something breaks, you get an alert in seconds by email, Slack, or Teams. No more missing the big moves.</p>
            <Image src="https://www.sentrydock.com/tasks-screenshot.webp" alt="Feature preview" width={400} height={300} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Local sources, any language</h3>
            <p className="mb-4">Pick your sources and we'll watch them—plus more that break news first. Auto-translate from 95+ languages with links to originals.</p>
            <Image src="https://www.sentrydock.com/sources-screenshot.webp" alt="Sources modal" width={400} height={300} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Predict what happens next</h3>
            <p className="mb-4">A second brain that thinks ahead. A team of the most powerful AI agents working together, researching hundreds of sources to predict what happens next. See the future before it becomes news.</p>
            <Image src="https://www.sentrydock.com/prediction.webp" alt="Predict feature preview" width={400} height={300} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Daily personalized briefings</h3>
            <p className="mb-4">At 6am and 6pm, get a briefing written just for you. Powered by your monitoring tasks and cites high-quality sources. Like having your own elite analyst focused only on what matters to you.</p>
            <Image src="https://www.sentrydock.com/briefing-screenshot.webp" alt="Briefing preview" width={400} height={300} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Write in your voice, on autopilot</h3>
            <p className="mb-4">Stop getting frustrated with ChatGPT. Powered by your templates and context from your news. Add your notes and images. Our AI writes in your voice and saves you an hour a day.</p>
            <Image src="https://www.sentrydock.com/AiWriting.webp" alt="Write feature preview" width={400} height={300} />
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-sm">Powered by frontier models</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Image src="https://www.sentrydock.com/GoogleSymbol.svg" alt="Google" width={50} height={50} />
            <span>Gemini 2.5 Pro</span>
            <Image src="https://www.sentrydock.com/GrokSymbol.svg" alt="Grok" width={50} height={50} />
            <span>Grok 4</span>
            <Image src="https://www.sentrydock.com/OpenAISymbol.svg" alt="OpenAI" width={50} height={50} />
            <span>o3-Pro</span>
            <Image src="https://www.sentrydock.com/OpenAISymbol.svg" alt="OpenAI" width={50} height={50} />
            <span>GPT-5</span>
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Latest news</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sample news items */}
          <div>
            <h3 className="text-lg font-semibold">Euro Stabilizes, Yen Vulnerable as Dollar Little Changed</h3>
            <p className="text-sm text-gray-600">17m ago seekingalpha.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Meta Platforms: Bargain or Dangerous Overconfidence?</h3>
            <p className="text-sm text-gray-600">32m ago seekingalpha.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">NestAI Secures €100M, Partners with Nokia for Defense AI</h3>
            <p className="text-sm text-gray-600">39m ago @TechCrunch</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Nvidia's Q3 Beats Estimates, AI Bubble Doubts Dismissed</h3>
            <p className="text-sm text-gray-600">47m ago seekingalpha.com</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="text-blue-600">See more</button>
        </div>
      </section>

      {/* Send alerts where your team works */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Send alerts where your team works</h2>
        <p className="text-center mb-8">Connect Slack, Microsoft Teams, and Discord to post results to channels in real time. Everyone sees it. Everyone acts faster.</p>
        <div className="flex justify-center space-x-8">
          <Image src="https://www.sentrydock.com/Slack.webp" alt="Slack" width={100} height={100} />
          <Image src="https://www.sentrydock.com/MicrosoftTeams.webp" alt="Microsoft Teams" width={100} height={100} />
          <Image src="https://www.sentrydock.com/discordLogo.webp" alt="Discord" width={100} height={100} />
        </div>
      </section>

      {/* Core use cases */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Core use cases</h2>
        <p className="text-center mb-8">Start using AI to give you an edge with a team of AI analysts supporting you.</p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Traders</h3>
            <p>Get news before it moves markets with monitoring tasks specific to your focus.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Analysts</h3>
            <p>Use AI to monitor your sources, translating them and saving you time.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Brokers</h3>
            <p>Find out breaking news or escalations first so you can take them to clients.</p>
          </div>
        </div>
      </section>

      {/* Loved for being first */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Loved for being first</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="mb-4">"We put SentryDock at the heart of our daily energy market news briefing, and it works a dream. It is now my go-to source for breaking news. Phenomenal product and team."</p>
          <div className="flex justify-center items-center space-x-4">
            <Image src="https://www.sentrydock.com/SebKennedy.jpg" alt="Seb Kennedy" width={50} height={50} className="rounded-full" />
            <div>
              <p className="font-semibold">Seb Kennedy</p>
              <p className="text-sm text-gray-600">Gas & LNG Analyst, EnergyFlux</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Choose your plan</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Starter</h3>
            <p className="mb-4">Stay up to date on your markets</p>
            <p className="text-2xl font-bold mb-4">$40 per month</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Get Started</button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Pro</h3>
            <p className="mb-4">Beat the market</p>
            <p className="text-2xl font-bold mb-4">$100 $80 per month</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Get Started</button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Ultra</h3>
            <p className="mb-4">Scale your edge</p>
            <p className="text-2xl font-bold mb-4">$200 per month</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Get Started</button>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
            <p className="mb-4">Dominate your market with unlimited monitoring and custom integrations.</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h3 className="text-lg font-semibold">What makes SentryDock different?</h3>
            <p>Your AI news analyst watches local media, global outlets, and social feeds in real time, across languages. It filters noise and taps you when something can move your names.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Which sources can I monitor?</h3>
            <p>Any website or local paper, plus social feeds like X/Twitter, Telegram, and Truth Social. Bring your own sources and we'll help you find more that break news first.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">How fast are alerts?</h3>
            <p>When something breaks, alerts hit in seconds or minutes—often before mainstream coverage. That's the edge: know first, act first.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Can I monitor in any language?</h3>
            <p>Yes. We auto-translate from 95+ languages so you can act on local reports right away.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Do you send daily briefings?</h3>
            <p>Yes. AM/PM briefs written by your AI analyst—focused only on your tickers and themes, with sources.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Can you write reports in my voice?</h3>
            <p>Yes. Drop in your notes and template; your AI writer produces clean updates that sound like you so you spend less time writing and more time trading.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PRODUCT</h3>
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#monitors">Monitors</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#write">Write</a></li>
              <li><a href="#sources">Sources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">SOURCES</h3>
            <ul className="space-y-2">
              <li><a href="#">Reddit</a></li>
              <li><a href="#">𝕏 (Twitter)</a></li>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">Truth Social</a></li>
              <li><a href="#">Local News</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">USE CASES</h3>
            <ul className="space-y-2">
              <li><a href="#">Analysts</a></li>
              <li><a href="#">Brokers</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Public Relations</a></li>
              <li><a href="#">Traders</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Briefings</a></li>
              <li><a href="#">Create task</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>© 2025 SentryDock. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Follow SentryDock on X</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
