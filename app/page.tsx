import Image from "next/image";

const contactHref =
  "mailto:bartek@bartekkowalski.ca?subject=Local%20SMB%20Lead%20Systems%20pilot";

const leadRows = [
  {
    name: "Northline Dental",
    category: "Dental clinic",
    location: "Hamilton, ON",
    score: 91,
    signal: "Low review velocity",
    angle: "Call handling gap",
  },
  {
    name: "Cedar Ridge HVAC",
    category: "Home services",
    location: "Buffalo, NY",
    score: 86,
    signal: "Financing terms found",
    angle: "Payment option follow-up",
  },
  {
    name: "Harbor Stone & Tile",
    category: "Contractor",
    location: "Rochester, NY",
    score: 82,
    signal: "No online booking",
    angle: "Quote workflow audit",
  },
  {
    name: "Maple Grove Med Spa",
    category: "Med spa",
    location: "London, ON",
    score: 78,
    signal: "High-fit category",
    angle: "Local campaign list",
  },
];

const problemPoints = [
  "Messy lists with duplicates and stale data",
  "Generic databases that ignore territory and niche",
  "Manual research spread across maps, websites, and spreadsheets",
  "Bad-fit prospects mixed into the same outreach queue",
  "No clear reason why one lead should be prioritized over another",
  "No workflow from discovery to outreach preparation",
];

const customizations = [
  "Target industries",
  "Cities and regions",
  "Lead scoring criteria",
  "Website signals",
  "Review and rating signals",
  "Buying-intent keywords",
  "CSV or sheet format",
  "CRM and outreach handoff",
  "Optional call workflow",
];

const workflowSteps = [
  {
    title: "Source",
    body: "Pull local businesses from Google Maps and Places by category, city, radius, and territory.",
  },
  {
    title: "Enrich",
    body: "Crawl websites, detect service keywords, review signals, financing language, and missing info.",
  },
  {
    title: "Rank",
    body: "Deduplicate, score fit, and add the reason each lead belongs in the outreach queue.",
  },
];

const pilotOutputs = [
  "500-1,000 ranked leads",
  "CSV or sheet export",
  "Fit scores and reasons",
  "Website, review, and category signals",
  "Suggested outreach angles",
  "Best-opportunity summary",
];

const audiences = [
  "SMB-focused SaaS companies",
  "Financing and payment companies",
  "Web design and SEO agencies",
  "Marketing and lead-gen agencies",
  "POS and software resellers",
  "Commercial service providers",
  "Staffing and recruiting firms",
  "Commercial insurance brokers",
  "Equipment leasing providers",
];

const pilotItems = [
  "500-1,000 ranked leads",
  "One target niche",
  "One geography",
  "Business info",
  "Website, review, and category signals",
  "Custom scoring reasons",
  "Outreach notes or recommended angles",
  "Short summary of best opportunities",
];

