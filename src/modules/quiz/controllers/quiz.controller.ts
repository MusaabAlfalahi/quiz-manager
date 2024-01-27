import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuizService } from "../services/quiz.service";
import { CreateQuizDto } from "../dtos/createQuiz.dto";
import { Quiz } from "../entities/quiz.entity";

@Controller("quiz")
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Get("/")
  getAllQuiz(): Promise<Quiz[]> {
    return this.quizService.getAllQuiz();
  }

  @Get("/:id")
  getQuizById(@Param("id", ParseIntPipe) id: number): Promise<Quiz> {
    return this.quizService.getQuizById(id);
    history;
  }

  @Post("/create")
  @UsePipes(ValidationPipe)
  createQuiz(@Body() quiz: CreateQuizDto): Promise<Quiz> {
    return this.quizService.createQuiz(quiz);
  }
}
