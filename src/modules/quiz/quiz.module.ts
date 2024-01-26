import { Module } from "@nestjs/common";
import { QuizController } from "./controllers/quiz.controller";
import { QuizService } from "./services/quiz.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Quiz } from "./entities/quiz.entity";
import { Question } from "./entities/question.entity";
import { QuestionService } from "./services/question.service";
import { QuestionController } from "./controllers/question.controller";

@Module({
  controllers: [QuizController, QuestionController],
  imports: [TypeOrmModule.forFeature([Quiz, Question])],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
