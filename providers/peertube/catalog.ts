import { Catalog } from "../types";

export const catalog: Catalog[] = [
  { title: "Trending", filter: "sort=-trending" },
  { title: "Most Viewed", filter: "sort=-views" },
  { title: "Recently Added", filter: "sort=-publishedAt" },
  { title: "Films", filter: "categoryOneOf=2" },
  { title: "Animation & Kids", filter: "categoryOneOf=17" },
  { title: "Education", filter: "categoryOneOf=13" },
  { title: "Science & Technology", filter: "categoryOneOf=15" },
];

export const genres: Catalog[] = [
  { title: "Films", filter: "categoryOneOf=2" },
  { title: "Comedy", filter: "categoryOneOf=9" },
  { title: "Entertainment", filter: "categoryOneOf=10" },
  { title: "Education", filter: "categoryOneOf=13" },
  { title: "Science & Technology", filter: "categoryOneOf=15" },
  { title: "Kids", filter: "categoryOneOf=17" },
  { title: "Music", filter: "categoryOneOf=1" },
  { title: "Art", filter: "categoryOneOf=4" },
];
