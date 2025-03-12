
interface Arithmeticable<T> {
    add(other: T): T;          
    subtract(other: T): T;    
    multiply(other: T): T;     
    divide(other: T): T;      
  }
  
 
  export class ArithmeticableCollection<T extends Arithmeticable<T>> {
    private elements: T[] = [];
  
    addArithmeticable(element: T): void {
      this.elements.push(element);
    }
  
    getArithmeticable(index: number): T {
      if (index < 0 || index >= this.elements.length) {
        throw new Error("Index out of bounds");
      }
      return this.elements[index];
    }
  
    getNumberOfArithmeticables(): number {
      return this.elements.length;
    }
  }

  
  export class Complex implements Arithmeticable<Complex> {
    constructor(public real: number, public imaginary: number) {}
  
    add(other: Complex): Complex {
      return new Complex(
        this.real + other.real,
        this.imaginary + other.imaginary
      );
    }
  
    subtract(other: Complex): Complex {
      return new Complex(
        this.real - other.real,
        this.imaginary - other.imaginary
      );
    }
  
    multiply(other: Complex): Complex {
      return new Complex(
        this.real * other.real - this.imaginary * other.imaginary,
        this.real * other.imaginary + this.imaginary * other.real
      );
    }
  
    divide(other: Complex): Complex {
      const denominator = other.real ** 2 + other.imaginary ** 2;
      if (denominator === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return new Complex(
        (this.real * other.real + this.imaginary * other.imaginary) / denominator,
        (this.imaginary * other.real - this.real * other.imaginary) / denominator
      );
    }
  
    toString(): string {
      return `${this.real} + ${this.imaginary}i`;
    }
  }
  
  
 export class Rational implements Arithmeticable<Rational> {
    constructor(public numerator: number, public denominator: number) {
      if (denominator === 0) {
        throw new Error("No se puede dividiro por zero, error");
      }
    }
  
    add(other: Rational): Rational {
      const newNumerator =
        this.numerator * other.denominator + other.numerator * this.denominator;
      const newDenominator = this.denominator * other.denominator;
      return new Rational(newNumerator, newDenominator);
    }
  
    subtract(other: Rational): Rational {
      const newNumerator =
        this.numerator * other.denominator - other.numerator * this.denominator;
      const newDenominator = this.denominator * other.denominator;
      return new Rational(newNumerator, newDenominator);
    }
  
    multiply(other: Rational): Rational {
      return new Rational(
        this.numerator * other.numerator,
        this.denominator * other.denominator
      );
    }
  
    divide(other: Rational): Rational {
      if (other.numerator === 0) {
        throw new Error("No se puede dividiro por zero, error");
      }
      return new Rational(
        this.numerator * other.denominator,
        this.denominator * other.numerator
      );
    }
  
    toString(): string {
      return `${this.numerator}/${this.denominator}`;
    }
  }
  
