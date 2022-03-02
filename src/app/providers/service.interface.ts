export interface ServiceInterface {
  /**
   *
   *
   * @param value [[Object]] Instance to be TRANSFORMED
   */
  injection<T>(value: Object): Object | any;
}
