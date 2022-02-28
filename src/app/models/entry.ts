import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';

export class Entry
{
  id: string;
  ref: string = null;
  date: string;

  dateList : string []= ['date'];

/**
   * @param data Instance initializer of object type
   */
  constructor() { }

 /**
  * @description Calls to get the builder provider of the current class|type
  */
  static builder() {
    return new GenericSerializaleSerializer(Entry, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof Entry } | { [index: string]: any } {
    return {
      id: 'id',
      ref: 'ref',
      date: 'date',
    } as { [index: string]: keyof Entry } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const EntryViewModel = (value: Entry) => Entry.builder().toSerialized(value);

