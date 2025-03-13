import { Collectable } from './collectable';
import { Printable } from './Printable';



/**
 * Clase abstracta generica que implmeneta una interfaz
 * generica como Collectable<T> y otra Printable
 */
export abstract class PrintableCollection<T> implements Printable, Collectable<T> {

  /**
   * 
   * @param elements 
   */
  constructor (elements: T[]) {
    this.items = elements;
  } 
  /**
   * Getter que devuelve la posicion del elemento
   * @param postion Posicion del elemento a bsucar
   * @returns el elemento de la posicion indicada
   */
   getItem(postion: number):T  {
     return this.items[postion];
   }
  
   /**
    *  Se encarga de añadir elementos a la coleccion
    * @param item  Es el parametro T a añdir
    */
   addItem(item: T): void {
     this.items.push(item);
   }
  
   /**
    * Getter para obetner el numero de elementos 
    * añadir
    * @returns La cantidad de elementos que tiene la coleccion
    */
   getNumberOfItems(): number {
    return this.items.length;
   }
  
   /**
    * Funcion que se encargada de eliminar 
    * un elemento en la coleccion
    * @param item  Valor a eliminar
    */
   removeItem(item: T): void {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] === item) {
        this.items.splice(i, 1);  
        break;  
      }
    }
   }
  
   /**
    * Metodo abstracto que se implementa en 
    * las clases mas adelante
    */
   abstract print(): string;
  
    private items: T[];
  }
  
  