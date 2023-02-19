export class Adaptee {
  specificRequest(): void {}
}

export interface Target {
  request(): void;
}

export class Adapter extends Adaptee implements Target {
  request(): void {
    this.specificRequest();
  }
}

export function main(): void {
  const myTarget: Target = new Adapter();
  myTarget.request();
}
