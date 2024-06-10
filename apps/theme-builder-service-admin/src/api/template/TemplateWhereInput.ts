import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TemplateWhereInput = {
  html?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
