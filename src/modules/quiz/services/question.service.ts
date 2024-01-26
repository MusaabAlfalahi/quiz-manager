import { Injectable } from "@nestjs/common";
import { Question } from "../entities/question.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "../dtos/CreateQuestion.dto";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question) private quizRepository: Repository<Question>,
  ) {}

  async create(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {
    const newQuestion = await this.quizRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }
}
