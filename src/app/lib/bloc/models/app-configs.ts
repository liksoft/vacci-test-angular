import { ISerializableBuilder, ISerializer } from 'src/app/lib/core/built-value/contracts/serializers';
import { TypeBuilder, buildJSObjectType, rebuildJSObjectType } from 'src/app/lib/core/built-value/contracts/type';
import { ObjectSerializer, JsonProperty } from 'src/app/lib/core/built-value/core/serializers';

export class AppConfigsBuilder implements ISerializableBuilder<AppConfigs>, TypeBuilder<AppConfigs> {
  serializer: ISerializer;

  /**
   *
   */
  constructor() {
    this.serializer = new ObjectSerializer();
  }

  /**
   * @inheritdoc
   */
  fromSerialized(serialized: any): AppConfigs {
    return this.serializer.deserialize(AppConfigs, serialized);
  }

  /**
   * @inheritdoc
   */
  toSerialized(value: AppConfigs) {
    return this.serializer.serialize(AppConfigs, value);
  }

  /**
   * @inheritdoc
   */
  build(bluePrint: new () => AppConfigs, params: object): AppConfigs {
    return buildJSObjectType(bluePrint, params);
  }

  /**
   * @inheritdoc
   */
  rebuild(instance: AppConfigs, params: object | AppConfigs): AppConfigs {
    return rebuildJSObjectType(instance, params);
  }

}


export class AppConfigs {

  @JsonProperty('id')
  id: number = undefined;
  @JsonProperty('label')
  label: string = undefined;
  @JsonProperty('value')
  value: string = undefined;
  @JsonProperty('created_at')
  createdAt: string = undefined;
  @JsonProperty('updated_at')
  updatedAt: string = undefined;

  /**
   * @param data Instance initializer of object type
   */
  constructor() { }

  /**
   * @description Calls to get the builder provider of the current class|type
   */
  static builder(): TypeBuilder<AppConfigs> | ISerializableBuilder<AppConfigs> {
    return new AppConfigsBuilder();
  }

  /**
   * @inheritdoc
   */
  formViewModelBindings(): { [index: string]: any } {
    return (AppConfigs.builder() as ISerializableBuilder<AppConfigs>).toSerialized(this);
  }
}
