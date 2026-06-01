import { createFileRoute } from "@tanstack/react-router";
import logoAsset from "@/assets/gezen-logo.png.asset.json";
import heroImg from "@/assets/hero-turkey.jpg";
import cappadociaImg from "@/assets/cappadocia.jpg";
import istanbulImg from "@/assets/istanbul.jpg";
import natureImg from "@/assets/nature.jpg";
import powerbankImg from "@/assets/product-powerbank.jpg";
import seedsImg from "@/assets/product-seeds.jpg";
import tentImg from "@/assets/product-tent.jpg";
import journalImg from "@/assets/product-journal.jpg";
import {
  Compass, MapPin, Dices, Search, Sparkles, ShoppingBag,
  Users, Trophy, Bell, Route as RouteIcon, ArrowRight, Star, Download,
} from "lucide-react";

const DOWNLOAD_URL = "https://tinyurl.com/Gezen-indir";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gezen — Türkiye'yi Keşfetmenin Yeni Yolu" },
      { name: "description", content: "Şans çarkı, hazır temalar ve gezgin topluluğu ile rotanı Gezen oluştursun. Türkiye'nin 81 ilini keşfet." },
      { property: "og:title", content: "Gezen — Türkiye'yi Keşfetmenin Yeni Yolu" },
      { property: "og:description", content: "Şans çarkı, hazır temalar ve gezgin topluluğu ile rotanı Gezen oluştursun." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Landing,
});

const fonts = (
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
  />
);

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {fonts}
      <Nav />
      <Hero />
      <Features />
      <Wheel />
      <Themes />
      <Community />
      <Store />
      <CTA />
      <Footer />
    </div>
  );
}

function Logo({ className = "h-10 w-10", framed = false }: { className?: string; framed?: boolean }) {
  if (framed) {
    return (
      <span className={`inline-grid place-items-center rounded-2xl bg-white shadow-soft ring-1 ring-black/5 ${className}`}>
        <img src={logoAsset.url} alt="Gezen logo" className="h-[78%] w-[78%] object-contain" />
      </span>
    );
  }
  return <img src={logoAsset.url} alt="Gezen logo" className={`${className} object-contain`} />;
}

