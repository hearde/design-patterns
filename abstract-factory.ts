export abstract class AbstractProductA {
  abstract foo(): void;
}
export abstract class AbstractProductB {
  abstract bar(): void;
}

export abstract class AbstractFactory {
  abstract createProductA(): AbstractProductA;
  abstract createProductB(): AbstractProductB;
}

export class ProductA1 extends AbstractProductA {
  override foo(): void {}
}
export class ProductB1 extends AbstractProductB {
  override bar(): void {}
}

export class ConcreteFactory1 extends AbstractFactory {
  protected constructor() {
    super();
  }

  override createProductA(): AbstractProductA {
    return new ProductA1();
  }

  override createProductB(): AbstractProductB {
    return new ProductB1();
  }

  protected static instance: ConcreteFactory1 | undefined;

  static Instance(): ConcreteFactory1 {
    if (!ConcreteFactory1.instance) {
      ConcreteFactory1.instance = new ConcreteFactory1();
    }
    return ConcreteFactory1.instance;
  }
}

export class ProductA2 extends AbstractProductA {
  override foo(): void {}
}
export class ProductB2 extends AbstractProductB {
  override bar(): void {}
}

export class ConcreteFactory2 extends AbstractFactory {
  protected constructor() {
    super();
  }
  override createProductA(): AbstractProductA {
    return new ProductA2();
  }

  override createProductB(): AbstractProductB {
    return new ProductB2();
  }

  protected static instance: ConcreteFactory2 | undefined;

  static Instance(): ConcreteFactory2 {
    if (!ConcreteFactory2.instance) {
      ConcreteFactory2.instance = new ConcreteFactory2();
    }
    return ConcreteFactory2.instance;
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
    this.myProductB.bar();
  }
}

export function main(): void {
  const myFactory: AbstractFactory = ConcreteFactory1.Instance();
  const client = new Client(myFactory);
  client.foo();
}
