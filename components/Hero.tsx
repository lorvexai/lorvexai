import Link from "next/link";
import { ArrowRight, Atom } from "lucide-react";
import NeuralBackground from "@/components/NeuralBackground";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <NeuralBackground />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-24 md:py-32">
        <Reveal>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-secondary/30 px-4 py-2 text-xs uppercase tracking-[0.3em] text-secondary/80">
            <Atom className="h-4 w-4 text-primary" />
            AI Research & Architecture
          </span>
        </Reveal>
        <Reveal>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            Engineering the Future of Intelligent Systems
          </h1>
        </Reveal>
        <Reveal>
          <p className="max-w-2xl text-lg text-secondary/80 md:text-xl">
            Educational AI architecture, LLM engineering notes, and governed agentic-system patterns.
          </p>
        </Reveal>
        <Reveal>
          <div className="flex flex-wrap gap-4">
            <Link href="/books" className="btn-primary">
              Explore Books <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/research" className="btn-outline">
              Read Research
            </Link>
            <Link href="/about" className="btn-outline">
              About Sree
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
