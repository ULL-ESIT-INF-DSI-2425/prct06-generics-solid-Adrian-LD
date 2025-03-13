import { describe, it, expect, beforeEach } from 'vitest';
import { NumericPrintableCollection } from '../src/modi/NumericPrintableCollection';

describe('', () => {
  let numericCollection: NumericPrintableCollection;

  beforeEach(() => {
    numericCollection = new NumericPrintableCollection([2, 8, 10]);
  });

  it('Obtener los numeros en la coleccion', () => {
    expect(numericCollection.getNumberOfItems()).toBe(3);
    expect(numericCollection.getItem(0)).toBe(2);
    expect(numericCollection.getItem(1)).toBe(8);
    expect(numericCollection.getItem(2)).toBe(10);
  }); 

  it('Imprimir resultado', () => {
    expect(numericCollection.print()).toBe('2,8,10');
  });

  it('Añadir numero y comprobar', () => {
    numericCollection.addItem(4);
    
    expect(numericCollection.getNumberOfItems()).toBe(4);
    expect(numericCollection.getItem(3)).toBe(4);
  });

  it('Eliminar elemento', () => {
    numericCollection.removeItem(8);

    expect(numericCollection.getNumberOfItems()).toBe(2);
    expect(numericCollection.getItem(0)).toBe(2);
    expect(numericCollection.getItem(1)).toBe(10);
  });

  it('Obtener valores', () => {
    expect(numericCollection.getItem(1)).toBe(8);
  });


});
