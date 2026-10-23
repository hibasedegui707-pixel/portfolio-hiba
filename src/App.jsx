import { useState } from "react";

const projectUrl = "https://buy-joy-path-ml0sw3ae0-hiba-4725.vercel.app";

const skills = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
  { title: "backend", items: ["PHP", "MySQL", "Node.js", "Express.js", "API REST"] },
  { title: "Outils & méthodes", items: ["Git & GitHub", "Responsive design", "Figma", "VS Code"] },
  { title: "Compétences personnelles", items: ["Esprit d’équipe", "Organisation", "Curiosité", "Résolution de problèmes"] },
];

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="section-kicker mb-3">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-slate-50">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl">
        <nav className="container-main flex min-h-[76px] items-center justify-between gap-6">
          <a href="#accueil" onClick={closeMenu} className="flex items-center gap-3" aria-label="Hiba, accueil">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-indigo-600 text-sm font-black text-white shadow-lg shadow-indigo-200">HS</span>
            <span className="font-extrabold tracking-tight text-slate-900">Hiba <span className="text-indigo-600">Sedegui</span></span>
          </a>

          <button
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Ouvrir le menu"
          >
            {menuOpen ? "Fermer" : "Menu"}
          </button>

          <div className={`${menuOpen ? "absolute left-0 right-0 top-[75px] flex flex-col border-b border-slate-200 bg-white p-5 shadow-lg" : "hidden"} gap-6 text-sm font-semibold text-slate-600 md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            <a href="#apropos" onClick={closeMenu} className="transition hover:text-indigo-600">À propos</a>
            <a href="#competences" onClick={closeMenu} className="transition hover:text-indigo-600">Compétences</a>
            <a href="#projets" onClick={closeMenu} className="transition hover:text-indigo-600">Projets</a>
            <a href="#formation" onClick={closeMenu} className="transition hover:text-indigo-600">Formation</a>
            <a href="#contact" onClick={closeMenu} className="rounded-full bg-indigo-600 px-5 py-3 text-center font-bold text-white transition hover:bg-indigo-700">Me contacter</a>
          </div>
        </nav>
      </header>

      <main>
        <section id="accueil" className="relative">
          <div className="soft-grid absolute inset-0 opacity-50" />
          <div className="container-main relative grid min-h-[650px] items-center gap-12 py-20 md:grid-cols-[1.2fr_.8fr] md:py-28">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Portfolio personnel
              </div>
              <p className="mb-4 text-lg font-semibold text-slate-600">Bonjour, je suis</p>
              <h1 className="max-w-3xl text-5xl font-black leading-[1.06] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Hiba <span className="gradient-text">Sedegui.</span>
              </h1>
              <h2 className="mt-6 text-xl font-bold text-slate-700 sm:text-2xl">Développement web & création digitale</h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                J’aime concevoir des expériences web modernes, accessibles et agréables à utiliser. Je transforme les idées en interfaces claires, fonctionnelles et adaptées à tous les écrans.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#projets" className="rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700">Découvrir mes projets ↗</a>
                <a href="/cv-hiba.pdf" download className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700">Télécharger mon CV ↓</a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
                <span className="flex items-center gap-2"><span className="text-indigo-600">✦</span> Curieuse et créative</span>
                <span className="flex items-center gap-2"><span className="text-indigo-600">✦</span> En apprentissage continu</span>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -right-5 -top-5 h-28 w-28 rounded-[2rem] bg-fuchsia-200/70 blur-2xl" />
              <div className="absolute -bottom-7 -left-7 h-32 w-32 rounded-full bg-indigo-200/80 blur-2xl" />
              <div className="card-shadow relative rounded-[2rem] border border-white bg-white p-5">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-500 p-7 text-white">
                  <div className="mb-12 flex items-center justify-between">
                    <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-semibold">Créativité + Code</span>
                    <span className="text-2xl">✳</span>
                  </div>
                  <div className="grid h-28 w-28 place-items-center rounded-[2rem] border border-white/30 bg-white/15 text-4xl font-black backdrop-blur">HS</div>
                  <h3 className="mt-6 text-2xl font-extrabold">Créer. Apprendre. Construire.</h3>
                  <p className="mt-2 text-sm leading-6 text-white/80">Des idées transformées en expériences digitales utiles.</p>
                </div>
                <div className="grid grid-cols-3 gap-3 px-1 pb-1 pt-5 text-center">
                  <div><p className="text-xl font-black text-slate-900">UI</p><p className="mt-1 text-xs text-slate-500">Interface</p></div>
                  <div><p className="text-xl font-black text-slate-900">Web</p><p className="mt-1 text-xs text-slate-500">Développement</p></div>
                  <div><p className="text-xl font-black text-slate-900">UX</p><p className="mt-1 text-xs text-slate-500">Expérience</p></div>
                </div>
              </div>
              <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:block">
                <p className="text-xs font-semibold text-slate-500">Mon approche</p><p className="mt-1 text-sm font-extrabold text-indigo-700">Simple & efficace ✨</p>
              </div>
            </div>
          </div>
        </section>

        <section id="apropos" className="section-space bg-white">
          <div className="container-main grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-start">
            <SectionTitle eyebrow="À propos" title="Un esprit curieux, tourné vers le digital." />
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                Je m’intéresse au développement web et à la création de solutions numériques qui répondent à de vrais besoins. J’accorde de l’importance à la structure du code, à la lisibilité du contenu et à l’expérience des utilisateurs.
              </p>
              <p>
                À travers mes projets, je développe mes compétences techniques, j’expérimente de nouvelles idées et j’améliore progressivement ma manière de concevoir des interfaces web.
              </p>
              <div className="grid gap-4 pt-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <span className="text-2xl">🎯</span>
                  <h3 className="mt-3 font-extrabold text-slate-900">Mon objectif</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">🎯 **Mon objectif**

Mettre en pratique mes compétences en développement web Full-Stack pour concevoir des applications web fonctionnelles et intuitives, tout en continuant à développer mes compétences et à évoluer professionnellement.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <span className="text-2xl">💡</span>
                  <h3 className="mt-3 font-extrabold text-slate-900">Ma motivation</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">

Apprendre continuellement, relever de nouveaux défis et mettre mes compétences en développement Full-Stack au service de projets concrets.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="competences" className="section-space">
          <div className="container-main">
            <SectionTitle eyebrow="Compétences" title="Les outils que j’utilise." description="Une base technique que je continue à enrichir au fil de mes apprentissages et de mes projets." />
            <div className="grid gap-5 md:grid-cols-3">
              {skills.map((group, index) => (
                <article key={group.title} className="card-shadow rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-xl text-indigo-700">{["✦","⌘", "⚙", "✧"][index]}</div>
                  
                  <h3 className="text-lg font-extrabold text-slate-900">{group.title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-600">{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projets" className="section-space bg-white">
          <div className="container-main">
            <SectionTitle eyebrow="Projets" title="Du concret, pas seulement des idées." description="Quelques réalisations qui me permettent de mettre en pratique mes connaissances et de développer mon approche du web." />
            <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50">
              <div className="grid md:grid-cols-2">
                <div className="relative flex min-h-[300px] flex-col justify-between overflow-hidden bg-gradient-to-br from-indigo-700 via-violet-700 to-fuchsia-600 p-8 text-white sm:p-10">
                  <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border-[35px] border-white/10" />
                  <div className="absolute -bottom-16 -left-10 h-56 w-56 rounded-full border-[35px] border-white/10" />
                  <div className="relative flex items-center justify-between">
                    <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-xs font-bold">Projet web</span><span className="text-3xl">↗</span>
                  </div>
                  <div className="relative">
                    <div className="mb-5 flex gap-2"><span className="h-3 w-3 rounded-full bg-rose-300" /><span className="h-3 w-3 rounded-full bg-amber-200" /><span className="h-3 w-3 rounded-full bg-emerald-300" /></div>
                    <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                      <div className="h-3 w-2/3 rounded-full bg-white/70" /><div className="mt-3 h-2 w-1/2 rounded-full bg-white/35" />
                      <div className="mt-6 grid grid-cols-3 gap-3">{[1,2,3].map((n) => <div key={n} className="h-16 rounded-xl bg-white/15" />)}</div>
                    </div>
                  </div>
                </div>
                <div className="p-8 sm:p-10 md:p-12">
                  <p className="section-kicker">Réalisation principale</p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Buy-Joy-Path</h3>
                  <p className="mt-5 leading-7 text-slate-600">Un projet web déployé en ligne, qui me permet de présenter mon travail pratique et de mettre en application mes compétences en création d’interfaces.</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Développement web", "Interface utilisateur", "Projet personnel"].map((item) => <span key={item} className="rounded-full bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700">{item}</span>)}
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a href={projectUrl} target="_blank" rel="noreferrer" className="rounded-full bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-700">Voir le projet ↗</a>
                    <button onClick={() => navigator.clipboard?.writeText(projectUrl)} className="rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700">Copier le lien</button>
                  </div>
                </div>
              </div>
            </article>
            <p className="mt-5 text-sm text-slate-500">Tu peux ajouter d’autres projets en dupliquant cette carte dans le fichier <code className="rounded bg-slate-100 px-1.5 py-1">src/App.jsx</code>.</p>
          </div>
        </section>

        <section id="formation" className="section-space">
          <div className="container-main">
            <SectionTitle eyebrow="Formation" title="Apprendre et progresser." description="Mon parcours académique et mes apprentissages contribuent à construire mes compétences dans le domaine du numérique." />
            <div className="max-w-3xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-indigo-50 text-xl">🎓</div>
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900">Formation académique</h3>
                  <p className="mt-2 leading-7 text-slate-600">Développement Digital  Full-Stack.</p>
                  <p className="mt-2 leading-7 text-slate-600">ISTA  OFPPT | 2024-2026</p>
                  <p className="mt-3 text-sm font-semibold text-indigo-700">Formation en développement web front-end et back-end, avec apprentissage des technologies et des outils nécessaires à la création d’applications web.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

       
<section id="contact" className="section-space bg-slate-950 text-white">
  <div className="container-main">
    <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center">
      <div>
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[.2em] text-indigo-300">
          Contact
        </p>

        <h2 className="max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
        Envie de me contacter ?
        </h2>

        <p className="mt-5 max-w-lg leading-7 text-slate-300">
        N’hésitez pas à me contacter pour échanger ou pour toute opportunité.
          Je serai ravie d’échanger avec vous !
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <p className="text-sm font-semibold text-slate-300">
          Pour me joindre
        </p>

        <p className="mt-2 text-lg font-extrabold">
          Hiba Sedegui
        </p>

        <p className="mt-2 text-sm text-slate-400">
          N’hésite pas à me contacter ou à consulter mon CV.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
  <div className="relative">
    <button
      type="button"
      onClick={() => setShowContactOptions(!showContactOptions)}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-indigo-500"
    >
      Me contacter <span aria-hidden="true">↓</span>
    </button>

    {showContactOptions && (
      <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-900 p-2 sm:absolute sm:left-0 sm:top-full sm:z-20 sm:min-w-48">
   
<a
  href="https://mail.google.com/mail/u/0/?fs=1&to=hibasedegui707@gmail.com&su=Contact%20depuis%20mon%20portfolio&view=cm"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
>
  ✉️ Par e-mail
</a>


        <a
  href="https://wa.me/212691585454"
  target="_blank"
  rel="noreferrer"
  className="rounded-xl px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
>
  WhatsApp ↗
</a>
      </div>
    )}
  </div>

  <a
  href="/cv-hiba.pdf"
  download="CV-Hiba-Sedegui.pdf"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-indigo-100"
>
  Télécharger mon CV <span aria-hidden="true">↓</span>
</a>
</div>

       
      </div>
    </div>
  </div>
</section>

      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center text-sm text-slate-400">
        <div className="container-main flex flex-col justify-between gap-2 sm:flex-row">
          <p>© {new Date().getFullYear()} Hiba Sedegui. Tous droits réservés.</p>
          <a href="#accueil" className="font-semibold transition hover:text-white">Retour en haut ↑</a>
        </div>
      </footer>
    </div>
  );
}