function SectionHeading({
  eyebrow,
  title,
  children,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  inverted?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.16em] ${
          inverted ? "text-teal-200" : "text-[#0F766E]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          inverted ? "text-white" : "text-[#111827]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-5 text-lg leading-8 ${
          inverted ? "text-slate-300" : "text-[#475569]"
        }`}
      >
        {children}
      </p>
    </div>
  );
}

function PrimaryCta({ className = "" }: { className?: string }) {
  return (
    <a
      href={contactHref}
      className={`inline-flex min-h-12 items-center justify-center rounded-md bg-[#F59E0B] px-6 py-3 text-sm font-bold text-[#111827] shadow-sm shadow-amber-900/10 transition hover:bg-[#D97706] focus:outline-none focus:ring-4 focus:ring-amber-300 ${className}`}
    >
      Book a pilot
    </a>
  );
}

function FounderBadge() {
  return (
    <div className="inline-flex items-center gap-3 rounded-full border border-[#E5E7EB] bg-white p-1.5 pr-4 text-left shadow-sm shadow-slate-900/5">
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-[#141414] ring-2 ring-[#CCFBF1]">
        <Image
          src="/me.png"
          alt="Portrait of Bartek Kowalski"
          width={96}
          height={96}
          priority
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-[#111827]">
          Local SMB Lead Systems
        </p>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#115E59]">
          Founder-built by Bartek
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF7] text-[#111827]">
      <section className="overflow-hidden border-b border-[#E5E7EB]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:min-h-[92svh] lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:py-10">
          <div className="max-w-3xl">
            <FounderBadge />
            <h1 className="mt-8 text-4xl font-semibold leading-[1.05] tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
              Custom-built lead systems for companies selling to local
              businesses.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-9 text-[#475569]">
              I work directly with your team to build a prospecting workflow
              around your ICP, geography, and sales process, finding,
              enriching, scoring, and preparing local SMB leads for outreach.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryCta className="sm:w-auto" />
              <a
                href="#included"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#CBD5E1] bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition hover:border-[#0F766E] hover:text-[#115E59] focus:outline-none focus:ring-4 focus:ring-teal-100"
              >
                See what&apos;s included
              </a>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-6 text-[#64748B]">
              Built by Bartek Kowalski, software engineer, product manager, and
              startup consultant.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-12 h-40 w-40 rounded-full bg-[#CCFBF1] blur-3xl" />
            <div className="relative rounded-lg border border-[#E5E7EB] bg-white p-3 shadow-2xl shadow-slate-900/10 sm:p-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E7EB] pb-4">
                <div>
                  <p className="text-sm font-semibold text-[#111827]">
                    Example pilot output
                  </p>
                  <p className="text-sm text-[#64748B]">
                    Ranked lead list, not real customer data
                  </p>
                </div>
                <div className="rounded-full bg-[#CCFBF1] px-3 py-1 text-sm font-semibold text-[#115E59]">
                  4 territories
                </div>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[560px] border-separate border-spacing-0 text-left text-sm sm:min-w-[620px]">
                  <thead>
                    <tr className="text-xs uppercase tracking-[0.12em] text-[#64748B]">
                      <th className="py-3 pr-4 font-semibold">Business</th>
                      <th className="py-3 pr-4 font-semibold">Category</th>
                      <th className="py-3 pr-4 font-semibold">Location</th>
                      <th className="py-3 pr-4 font-semibold">Score</th>
                      <th className="py-3 pr-4 font-semibold">Signal</th>
                      <th className="py-3 font-semibold">Angle</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadRows.map((lead) => (
                      <tr key={lead.name} className="border-t border-[#E5E7EB]">
                        <td className="border-t border-[#E5E7EB] py-4 pr-4 font-semibold">
                          {lead.name}
                        </td>
                        <td className="border-t border-[#E5E7EB] py-4 pr-4 text-[#475569]">
                          {lead.category}
                        </td>
                        <td className="border-t border-[#E5E7EB] py-4 pr-4 text-[#475569]">
                          {lead.location}
                        </td>
                        <td className="border-t border-[#E5E7EB] py-4 pr-4">
                          <span className="rounded-full bg-[#0F172A] px-2.5 py-1 text-xs font-bold text-white">
                            {lead.score}
                          </span>
                        </td>
                        <td className="border-t border-[#E5E7EB] py-4 pr-4 text-[#115E59]">
                          {lead.signal}
                        </td>
                        <td className="border-t border-[#E5E7EB] py-4 text-[#475569]">
                          {lead.angle}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "low review count",
                  "no website",
                  "financing keywords",
                  "high-fit category",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-teal-100 bg-[#F8FAFC] px-3 py-1 text-xs font-medium text-[#115E59]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
                The problem
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                SMB sales teams lose hours before outreach even starts.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {problemPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-lg border border-[#E5E7EB] bg-white p-5 text-[#475569] shadow-sm"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Custom workflow"
            title="Your targets are specific. Your lead system should be too."
          >
            This is a custom engagement built around your niche, territory,
            sales process, outreach requirements, and definition of a good lead.
          </SectionHeading>
          <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {customizations.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-lg border border-[#E5E7EB] bg-[#F8FAFC] p-4"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-[#0F766E]" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="included" className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What is included"
            title="One custom workflow. One usable lead list."
          >
            We start with your ICP and territory, then turn local business data
            into ranked outreach rows.
          </SectionHeading>
          <div className="mt-12 overflow-hidden rounded-lg border border-[#E5E7EB] bg-white shadow-sm">
            <div className="grid lg:grid-cols-[0.8fr_1.25fr_0.95fr]">
              <div className="border-b border-[#E5E7EB] bg-[#F8FAFC] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
                  Input
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  Your market constraints
                </h3>
                <div className="mt-6 space-y-3">
                  {["One niche", "One geography", "Your scoring rules"].map(
                    (item) => (
                      <div
                        key={item}
                        className="rounded-md border border-[#E5E7EB] bg-white px-4 py-3 font-medium"
                      >
                        {item}
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="border-b border-[#E5E7EB] p-6 sm:p-8 lg:border-b-0 lg:border-r">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
                  Workflow
                </p>
                <div className="mt-6 space-y-5">
                  {workflowSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="grid grid-cols-[40px_1fr] gap-3 sm:grid-cols-[48px_1fr] sm:gap-4"
                    >
                      <div className="flex flex-col items-center">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F172A] text-sm font-bold text-white sm:h-10 sm:w-10">
                          {index + 1}
                        </span>
                        {index < workflowSteps.length - 1 ? (
                          <span className="mt-3 h-full min-h-8 w-px bg-[#E5E7EB]" />
                        ) : null}
                      </div>
                      <div className="pb-2">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="mt-2 leading-7 text-[#475569]">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0F172A] p-6 text-white sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-200">
                  Output
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                  A ranked list your team can use immediately.
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {pilotOutputs.map((output) => (
                    <span
                      key={output}
                      className="rounded-full border border-slate-600 bg-[#1E293B] px-3 py-1.5 text-sm font-medium text-slate-100"
                    >
                      {output}
                    </span>
                  ))}
                </div>
                <p className="mt-6 border-t border-slate-700 pt-5 text-sm leading-6 text-slate-300">
                  Dashboard, CRM handoff, or calling workflows come after the
                  pilot if they make the system more useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F172A] px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Who it is for"
            title="Built for companies that sell into local SMB markets."
            inverted
          >
            Best fit for teams that already know their market but need a
            repeatable way to find, qualify, and prepare the right accounts.
          </SectionHeading>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-slate-700 bg-slate-700 md:grid-cols-3">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="flex min-h-24 items-center bg-[#1E293B] p-6 text-white"
              >
                <p className="text-lg font-semibold">{audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
              Pilot offer
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Start with a focused 2-week pilot.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#475569]">
              We pick one target niche and one geography. I build and run a
              custom workflow, then deliver a ranked lead list with the signals
              that matter to your sales team.
            </p>
            <p className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 font-semibold text-[#111827]">
              Pilot pricing typically starts around $2,000 depending on scope.
            </p>
          </div>
          <div className="rounded-lg border border-[#E5E7EB] bg-white p-6 shadow-sm">
            <div className="grid gap-3 sm:grid-cols-2">
              {pilotItems.map((item) => (
                <div
                  key={item}
                  className="rounded-md bg-[#F8FAFC] px-4 py-3 font-medium text-[#111827]"
                >
                  {item}
                </div>
              ))}
            </div>
            <PrimaryCta className="mt-6 w-full sm:w-auto" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-lg border border-[#E5E7EB] bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0F766E]">
            Built by Bartek Kowalski
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">
            Founder-led software delivery, from scoping to shipped workflow.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#475569]">
            I&apos;m a software engineer and product manager, currently an
            Associate Product Manager at Questrade. I was a founding engineer
            at CallSmart, worked on full-stack startup software at
            Distributive, and have consulted with teams including YCJ Venture
            Studio, Now Organic Farms, Next Ripple, One Iota Performance,
            Exavalu, Le Techie Consulting, Noble Solutions Enterprises, and
            Flex-Pay.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-lg bg-[#0F172A] px-6 py-14 text-center sm:px-10">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            Want a lead system built around your exact market?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Tell me who you sell to, where you sell, and what makes a good
            lead. I&apos;ll turn that into a focused prospecting workflow.
          </p>
          <PrimaryCta className="mt-8" />
        </div>
      </section>

      <footer className="border-t border-[#E5E7EB] px-6 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full bg-[#141414] ring-2 ring-white">
              <Image
                src="/me.png"
                alt="Portrait of Bartek Kowalski"
                width={88}
                height={88}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#111827]">
                Bartek Kowalski
              </p>
              <p className="text-sm text-[#64748B]">
                Local SMB Lead Systems
              </p>
            </div>
          </div>
          <a
            href={contactHref}
            className="text-sm font-semibold text-[#115E59] transition hover:text-[#0F766E] focus:outline-none focus:ring-4 focus:ring-teal-100"
          >
            bartek@bartekkowalski.ca
          </a>
        </div>
      </footer>
    </main>
  );
}
