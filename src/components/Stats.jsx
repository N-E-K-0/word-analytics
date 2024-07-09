export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat characterCount={stats.numberOfWords} label="Words" />
      <Stat characterCount={stats.numberOfCharacters} label="Characters" />
      <Stat characterCount={stats.twitterCharactersLeft} label="Twitter" />
      <Stat characterCount={stats.instagramCharactersLeft} label="Instagam" />
      <Stat characterCount={stats.discordCharactersLeft} label="Discord" />
      <Stat characterCount={stats.linkedinCharactersLeft} label="Linkedin" />
    </section>
  );
}

function Stat({ characterCount, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${
          characterCount < 0 ? "stat__number--limit" : ""
        }`}
      >
        {characterCount}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
