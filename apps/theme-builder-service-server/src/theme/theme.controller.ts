import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ThemeService } from "./theme.service";
import { ThemeControllerBase } from "./base/theme.controller.base";

@swagger.ApiTags("themes")
@common.Controller("themes")
export class ThemeController extends ThemeControllerBase {
  constructor(protected readonly service: ThemeService) {
    super(service);
  }
}
