import { Body, Injectable, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Option } from "../entities/option.entity";
import { CreateOptionDto } from "../dtos/createOption.dto";
import { Question } from "../entities/question.entity";

@Injectable()
export class OptionService {
  constructor(@InjectRepository(Option) private optionRepository: Repository<Option>) {}

  async createOption(option: CreateOptionDto, question: Question): Promise<Option> {
    const newOption = await this.optionRepository.save({
      text: option.text,
      isCorrect: option.isCorrect,
    });

    question.options = [...question.options, newOption];
    await question.save();

    return newOption;
  }
}
