import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { PreviousSearches } from "./shared/components/PreviousSearches";
import { GifList } from "./gifs/components/GifList";
import { useGifs } from "./gifs//hooks/useGifs";

export const GifsApp = () => {
  const { gifs, handleTermClicked, handleSearch, previousTerm } = useGifs();

  return (
    <>
      <CustomHeader title="Mis Gifs" description="Busca tus gifs favoritos" />

      <SearchBar placeholder="Buscar gifs..." onQuery={handleSearch} />

      <PreviousSearches
        searches={previousTerm}
        onLabelClicked={handleTermClicked}
      />

      <GifList gifs={gifs} />
    </>
  );
};
