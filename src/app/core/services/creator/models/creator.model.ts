import { CreatorSourceSite } from '@core/services/creator/models/creator-sourcesite.model';

export class Creator {
  id: number;
  name: string;
  miniCount?: number;
  sourceSites?: CreatorSourceSite[];
}
