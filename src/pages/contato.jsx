export default function Contato() {
  return (
    <section className="section">
      <h2>Entre em contato</h2>

      <p>
        Ficarei feliz em conversar com você! Preencha o formulário abaixo para dúvidas,
        orientações ou futuras consultas na área de Nutrição em Recife - PE.
      </p>

      <form className="form">
        <input placeholder="Seu nome" required />
        <input placeholder="Seu e-mail" type="email" required />
        <textarea placeholder="Sua mensagem" rows="5" required />
        <button type="submit" className="btn">Enviar mensagem</button>
      </form>
    </section>
  );
}
