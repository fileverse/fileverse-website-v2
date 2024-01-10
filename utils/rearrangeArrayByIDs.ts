import { StaticImageData } from 'next/image';

interface FeaturesData {
  id: number;
  image: StaticImageData;
  title: string;
  text: string;
}
export default function rearrangeArrayByIDs(
  objects: FeaturesData[],
  ids: number[]
) {
  const sortedArray = [...objects];

  sortedArray.sort((a, b) => {
    const indexA = ids.indexOf(a.id);
    const indexB = ids.indexOf(b.id);

    if (indexA > indexB) {
      return 1;
    }
    if (indexA < indexB) {
      return -1;
    }
    return 0;
  });

  return sortedArray;
}
