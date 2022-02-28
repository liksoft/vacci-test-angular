import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';

export class Articlename
{
  id: string;
  label: string;
  profil_id: number;


/**
   * @param data Instance initializer of object type
   */
  constructor() { }

 /**
  * @description Calls to get the builder provider of the current class|type
  */
  static builder() {
    return new GenericSerializaleSerializer(Articlename, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof Articlename } | { [index: string]: any } {
    return {
      id: 'id',
      label: 'label'
    } as { [index: string]: keyof Articlename } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const ArticlenameViewModel = (value: Articlename) => Articlename.builder().toSerialized(value);

