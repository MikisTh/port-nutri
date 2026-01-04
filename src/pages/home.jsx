import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section">
        <h2>Meus diferenciais</h2>

        <div className="cards">
          <div className="card">
            Planos alimentares personalizados e baseados em evidências científicas
          </div>
          <div className="card">
            Acompanhamento humanizado e focado na sua rotina
          </div>
          <div className="card">
            Educação nutricional para resultados duradouros
          </div>
        </div>
      </section>
    </>
  );
}
