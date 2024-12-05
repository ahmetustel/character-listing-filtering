import CharacterList from "./components/CharacterList";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";

export default async function Home({ searchParams }: { searchParams: any }) {
  const { status, gender, page } = await searchParams;

  const res = await fetch(
    `https://rickandmortyapi.com/api/character?status=${status || ""}&gender=${
      gender || ""
    }&page=${page || 1}`
  );

  let data;
  if (!res.ok) {
    // API isteği başarısız olursa
    data = null;
  } else {
    data = await res.json();
  }

  if (!data || data.error || !data.results) {
    return <div>Bir hata oluştu. Lütfen tekrar deneyin.</div>;
  }

  const characters = data.results;

  return (
    <div>
      <Filters />
      {data && data.results ? (
        <>
          <CharacterList characters={data.results} />
          <Pagination info={data.info} />
        </>
      ) : (
        <div>Bir hata oluştu. Lütfen tekrar deneyin.</div>
      )}
    </div>
  );
}
