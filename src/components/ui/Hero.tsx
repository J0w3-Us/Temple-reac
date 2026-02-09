import React from 'react';
import Illustration from './Illustration';
import Button from './Button';

export default function Hero() {
  return (
    <section className="ml-64 mb-8 rounded-md bg-gradient-to-r from-zinc-900/60 to-zinc-900/30 p-10">
      <div className="max-w-6xl grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <h2 className="text-4xl font-extrabold leading-tight">Plantilla de documentación — Canvas</h2>
          <p className="mt-4 text-zinc-300 max-w-xl">
            Documenta tu producto y flujos de datos con una interfaz minimalista y profesional.
            Inspirado en la presentación técnica de OpenAI y Anthropic: limpieza, contraste y foco
            en la legibilidad.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#docs">
              <Button variant="default">Ver especificación</Button>
            </a>
            <a href="/create">
              <Button variant="outline">Comenzar</Button>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 hidden items-center justify-end lg:flex">
          <div className="w-full max-w-md">
            <Illustration className="w-full h-auto rounded-md shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
