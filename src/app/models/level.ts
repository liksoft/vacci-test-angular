import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';
import { Interfacemodel } from './interfacemodel';

export class Level
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
    return new GenericSerializaleSerializer(Level, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof Level } | { [index: string]: any } {
    return {
      id: 'id',
      label: 'label',
      lat: 'lat',
      lng:'lng',
      timespan :'timespan'
    } as { [index: string]: keyof Level } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const LevelViewModel = (value: Level) => Level.builder().toSerialized(value);

