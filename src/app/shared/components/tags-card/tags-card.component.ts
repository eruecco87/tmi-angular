import { Component, OnInit, Input } from '@angular/core';

// Enums
import { TagCategory, TagStatus } from '@core/services/tag/enums';

// Models
import { Tag } from '@core/services/tag/models';

// Services
import { TagService } from '@core/services/tag/tag.service';

@Component({
  selector: 'app-tags-card',
  templateUrl: './tags-card.component.html',
  styleUrls: ['./tags-card.component.scss']
})
export class TagsCardComponent implements OnInit {

  @Input() cardType: string = 'info';
  @Input() collapsed: boolean = false;
  @Input() name: string;
  @Input() columns: TagCategory[] ;
  @Input() mergeColumns = false;
  @Input() tags: Tag[];
  @Input() status: TagStatus = TagStatus.Approved;

  public tagCategory = TagCategory;

  constructor(
    public tagService: TagService
  ) { }

  ngOnInit(): void { }
}
