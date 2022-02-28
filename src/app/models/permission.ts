import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';

export class Permission
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
    return new GenericSerializaleSerializer(Permission, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof Permission } | { [index: string]: any } {
    return {
      id: 'id',
      label: 'label',
      updated_at: 'updatedAt',
      created_at: 'createdAt',
    } as { [index: string]: keyof Permission } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const PermissionViewModel = (value: Permission) => Permission.builder().toSerialized(value);

