import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";
import { CreateOptionDto } from "../dtos/createOption.dto";

@Controller("question/option")
export class OptionController {
  constructor(
    private optionService: OptionService,
    private questionService: QuestionService,
  ) {}

  @Post("")
  @UsePipes(ValidationPipe)
  async saveOptionToQuestion(@Body() option: CreateOptionDto) {
    const question = await this.questionService.getQuestionById(option.questionId);
    return this.optionService.createOption(option, question);
  }
}
