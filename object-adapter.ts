export class Adaptee {
  specificRequest(): void {}
}

export abstract class Target {
  abstract request(): void;
}

export class Adapter extends Target {
  protected readonly adaptee: Adaptee;

  constructor() {
    super();
    this.adaptee = new Adaptee();
  }

  request(): void {
    this.adaptee.specificRequest();
  }
}

export function main(): void {
  const myTarget: Target = new Adapter();
  myTarget.request();
}
