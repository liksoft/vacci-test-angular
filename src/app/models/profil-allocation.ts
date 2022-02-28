import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';

export class ProfilAllocation
{
  id: string;
  permission_id: number;
  c: number;
  u: number;
  r: number;
  d: number;

/**
   * @param data Instance initializer of object type
   */
  constructor() { }

 /**
  * @description Calls to get the builder provider of the current class|type
  */
  static builder() {
    return new GenericSerializaleSerializer(ProfilAllocation, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof ProfilAllocation } | { [index: string]: any } {
    return {
      id: 'id',
      permission_id: 'permission_id',
      c: 'c',
      u: 'u',
      r: 'r',
      d: 'r',
    } as { [index: string]: keyof ProfilAllocation } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const UserViewModel = (value: ProfilAllocation) => ProfilAllocation.builder().toSerialized(value);

