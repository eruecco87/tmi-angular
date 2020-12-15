export class PageData {
  title: string;

  constructor(data?: PageData) {
    this.title = data && data.title ? data.title : null;
  }
}
