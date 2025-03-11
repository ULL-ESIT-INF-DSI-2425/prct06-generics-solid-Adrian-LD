// Interfaz Streamable base, que define las operaciones comunes
interface Streamable<T> {
  // Propiedades comunes
  id: string;
  title: string;
  year: number;
  genre: string[];

  // Métodos para realizar búsquedas
  searchByTitle(title: string): T[];
  searchByYear(year: number): T[];
  searchByGenre(genre: string): T[];
}

// Clase abstracta que implementa Streamable y define propiedades y métodos comunes
abstract class BasicStreamableCollection<T> implements Streamable<T> {
  abstract id: string;
  abstract title: string;
  abstract year: number;
  abstract genre: string[];

  // Método de búsqueda por título
  searchByTitle(title: string): T[] {
    return this.filterCollection('title', title);
  }

  // Método de búsqueda por año
  searchByYear(year: number): T[] {
    return this.filterCollection('year', year);
  }

  // Método de búsqueda por género
  searchByGenre(genre: string): T[] {
    return this.filterCollection('genre', genre);
  }

  // Método común para filtrar colecciones
  private filterCollection(field: keyof T, value: any): T[] {
    return this.getCollection().filter(item => item[field] === value);
  }

  // Este método debe ser implementado por las subclases para devolver la colección específica
  protected abstract getCollection(): T[];
}

// Clase concreta para la colección de Series
class SeriesCollection extends BasicStreamableCollection<Series> {
  id: string;
  title: string;
  year: number;
  genre: string[];

  private series: Series[];

  constructor(id: string, title: string, year: number, genre: string[], series: Series[]) {
    super();
    this.id = id;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.series = series;
  }

  protected getCollection(): Series[] {
    return this.series;
  }
}

// Clase concreta para la colección de Películas
class MoviesCollection extends BasicStreamableCollection<Movie> {
  id: string;
  title: string;
  year: number;
  genre: string[];

  private movies: Movie[];

  constructor(id: string, title: string, year: number, genre: string[], movies: Movie[]) {
    super();
    this.id = id;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.movies = movies;
  }

  protected getCollection(): Movie[] {
    return this.movies;
  }
}

// Clase concreta para la colección de Documentales
class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
  id:         string;
  title: string;
  year: number;
  genre: string[];

  private documentaries: Documentary[];

  constructor(id: string, title: string, year: number, genre: string[], documentaries: Documentary[]) {
    super();
    this.id = id;
    this.title = title;
    this.year = year;
    this.genre = genre;
    this.documentaries = documentaries;
  }

  protected getCollection(): Documentary[] {
    return this.documentaries;
  }
}

// Modelos de datos para Series, Películas y Documentales
interface Series {
  id: string;
  title: string;
  year: number;
  genre: string[];
  episodes: number;
}

interface Movie {
  id: string;
  title: string;
  year: number;
  genre: string[];
  duration: number;  // Duración en minutos
}

interface Documentary {
  id: string;
  title: string;
  year: number;
  genre: string[];
  topics: string[];
}

// Ejemplo de uso
const seriesCollection = new SeriesCollection('1', 'Serie A', 2023, ['Drama'], [
  { id: 's1', title: 'Episodio 1', year: 2023, genre: ['Drama'], episodes: 10 },
  { id: 's2', title: 'Episodio 2', year: 2023, genre: ['Drama'], episodes: 12 },
]);

const foundSeries = seriesCollection.searchByYear(2023);
console.log(foundSeries);

const movieCollection = new MoviesCollection('2', 'Película A', 2020, ['Acción'], [
  { id: 'm1', title: 'Película 1', year: 2020, genre: ['Acción'], duration: 120 },
]);

const foundMovies = movieCollection.searchByTitle('Película 1');
console.log(foundMovies);
