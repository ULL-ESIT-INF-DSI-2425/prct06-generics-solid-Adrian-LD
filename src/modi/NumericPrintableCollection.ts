import{PrintableCollection} from './PrintableCollection'


/**
 * Subclase que especializa la clase abstarcat con 
 * el tipo de dato number
 */
export class NumericPrintableCollection extends PrintableCollection<number> {

  /**
   *  Constructor
   * @param number_items secuencia de numeros
   */
  constructor(number_items: number[]) {
    super(number_items);
    this.number_item = number_items;
  }

  /**
   *  Se encarga de imprimir cadenas
   * @returns una cadena separada por comas
   */
  print(): string {
    return this.number_item.join(",");
  }

  private number_item: number[];

}