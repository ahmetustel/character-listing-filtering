import Image from "next/image";
import { Character } from "../types";

export default function CharacterCard({ character }: { character: Character }) {
  if (!character) {
    return null;
  }

  return (
    <div className="border p-4 rounded shadow">
      {character.image ? (
        <Image
          src={character.image}
          alt={character.name}
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL="/placeholder.png"
        />
      ) : (
        <div>Resim bulunamadı</div>
      )}
      <h2 className="text-xl font-bold">{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
}
