import { Field, Int, ArgsType } from 'type-graphql';
@ArgsType()
export default class GetCollectionsArgs {
  @Field(type => Int, { defaultValue: 10 })
  limit: number;

  @Field(type => Int, { defaultValue: 0 })
  offset: number;

  @Field({ nullable: true })
  sortByPrice?: string;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  searchText?: string;

  @Field({ nullable: true })
  slug?: string;
}
