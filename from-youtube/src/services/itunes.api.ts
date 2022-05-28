import { ItunesTypes } from "@/types/ITunes.interface";

export const searchTunes = (text: string): Promise<ItunesTypes> =>
  fetch(`https://itunes.apple.com/search?term=${text}&entity=album`).then(
    (val) => val.json()
  );
