import { GenericSerializaleSerializer, UndecoratedSerializer } from 'src/app/lib/core/built-value/core/js/serializer';

export class Article
{
  id: string;
  article_name_id: number;
  supplier_id: number;
  detail:string = null;
  loop:number = null;
  price:number = null;
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
    return new GenericSerializaleSerializer(Article, new UndecoratedSerializer);
  }

  static getJsonableProperties(): { [index: string]: keyof Article } | { [index: string]: any } {
    return {
      id: 'id',
      article_name_id: 'article_name_id',
      supplier_id: 'supplier_id',
      detail:'detail',
      loop:'loop',
      price:'price',
      updated_at: 'updatedAt',
      created_at: 'createdAt',
    } as { [index: string]: keyof Article } | { [index: string]: any };
  }

}

/**
 * @inheritdoc
 */
 export const ArticleViewModel = (value: Article) => Article.builder().toSerialized(value);

