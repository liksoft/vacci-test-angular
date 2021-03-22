
import { GenericSerializaleSerializer, UndecoratedSerializer } from '../../core/built-value/core/js/serializer';

export class AppConfigs {

  id: number = undefined;
  label: string = undefined;
  value: string = undefined;
  createdAt: string = undefined;
  updatedAt: string = undefined;

  /**
   * @param data Instance initializer of object type
   */
  constructor() { }

  /**
   * @description Calls to get the builder provider of the current class|type
   */
  static builder() {
    return new GenericSerializaleSerializer(AppConfigs, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof AppConfigs } | { [index: string]: any } {
    return {
      id: 'id',
      label: 'label',
      value: 'value',
      updated_at: 'updatedAt',
      created_at: 'createdAt',
    } as { [index: string]: keyof AppConfigs } | { [index: string]: any };
  }
}


/**
 * @inheritdoc
 */
export const appConfigsFormViewModel = () => AppConfigs.builder().toSerialized(this);