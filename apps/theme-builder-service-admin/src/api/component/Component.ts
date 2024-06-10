import { JsonValue } from "type-fest";

export type Component = {
  content: JsonValue;
  createdAt: Date;
  id: string;
  typeField: string | null;
  updatedAt: Date;
};
