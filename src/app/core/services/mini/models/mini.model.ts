import { Creator } from '@core/services/creator/models';
import { Tag } from '@core/services/tag/models';

export class Mini {
  id: number;
  status?: number;
  name: string;
  creator: Creator;
  thumbnail: string;
  link: string;
  tags?: Tag[];
  relatedMinis?: Mini[];

  constructor(data?: Mini) {
    this.id = data && data.id ? data.id : null;
    this.status = data && data.status ? data.status : null;
    this.name = data && data.name ? data.name : null;
    this.creator = data && data.creator ? data.creator : null;
    this.thumbnail = data && data.thumbnail ? data.thumbnail : null;
    this.link = data && data.link ? data.link : null;
    this.tags = data && data.tags ? data.tags : null;
    this.relatedMinis = data && data.relatedMinis ? data.relatedMinis : null;
  }
}
