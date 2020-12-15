export class Tag {
  tagName: string;
  category: number;
  status: number;

  constructor(data?: Tag) {
    this.tagName = data && data.tagName ? data.tagName : null;
    this.category = data && data.category ? data.category : null;
    this.status = data && data.status ? data.status : null;
  }
}
