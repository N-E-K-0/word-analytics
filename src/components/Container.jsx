import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";
import {
  DISCORD_MAX_CHARACTERS,
  INSTAGRAM_MAX_CHARACTERS,
  LINKEDIN_MAX_CHARACTERS,
  TWITTER_MAX_CHARACTERS,
} from "../lib/constants";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    numberOfCharacters: text.length,
    twitterCharactersLeft: TWITTER_MAX_CHARACTERS - text.length,
    instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
    discordCharactersLeft: DISCORD_MAX_CHARACTERS - text.length,
    linkedinCharactersLeft: LINKEDIN_MAX_CHARACTERS - text.length,
  };
  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
