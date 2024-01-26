import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { QuizModule } from "./modules/quiz/quiz.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TypeOrmConfig } from "./config/Typeorm.config";
import { QuestionController } from "./modules/quiz/controllers/question.controller";
import { QuestionService } from "./modules/quiz/services/question.service";

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
