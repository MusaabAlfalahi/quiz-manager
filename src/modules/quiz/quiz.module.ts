import { Module } from "@nestjs/common";
import { QuizController } from "./controllers/quiz.controller";
import { QuizService } from "./services/quiz.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Quiz } from "./entities/quiz.entity";
import { Question } from "./entities/question.entity";
import { Option } from "./entities/option.entity";
import { QuestionService } from "./services/question.service";
import { QuestionController } from "./controllers/question.controller";
import { OptionController } from "./controllers/option.controller";
import { OptionService } from "./services/option.service";

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question, Option])],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
