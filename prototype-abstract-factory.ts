export interface Prototype {
  clone(): this;
}

export abstract class AbstractProductA implements Prototype {
  abstract foo(): void;
  abstract clone(): this;
}
export abstract class AbstractProductB implements Prototype {
  abstract bar(): void;
  abstract clone(): this;
}

export abstract class AbstractFactory {
  abstract createProductA(): AbstractProductA;
  abstract createProductB(): AbstractProductB;
}

export class ProductA1 extends AbstractProductA {
  override foo(): void {}
  override clone(): this {
    return Object.create(this);
  }
}
export class ProductB1 extends AbstractProductB {
  override bar(): void {}
  override clone(): this {
    return Object.create(this);
  }
}

export class ConcreteFactory1 extends AbstractFactory {
  protected prototypeA: AbstractProductA;
  protected prototypeB: AbstractProductB;

  protected constructor(
    prototypeA: AbstractProductA,
    prototypeB: AbstractProductB
  ) {
    super();
    this.prototypeA = prototypeA;
    this.prototypeB = prototypeB;
  }

  override createProductA(): AbstractProductA {
    return this.prototypeA.clone();
  }

  override createProductB(): AbstractProductB {
    return this.prototypeB.clone();
  }

  protected static instance: ConcreteFactory1 | undefined;

  static Instance(): ConcreteFactory1 {
    if (!ConcreteFactory1.instance) {
      ConcreteFactory1.instance = new ConcreteFactory1(
        new ProductA1(),
        new ProductB1()
      );
    }
    return ConcreteFactory1.instance;
  }
}

export class ProductA2 extends AbstractProductA {
  override foo(): void {}
  override clone(): this {
    return Object.create(this);
  }
}
export class ProductB2 extends AbstractProductB {
  override bar(): void {}
  override clone(): this {
    return Object.create(this);
  }
}

export class ConcreteFactory2 extends AbstractFactory {
  protected prototypeA: AbstractProductA;
  protected prototypeB: AbstractProductB;

  protected constructor(
    prototypeA: AbstractProductA,
    prototypeB: AbstractProductB
  ) {
    super();
    this.prototypeA = prototypeA;
    this.prototypeB = prototypeB;
  }

  override createProductA(): AbstractProductA {
    return this.prototypeA.clone();
  }

  override createProductB(): AbstractProductB {
    return this.prototypeB.clone();
  }

  protected static instance: ConcreteFactory2 | undefined;

  static Instance(): ConcreteFactory2 {
    if (!ConcreteFactory2.instance) {
      ConcreteFactory2.instance = new ConcreteFactory2(
        new ProductA2(),
        new ProductB2()
      );
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
