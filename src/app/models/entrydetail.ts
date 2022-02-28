import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';

export class Entrydetail
{
  id: string;
  qty: number;
  article_id: number = null;
  entry_id: number = null ;


/**
   * @param data Instance initializer of object type
   */
  constructor() { }

 /**
  * @description Calls to get the builder provider of the current class|type
  */
  static builder() {
    return new GenericSerializaleSerializer(Entrydetail, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof Entrydetail } | { [index: string]: any } {
    return {
      id: 'id',
      qty: 'qty' ,
      article_id: 'article_id',
      entry_id: 'entry_id',
    } as { [index: string]: keyof Entrydetail } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const EntrydetailViewModel = (value: Entrydetail) => Entrydetail.builder().toSerialized(value);

