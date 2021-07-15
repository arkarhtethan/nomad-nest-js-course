import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService) { }

    @Get()
    getAll (): Movie[] {
        return this.moviesService.getAll();
    }

    @Get("search")
    search (@Query('q') title: string) {
        return `We are searching for a movie with a title ${title}`
    }

    @Get("/:id")
    getOne (@Param('id') id: number): Movie {
        return this.moviesService.getOne(id);
    }

    @Post()
    create (@Body() movieData: CreateMovieDto) {
        return this.moviesService.crate(movieData);
    }

    @Delete("/:id")
    remove (@Param('id') id: number) {
        return this.moviesService.deleteOne(id);
    }

    @Patch("/:id")
    update (
        @Param('id') id: number,
        @Body() updateMovie: UpdateMovieDto
    ) {
        return this.moviesService.update(id, updateMovie);
    }

}
