import { Injectable } from '@angular/core';

// Enums
import { TagCategory, TagStatus } from '@core/services/tag/enums';

// Models
import { Tag } from '@core/services/tag/models'

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor() { }

  public hasCategory(categories: TagCategory[], tags: Tag[]): boolean {

    let hasCategory = false;

    tags.forEach((tag: Tag) => {

      if (categories.indexOf(tag.category) > -1) {

        hasCategory = true;

      }

    });

    return hasCategory;

  }

  public categoryNameToHumanReadable(category: string): string {

    let humanReadable = category[0].toUpperCase();

    for(var i = 1; i < category.length; i++) {

      if(category[i] >= 'A' && category[i] <= 'Z') {

        humanReadable += ' ' + category[i];

      } else if(category[i] == '-' || category[i] == '_') {

        humanReadable += ' ';

      } else {
        humanReadable += category[i];

      }

    }

    return humanReadable;

  }

  public filterTagsByStatus(tags: Tag[], status: TagStatus): Tag[] {

    return tags.filter((tag: Tag) => {

      return tag.status === status;

    });

  }

  public getCategoryTags(category: TagCategory, tags: Tag[], status?: TagStatus): Tag[] {

    let filteredTags = tags.filter((tag: Tag) => {

      return tag.category === category;

    });

    if (status) {

      return this.filterTagsByStatus(filteredTags, status);

    }

    return filteredTags;

  }

  public mergeCategoriesTags(categories: TagCategory[], tags: Tag[], status?: TagStatus): Tag[] {

    let filteredTags =  tags.filter((tag: Tag) => categories.indexOf(tag.category) > -1);

    if (status) {

      return this.filterTagsByStatus(filteredTags, status);

    }

    return filteredTags;

  }
}
