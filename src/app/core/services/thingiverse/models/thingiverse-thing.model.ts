export class ThingiverseThing {
  id: number;
  name: string;
  creator: { name: string; public_url: string; thumbnail: string };
  url: string;
  added: string;
  details_parts: any[];
  tags: { name: string; }[];
  license: string;
}
