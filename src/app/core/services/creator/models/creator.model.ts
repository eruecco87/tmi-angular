export class Creator {
  id: number;
  name: string;

  constructor(data?: Creator) {
    this.id = data && data.id ? data.id : null;
    this.name = data && data.name ? data.name : null;
  }
}
