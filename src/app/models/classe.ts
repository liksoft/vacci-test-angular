import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';


export class Classe
{
  id: string;
  label: string;
  updated_at: Date;
  created_at:  Date;

/**
   * @param data Instance initializer of object type
   */
  constructor() { }

 /**
  * @description Calls to get the builder provider of the current class|type
  */
  static builder() {
    return new GenericSerializaleSerializer(Classe, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof Classe } | { [index: string]: any } {
    return {
      id: 'id',
      label: 'label',
      updated_at: 'updatedAt',
      created_at: 'createdAt',
    } as { [index: string]: keyof Classe } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const ClasseViewModel = (value: Classe) => Classe.builder().toSerialized(value);