function Nav() {
  const links = [
    ["Özellikler", "#ozellikler"],
    ["Şans Çarkı", "#cark"],
    ["Topluluk", "#topluluk"],
    ["Mağaza", "#magaza"],
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <Logo framed className="h-10 w-10" />
          <span className="font-display text-2xl font-bold tracking-tight text-primary">Gezen</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="hover:text-foreground transition">{l}</a>
          ))}
        </nav>
        <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-glow transition shadow-soft">
          Hemen İndir <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <img src={heroImg} alt="Türkiye sahili" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32 md:pt-36 md:pb-44 text-white">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-medium">
          <Sparkles className="h-3.5 w-3.5" /> Türkiye'nin keşif uygulaması
        </div>
        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] max-w-4xl">
          Rotanı <em className="not-italic text-white/90 italic">Gezen</em><br />oluştursun.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Şans çarkını çevir, hazır temaları keşfet, anılarını biriktir. 81 il, sonsuz rota — hepsi tek bir cep dostu uygulamada.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-7 py-4 font-semibold hover:bg-sand transition shadow-glow">
            <Download className="h-5 w-5" /> Gezen'i İndir
          </a>
          <a href="#ozellikler" className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-7 py-4 font-semibold hover:bg-white/20 transition">
            Keşfet <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        <div className="mt-12 flex items-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
          </div>
          <span>10.000+ gezgin tarafından seviliyor</span>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const items = [
    { icon: Dices, title: "Şans Çarkı", desc: "Karar veremiyorsan çark senin için seçsin. Bugün hangi şehir?" },
    { icon: RouteIcon, title: "Akıllı Rotalar", desc: "Duraklarını ekle, Gezen senin için en güzel güzergahı çizsin." },
    { icon: Search, title: "81 İl Keşfi", desc: "Hazır temalar: Doğa & Kamp, Turistik Yerler, Tarihi Mekanlar." },
    { icon: Users, title: "Gezen Topluluğu", desc: "Anılarını paylaş, başkalarının rotalarından ilham al." },
    { icon: Trophy, title: "Seviye & Unvan", desc: "Gezdikçe puan kazan, Yumurta Sincabı'ndan Usta Gezgin'e yüksel." },
    { icon: ShoppingBag, title: "Gezen Mağazası", desc: "Powerbank, çadır, gezi günlüğü — yola çıkmadan eksiklerini tamamla." },
  ];
  return (
    <section id="ozellikler" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Neler sunuyoruz</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">
            Bir cep dolusu <span className="text-gradient">macera</span>.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Gezen, plan yapmayı sevmeyenler için bile gezmeyi kolay, oyunsu ve paylaşılabilir kılar.
          </p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-3xl border border-border bg-card p-8 hover:shadow-soft hover:-translate-y-1 transition">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wheel() {
  const cities = ["Trabzon", "İzmir", "İstanbul", "Samsun", "Bursa", "Antalya"];
  const colors = ["#1e4d8c", "#e8954a", "#2d6fb5", "#d97843", "#3b82c4", "#c46535"];
  const N = cities.length;
  const cx = 200, cy = 200, r = 180;
  return (
    <section id="cark" className="py-28 md:py-36 bg-ink text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 70% 30%, oklch(0.62 0.16 240 / 0.5), transparent 60%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-glow">Şans Çarkı</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">
            Karar veremiyorsan,<br />çarka bırak.
          </h2>
          <p className="mt-5 text-lg text-white/75 max-w-lg">
            Kendi havuzunu oluştur ya da hazır temaları seç. Çark dönsün, bu hafta sonu seni Trabzon mu, İzmir mi bekliyor?
          </p>
          <ul className="mt-8 space-y-3 text-white/85">
            {["Günlük 3 ücretsiz çevirme hakkı", "81 il + hazır seyahat temaları", "Kendi şehir havuzunu oluştur"].map(i => (
              <li key={i} className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-accent" />{i}</li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-square max-w-md mx-auto w-full">
          {/* Pointer */}
          <div className="absolute left-1/2 -top-2 -translate-x-1/2 z-10">
            <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[24px] border-t-accent drop-shadow-lg" />
          </div>
          <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_30px_60px_rgba(80,140,220,0.4)] animate-[spin_30s_linear_infinite]">
            <defs>
              <filter id="wheelShadow">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
              </filter>
            </defs>
            {cities.map((city, i) => {
              const startAngle = (i * 360) / N - 90;
              const endAngle = ((i + 1) * 360) / N - 90;
              const startRad = (startAngle * Math.PI) / 180;
              const endRad = (endAngle * Math.PI) / 180;
              const x1 = cx + r * Math.cos(startRad);
              const y1 = cy + r * Math.sin(startRad);
              const x2 = cx + r * Math.cos(endRad);
              const y2 = cy + r * Math.sin(endRad);
              const midAngle = (startAngle + endAngle) / 2;
              const midRad = (midAngle * Math.PI) / 180;
              const tx = cx + (r * 0.62) * Math.cos(midRad);
              const ty = cy + (r * 0.62) * Math.sin(midRad);
              return (
                <g key={city}>
                  <path
                    d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`}
                    fill={colors[i]}
                    stroke="white"
                    strokeWidth="2"
                  />
                  <text
                    x={tx}
                    y={ty}
                    fill="white"
                    fontSize="22"
                    fontWeight="700"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${midAngle + 90} ${tx} ${ty})`}
                    style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
                  >
                    {city}
                  </text>
                </g>
              );
            })}
            <circle cx={cx} cy={cy} r={r} fill="none" stroke="white" strokeWidth="4" opacity="0.4" />
          </svg>
          {/* Center hub (not rotating) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-white grid place-items-center shadow-glow ring-4 ring-ink">
            <Compass className="h-10 w-10 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Themes() {
  const cards = [
    { img: istanbulImg, tag: "Tarihi", title: "Tarihi Yarımada", sub: "İstanbul · Payitahtın Kalbi", chips: ["Ayasofya", "Topkapı", "Yerebatan"] },
    { img: cappadociaImg, tag: "Turistik", title: "Kapadokya", sub: "Nevşehir · Peri Bacaları", chips: ["Göreme", "Uçhisar", "Avanos"] },
    { img: natureImg, tag: "Doğa", title: "Karadeniz Yaylaları", sub: "Rize · Yeşilin Tonları", chips: ["Ayder", "Pokut", "Sal"] },
  ];
  return (
    <section className="py-28 md:py-36 bg-sand">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">Popüler keşif rotaları</span>
            <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold max-w-2xl">Hazır temalar, anında ilham.</h2>
          </div>
          <a href="#" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">Tümünü gör <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <article key={c.title} className="group relative overflow-hidden rounded-3xl bg-card shadow-soft hover:shadow-glow transition">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                <span className="absolute top-5 left-5 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  <Trophy className="h-3 w-3" /> 10 PUAN
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-widest text-white/70">{c.tag}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold">{c.title}</h3>
                  <p className="text-sm text-white/80">{c.sub}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.chips.map(ch => (
                      <span key={ch} className="rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs">{ch}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="topluluk" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-glow">
            <img src={istanbulImg} alt="Topluluk" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div className="absolute -bottom-8 -right-4 md:right-8 bg-card rounded-2xl p-5 shadow-soft border border-border max-w-xs">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 grid place-items-center text-primary"><Users className="h-6 w-6" /></div>
              <div>
                <p className="font-bold">Kader Berge</p>
                <p className="text-xs text-muted-foreground">"Bu bayram yollar sevdiklerinize çıksın."</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Gezen Topluluğu</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">
            Yalnız gezme,<br />paylaş.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-lg">
            Anılarını yükle, rotalarını paylaş, başka gezginlerle bağlan. Her keşif puana, her puan yeni bir gezgin unvanına dönüşsün.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { n: "81", l: "İl" },
              { n: "20", l: "Unvan" },
              { n: "10K+", l: "Gezgin" },
            ].map(s => (
              <div key={s.l} className="rounded-2xl border border-border p-5 bg-card">
                <p className="font-display text-4xl font-black text-gradient">{s.n}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Store() {
  const products = [
    { name: "Powerbank Cast LED", price: "750 TL", img: powerbankImg },
    { name: "Çiçek Tohumu", price: "65 TL", img: seedsImg },
    { name: "6 Kişilik Çadır", price: "900 TL", img: tentImg },
    { name: "Gezi Günlüğü", price: "765 TL", img: journalImg },
  ];
  return (
    <section id="magaza" className="py-28 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 20% 80%, white, transparent 50%)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Gezen Mağazası</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl font-bold">Yola çıkmadan, eksiksiz.</h2>
          <p className="mt-5 text-lg text-white/80">Uygulamadan tek dokunuşla. Çadır, powerbank, gezi günlüğü ve daha fazlası.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map(p => (
            <div key={p.name} className="rounded-2xl bg-white text-foreground p-5 hover:-translate-y-1 transition shadow-soft">
              <div className="aspect-square rounded-xl bg-sand overflow-hidden mb-4">
                <img src={p.img} alt={p.name} loading="lazy" width={512} height={512} className="h-full w-full object-cover" />
              </div>
              <p className="font-bold">{p.name}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-primary font-bold">{p.price}</span>
                <button className="rounded-full bg-accent text-accent-foreground px-4 py-1.5 text-xs font-bold hover:opacity-90">Satın Al</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Logo framed className="h-24 w-24 mx-auto" />
        <h2 className="mt-8 font-display text-4xl md:text-7xl font-black">
          Bu hafta sonu<br /><span className="text-gradient">nereye?</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Çarkı çevir, çantanı topla. Gezen cebinde, Türkiye ayağının altında.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary-glow transition shadow-glow">
            <Download className="h-5 w-5" /> Gezen'i Hemen İndir
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground break-all">{DOWNLOAD_URL}</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <Logo framed className="h-9 w-9" />
          <span className="font-display text-xl font-bold text-primary">Gezen</span>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Gezen. Türkiye'de tasarlandı, dünyayı keşfet.</p>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground"><Bell className="h-4 w-4 inline mr-1" />Yardım</a>
          <a href="#" className="hover:text-foreground">Gizlilik</a>
        </div>
      </div>
    </footer>
  );
}
