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
}
