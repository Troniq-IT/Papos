/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Theme } from "./Theme";
import { ThemeCountArgs } from "./ThemeCountArgs";
import { ThemeFindManyArgs } from "./ThemeFindManyArgs";
import { ThemeFindUniqueArgs } from "./ThemeFindUniqueArgs";
import { CreateThemeArgs } from "./CreateThemeArgs";
import { UpdateThemeArgs } from "./UpdateThemeArgs";
import { DeleteThemeArgs } from "./DeleteThemeArgs";
import { ThemeDto } from "../ThemeDto";
import { ThemeService } from "../theme.service";
@graphql.Resolver(() => Theme)
export class ThemeResolverBase {
  constructor(protected readonly service: ThemeService) {}

  async _themesMeta(
    @graphql.Args() args: ThemeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Theme])
  async themes(@graphql.Args() args: ThemeFindManyArgs): Promise<Theme[]> {
    return this.service.themes(args);
  }

  @graphql.Query(() => Theme, { nullable: true })
  async theme(
    @graphql.Args() args: ThemeFindUniqueArgs
  ): Promise<Theme | null> {
    const result = await this.service.theme(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Theme)
  async createTheme(@graphql.Args() args: CreateThemeArgs): Promise<Theme> {
    return await this.service.createTheme({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Theme)
  async updateTheme(
    @graphql.Args() args: UpdateThemeArgs
  ): Promise<Theme | null> {
    try {
      return await this.service.updateTheme({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Theme)
  async deleteTheme(
    @graphql.Args() args: DeleteThemeArgs
  ): Promise<Theme | null> {
    try {
      return await this.service.deleteTheme(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => String)
  async CreateTheme(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateTheme(args);
  }

  @graphql.Mutation(() => ThemeDto)
  async CreateThemeNew(
    @graphql.Args()
    args: ThemeDto
  ): Promise<ThemeDto> {
    return this.service.CreateThemeNew(args);
  }

  @graphql.Query(() => String)
  async GetThemes(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetThemes(args);
  }

  @graphql.Query(() => [ThemeDto])
  async GetThemesNew(
    @graphql.Args()
    args: ThemeDto[]
  ): Promise<ThemeDto[]> {
    return this.service.GetThemesNew(args);
  }
}
