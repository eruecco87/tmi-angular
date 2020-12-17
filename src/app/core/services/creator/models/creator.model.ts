export class Creator {
  id: number;
  name: string;
  miniCount?: number;
  sourceSites?: CreatorSourceSite[];

  constructor(data?: Creator) {
    this.id = data && data.id ? data.id : null;
    this.name = data && data.name ? data.name : null;
    this.miniCount = data && data.miniCount ? data.miniCount : null;
  }
}

export class CreatorSourceSite {
  siteName: string;
  url: string;

  constructor(data?: CreatorSourceSite) {
    this.siteName = data && data.siteName ? data.siteName : null;
    this.url = this.url = data && data.url ? data.url : null;
  }
}
