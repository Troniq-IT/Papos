import * as graphql from "@nestjs/graphql";
import { ThemeResolverBase } from "./base/theme.resolver.base";
import { Theme } from "./base/Theme";
import { ThemeService } from "./theme.service";

@graphql.Resolver(() => Theme)
export class ThemeResolver extends ThemeResolverBase {
  constructor(protected readonly service: ThemeService) {
    super(service);
  }
}
