import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dtos/createQuiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { Repository } from "typeorm";
import { Question } from "../entities/question.entity";

@Injectable()
export class QuizService {
  constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>) {}

  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository.createQueryBuilder("q").leftJoinAndSelect("q.questions", "qt").getMany();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne({
      where: { id },
      relations: { questions: true },
    });
  }

  async createQuiz(quiz: CreateQuizDto): Promise<Quiz> {
    return await this.quizRepository.save(quiz);
  }
}
