import { mockGifs } from "./mock-data/gif.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useState } from "react";

export const GifsApp = () => {
  const [previousTerm, setpreviousTerm] = useState(["dragon ball z"]);

  const handleTermClicked = (term: string) => {
    console.log({ term });
  };
  return (
    <>
      <CustomHeader title="Mis Gifs" description="Busca tus gifs favoritos" />

      <SearchBar placeholder="Buscar gifs..." />

      <PreviousSearches
        searches={["Goku", "Vegeta", "Gohan"]}
        onLabelClicked={handleTermClicked}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};
