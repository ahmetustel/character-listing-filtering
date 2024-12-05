import CharacterCard from "./CharacterCard";
import { Character } from "../types";

export default function CharacterList({
  characters,
}: {
  characters: Character[];
}) {
  // characters dizi mi kontrol et
  if (!Array.isArray(characters)) {
    console.error("characters is not an array");
    return null;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
