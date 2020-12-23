export class ThingiverseFile {
  id: number;
  date: string;
  name: string;
  public_url: string;
  thumbnail: string;
  default_image: { url: string; sizes: { type: string; size: string; url: string; }[]; };
  formatted_size: string;
}
