import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';
import { ProfilAllocation } from './profil-allocation';


export class Profil
{
  id: string;
  label: string;
  allocations: string|Array < ProfilAllocation > = null ;
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
    return new GenericSerializaleSerializer(Profil, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof Profil } | { [index: string]: any } {
    return {
      id: 'id',
      label: 'label',
      allocations: 'allocations',
    } as { [index: string]: keyof Profil } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const ProfilViewModel = (value: Profil) => Profil.builder().toSerialized(value);

