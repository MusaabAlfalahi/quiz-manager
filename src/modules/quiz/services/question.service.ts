import { Injectable } from "@nestjs/common";
import { Question } from "../entities/question.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "../dtos/createQuestion.dto";
import { Quiz } from "../entities/quiz.entity";

@Injectable()
export class QuestionService {
  constructor(@InjectRepository(Question) private questionRepository: Repository<Question>) {}

  async getQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne({
      where: { id },
      relations: { quiz: true, options: true },
    });
  }

  async create(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: question.question,
    });

    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();

    return newQuestion;
  }
}
