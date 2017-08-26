export interface IExample {
  hello(): string;
}

export default class Example implements IExample {
  public hello() {
    return "World";
  }
}
