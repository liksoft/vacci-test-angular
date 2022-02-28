import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';
import { Interfacemodel } from './interfacemodel';

export class Point
{
  id: string;
  label: string;
  lat: number = null;
  lng:number = null ;
  timespan :number = null ;
/**
   * @param data Instance initializer of object type
   */
 constructor() { }

 /**
  * @description Calls to get the builder provider of the current class|type
  */
  static builder() {
    return new GenericSerializaleSerializer(Point, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof Point } | { [index: string]: any } {
    return {
      id: 'id',
      label: 'label',
      lat: 'lat',
      lng:'lng',
      timespan :'timespan'
    } as { [index: string]: keyof Point } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const pointViewModel = (value: Point) => Point.builder().toSerialized(value);

