
import { data } from "./prueba.js"


/** 
 * Clase que representa
 */
export class Logger  {
  private actions: data[];

  private static Logger: Logger;

  /**
   * 
   */
  private constructor() {
    this.actions = [];
  }

  /**
   * 
   * @returns 
   */
  public static getInstance(): Logger {
    if (!Logger.Logger) {
      Logger.Logger = new Logger();
    }
    return Logger.Logger;
  }

  /**
   * 
   * @returns 
   */
  getData() {
    return Logger.Logger.actions;
  }


  /**
   * 
   * @param accion 
   */
  setData(accion: data[]) {
    Logger.Logger.actions = accion;
  }
  
  
  /**
   * 
   * @param action 
   */
  addAction(item: data) {
    Logger.Logger.actions.push(item);
  }

  /**
   * 
   * @param nuevousuario 
   * @returns 
   */
 public getUsuarios(nuevousuario: string): data[] {
    return this.actions.filter(action => action.usuario === nuevousuario);
  }


  /**
   * 
   * @param accion_realizada 
   * @returns 
   */
  public getAcciones(accion_realizada: string): data[] {
    return this.actions.filter(a => a.accion === accion_realizada);
  }
 
  /**
   * Metodo publico que se encarga de obetner la fecha entre dos fechas
   * @param fecha intervalo
   * @returns
   */
  public getTime(fecha: Date): data[] {
    return this.actions.filter(a => a.fecha >= fecha);
  }





  
}