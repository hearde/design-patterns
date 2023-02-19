export abstract class AbstractProductA {
  abstract foo(): void;
}
export abstract class AbstractProductB {
  abstract foo(): void;
}

export abstract class AbstractFactory {
  abstract createProductA(): AbstractProductA;
  abstract createProductB(): AbstractProductB;
}

export class ProductA1 extends AbstractProductA {
  override foo(): void {}
}
export class ProductB1 extends AbstractProductB {
  override foo(): void {}
}

export class ConcreteFactory1 extends AbstractFactory {
  override createProductA(): AbstractProductA {
    return new ProductA1();
  }

  override createProductB(): AbstractProductB {
    return new ProductB1();
  }
}

export class ProductA2 extends AbstractProductA {
  override foo(): void {}
}
export class ProductB2 extends AbstractProductB {
  override foo(): void {}
}

export class ConcreteFactory2 extends AbstractFactory {
  override createProductA(): AbstractProductA {
    return new ProductA2();
  }

  override createProductB(): AbstractProductB {
    return new ProductB2();
  }
}

export class Client {
  private readonly myProductA: AbstractProductA;
  private readonly myProductB: AbstractProductB;

  constructor(myFactory: AbstractFactory) {
    this.myProductA = myFactory.createProductA();
    this.myProductB = myFactory.createProductB();
  }

  foo(): void {
    this.myProductA.foo();
    this.myProductB.foo();
  }
}

export function main(): void {
  const myFactory: AbstractFactory = new ConcreteFactory1();
  const client = new Client(myFactory);
  client.foo();
}
