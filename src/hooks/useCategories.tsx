import { useQuery } from "react-query";

// export default function useRickAndMortyCharacter(url: string) {
//   return useQuery<CharacterResponse>(["character", url], () => fetch(url).then(res => res.json()));
// }

export default function useCategories(url: string) {
    return useQuery(url, () => fetch(url).then(res => res.json()));
}