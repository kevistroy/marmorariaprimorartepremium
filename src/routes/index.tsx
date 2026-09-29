import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import heroPretoSaoGabriel from "@/assets/hero-preto-sao-gabriel.jpg";
import logoPrimorArte from "@/assets/logo-primorarte.png";
import brancoNeve from "@/assets/branco-neve.jpg";
import cinzaNevoa from "@/assets/cinza-nevoa.jpg";
import pretoAbsoluto from "@/assets/preto-absoluto.jpg";
import pedraTajMahal from "@/assets/pedra-taj-mahal.jpg";
import marmoreCarrara from "@/assets/marmore-carrara.jpg";
import marmoreCalacatta from "@/assets/marmore-calacatta.jpg";
import marmoreCremaMarfil from "@/assets/marmore-crema-marfil.jpg";
import travertinoRomano from "@/assets/travertino-romano.jpg";
import granitoPretoSaoGabriel from "@/assets/granito-preto-sao-gabriel.jpg";
import granitoCafeImperial from "@/assets/granito-cafe-imperial.jpg";
import granitoBrancoItaunas from "@/assets/granito-branco-itaunas.jpg";
import granitoCinzaCorumba from "@/assets/granito-cinza-corumba.jpg";
import granitoVerdeUbatuba from "@/assets/granito-verde-ubatuba.jpg";
import quartzoCalacattaGold from "@/assets/quartzo-calacatta-gold.jpg";
import quartzoCinzaUrbano from "@/assets/quartzo-cinza-urbano.jpg";
import quartzoPretoStellar from "@/assets/quartzo-preto-stellar.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "PrimorArte Premium — Mármore, Granito e Quartzo",
      },
      {
        name: "description",
        content:
          "Mármore, granito e quartzo selecionados, cortados com precisão e instalados pela nossa equipe. Peça seu orçamento direto pelo WhatsApp.",
      },
      { property: "og:title", content: "PrimorArte Premium" },
      {
        property: "og:description",
        content:
          "Mármore, granito e quartzo sob medida. Orçamento rápido direto pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// WhatsApp da PrimorArte Premium (formato internacional, só dígitos).
const WHATSAPP_NUMBER = "5512988408638";

const MATERIALS = [
  // Mármores
  { name: "Branco Carrara", kind: "Mármore · polido", image: marmoreCarrara },
  { name: "Calacatta", kind: "Mármore · polido", image: marmoreCalacatta },
  { name: "Travertino Romano", kind: "Mármore · fosco", image: travertinoRomano },
  { name: "Crema Marfil", kind: "Mármore · polido", image: marmoreCremaMarfil },
  // Granitos
  {
    name: "Preto São Gabriel",
    kind: "Granito · polido",
    image: granitoPretoSaoGabriel,
  },
  { name: "Preto Absoluto", kind: "Granito · levigado", image: pretoAbsoluto },
  {
    name: "Café Imperial",
    kind: "Granito · polido",
    image: granitoCafeImperial,
  },
  {
    name: "Branco Itaúnas",
    kind: "Granito · polido",
    image: granitoBrancoItaunas,
  },
  { name: "Cinza Névoa", kind: "Granito · escovado", image: cinzaNevoa },
  {
    name: "Cinza Corumbá",
    kind: "Granito · polido",
    image: granitoCinzaCorumba,
  },
  {
    name: "Verde Ubatuba",
    kind: "Granito · polido",
    image: granitoVerdeUbatuba,
  },
  // Quartzos
  { name: "Branco Neve", kind: "Quartzo · fosco", image: brancoNeve },
  {
    name: "Calacatta Gold",
    kind: "Quartzo · brilho",
    image: quartzoCalacattaGold,
  },
  { name: "Cinza Urbano", kind: "Quartzo · fosco", image: quartzoCinzaUrbano },
  {
    name: "Preto Stellar",
    kind: "Quartzo · brilho",
    image: quartzoPretoStellar,
  },
  {
    name: "Pedra Taj Mahal",
    kind: "Quartzito · polido",
    image: pedraTajMahal,
  },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-body text-ice antialiased">
      {/* Luzes ambientes do showroom */}
      <div className="drift-a pointer-events-none absolute -top-24 -left-24 size-[560px] rounded-full bg-brand/10 blur-[130px]" />
      <div className="drift-b pointer-events-none absolute top-1/3 -right-32 size-[520px] rounded-full bg-fog/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 size-[440px] rounded-full bg-white/5 blur-[120px]" />

      <Header />
      <main>
        <Hero />
        <Materials />
        <Budget />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
      <a href="#" className="flex items-center">
        <img
          src={logoPrimorArte}
          alt="PrimorArte Premium"
          width={1152}
          height={576}
          className="h-12 w-auto md:h-14"
        />
      </a>
      <nav className="hidden items-center gap-9 text-sm text-muted-foreground md:flex">
        <a href="#materiais" className="transition hover:text-brand">
          Materiais
        </a>
        <a href="#orcamento" className="transition hover:text-brand">
          Contato
        </a>
      </nav>
      <a
        href="#orcamento"
        className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
      >
        Orçamento
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-8 pb-10 pt-16">
      <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-brand" />
            Pedras naturais · sob medida
          </span>
          <h1 className="rise-in delay-1 mt-6 font-display text-6xl leading-[0.95] md:text-7xl">
            A elegância{" "}
            <em className="not-italic text-brand">eterna</em> da pedra,
            moldada para o seu espaço.
          </h1>
          <p className="rise-in delay-2 mt-6 max-w-md text-lg text-muted-foreground">
            Mármore, granito e quartzo selecionados, com acabamento impecável e
            instalação própria. Do projeto à entrega, com o brilho que sua casa
            merece.
          </p>
          <div className="rise-in delay-3 mt-8 flex flex-wrap gap-3">
            <a
              href="#orcamento"
              className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
            >
              Solicitar orçamento
            </a>
            <a
              href="#materiais"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-ice backdrop-blur-md transition hover:bg-white/10"
            >
              Ver materiais
            </a>
          </div>
          <div className="rise-in delay-4 mt-10 flex gap-8 text-sm text-muted-foreground">
            <div>
            <p className="font-display text-3xl text-ice">+12</p>
              Anos de serviços
            </div>
            <div>
              <p className="font-display text-3xl text-ice">40</p>
              Tipos de pedra
            </div>
            <div>
              <p className="font-display text-3xl text-ice">100%</p>
              Instalação própria
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-white/5 outline-1 -outline-offset-1 outline-white/10">
            <img
              src={heroPretoSaoGabriel}
              alt="Placa de granito Preto São Gabriel iluminada por spot no showroom"
              width={1024}
              height={1280}
              className="size-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-64 rounded-2xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Mais pedido
            </p>
            <p className="font-display text-2xl">Granito Preto São Gabriel</p>
            <p className="text-sm text-muted-foreground">
              Preto uniforme · polido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Materials() {
  return (
    <section id="materiais" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-8 py-16">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brand">
            Paleta de materiais
          </p>
          <h2 className="mt-2 font-display text-4xl">Cores que definem o ambiente</h2>
        </div>
        <p className="hidden max-w-xs text-sm text-muted-foreground md:block">
          Selecione a tonalidade ideal; cada amostra vem da nossa bancada.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MATERIALS.map((material) => (
          <article
            key={material.name}
            className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-transform hover:-translate-y-1"
          >
            <div className="aspect-square overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-white/10">
              <img
                src={material.image}
                alt={`Amostra de ${material.name}`}
                loading="lazy"
                width={1024}
                height={1024}
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <p className="mt-3 font-display text-xl">{material.name}</p>
            <p className="text-xs text-muted-foreground">{material.kind}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Budget() {
  const [nome, setNome] = useState("");
  const [contato, setContato] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const texto = [
      "Olá, PrimorArte Premium! Gostaria de um orçamento.",
      "",
      `Nome: ${nome}`,
      `Contato: ${contato}`,
      mensagem ? `Projeto: ${mensagem}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section id="orcamento" className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-8 pb-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="lg:border-r lg:border-white/10 lg:pr-12">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-brand">
              Orçamento no WhatsApp
            </p>
            <h2 className="mt-2 font-display text-4xl leading-tight">
              Receba sua proposta direto no{" "}
              <span className="text-brand">WhatsApp</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Deixe nome e contato. Nossa equipe envia a análise de materiais e
              valores em minutos — sem compromisso.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li>— Atendimento humano e rápido</li>
              <li>— Envio direto para nosso WhatsApp</li>
              <li>— Orçamento gratuito</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Nome
              </span>
              <input
                type="text"
                required
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                placeholder="Como podemos te chamar?"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ice outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand/60"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                WhatsApp / Telefone
              </span>
              <input
                type="tel"
                required
                value={contato}
                onChange={(event) => setContato(event.target.value)}
                placeholder="(00) 00000-0000"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ice outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand/60"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Sobre o projeto
              </span>
              <textarea
                rows={2}
                value={mensagem}
                onChange={(event) => setMensagem(event.target.value)}
                placeholder="Ex.: bancada de cozinha em mármore branco"
                className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-ice outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-brand/60"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
            >
              Enviar para o WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-8 py-7 text-sm text-muted-foreground md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <img
            src={logoPrimorArte}
            alt="PrimorArte Premium"
            width={1152}
            height={576}
            className="h-14 w-auto"
          />
          <p>© PrimorArte Premium</p>
        </div>
        <p className="text-xs">
          Seg–Qui 8h às 17h30 · Sex 8h às 16h30 · Sáb somente agendado
        </p>
      </div>
    </footer>
  );
}
