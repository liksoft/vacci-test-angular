import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';

export class User
{
  id: string;
  login: string;
  profil_id: number;
  type: string = null;
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
    return new GenericSerializaleSerializer(User, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof User } | { [index: string]: any } {
    return {
      id: 'id',
      login: 'login',
      profil_id: 'profil_id',
      type: 'type',
      updated_at: 'updatedAt',
      created_at: 'createdAt',
    } as { [index: string]: keyof User } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const UserViewModel = (value: User) => User.builder().toSerialized(value);

