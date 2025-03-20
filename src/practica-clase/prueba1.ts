
import { data } from "./prueba.js"


/** 
 * Clase que representa las acciones de un usuario
 */
export class Logger  {
  private actions: data[];

  private static Logger: Logger;

  /**
   * Constructor privado para no instanciar mas de una vez
   */
  private constructor() {
    this.actions = [];
  }

  /**
   * Metodo publico para instanicar solo una vez la clase
   * @returns Una unica instancia del objeto
   */
  public static getInstance(): Logger {
    if (!Logger.Logger) {
      Logger.Logger = new Logger();
    }
    return Logger.Logger;
  }

  /**
   * Obtenemos la estructura de las acciones
   * @returns  la estructura
   */
  getData() {
    return Logger.Logger.actions;
  }


  /**
   * Modificar la estrcutura de datos de las acccion
   * @param accion valor a modificar
   */
  setData(accion: data[]) {
    Logger.Logger.actions = accion;
  }
  
  
  /**
   * Añadir nuevos valores a la estructura
   * @param action valores añadir
   */
  addAction(item: data) {
    Logger.Logger.actions.push(item);
  }

  /**
   * Obtener los usuarios
   * @param nuevousuario usuario a bsucar
   * @returns las acciones del usuario
   */
 public getUsuarios(nuevousuario: string): data[] {
    return this.actions.filter(action => action.usuario === nuevousuario);
  }


  /**
   * Obtenemos las acciones realziada 
   * @param accion_realizada, accion realziada por el usuarios
   * @returns las acciones
   */
  public getAcciones(accion_realizada: string): data[] {
    return this.actions.filter(a => a.accion === accion_realizada);
  }
 
  /**
   * Metodo publico que se encarga de obetner la fecha entre dos fechas
   * @param fecha intervalo de timepo
   * @returns las acciones realizadas en ese periodo de tiempo
   */
  public getTime(fecha: Date): data[] {
    return this.actions.filter(a => a.fecha >= fecha);
  }

  
}