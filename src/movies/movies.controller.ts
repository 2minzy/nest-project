import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

// 'movies' means router end point
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesServie: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesServie.getAll();
  }

  // must put '/search' above '/:id', otherwise nest consider /search is /:id
  // @Get('/search')
  // search(@Query('year') searchingYear: string) {
  //   return `We are searching for a movie made after: ${searchingYear}`
  // }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesServie.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesServie.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    return this.moviesServie.deleteOne(movieId);
  }

  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesServie.update(movieId, updateData)
  }


}
