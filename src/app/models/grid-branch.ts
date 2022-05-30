import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';

export class GridBranch
{
  id: string;

/**
   * @param data Instance initializer of object type
   */
  constructor() { }

 /**
  * @description Calls to get the builder provider of the current class|type
  */
  static builder() {
    return new GenericSerializaleSerializer(GridBranch, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof GridBranch } | { [index: string]: any } {
    return {
      id: 'id',
     
    } as { [index: string]: keyof GridBranch } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const UserViewModel = (value: GridBranch) => GridBranch.builder().toSerialized(value);

