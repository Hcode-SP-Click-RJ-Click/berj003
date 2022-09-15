import { Module } from '@nestjs/common/decorators';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
