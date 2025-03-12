export interface Streamable<T> {
  searchByName(name: string): T[];
  searchByYear(year: number): T[];
}

export abstract class BasicStreamableCollection<T> implements Streamable<T> {
  private items: T[] = [];

  constructor(initialItems: T[] = []) {
    this.items = initialItems;
  }

  protected getItems(): T[] {
    return this.items;
  }

  addItem(item: T): void {
    this.items.push(item);
  }

  removeItem(item: T, compareFn?: (a: T, b: T) => boolean): void {
    if (compareFn) {
      this.items = this.items.filter((i) => !compareFn(i, item));
    } else {
      this.items = this.items.filter((i) => i !== item);
    }
  }

  abstract searchByName(name: string): T[];
  abstract searchByYear(year: number): T[];
}

export interface Serie {
  name: string;
  year: number;
  seasons: number;
}

export class SeriesCollection extends BasicStreamableCollection<Serie> {
  searchByName(name: string): Serie[] {
    return this.getItems().filter((serie) => serie.name.includes(name));
  }

  searchByYear(year: number): Serie[] {
    return this.getItems().filter((serie) => serie.year === year);
  }

  removeItem(item: Serie): void {
    super.removeItem(item, (a, b) => a.name === b.name && a.year === b.year && a.seasons === b.seasons);
  }
}

export interface Movie {
  name: string;
  year: number;
  duration: number;
}

export class MoviesCollection extends BasicStreamableCollection<Movie> {
  searchByName(name: string): Movie[] {
    return this.getItems().filter((movie) => movie.name.includes(name));
  }

  searchByYear(year: number): Movie[] {
    return this.getItems().filter((movie) => movie.year === year);
  }

  removeItem(item: Movie): void {
    super.removeItem(item, (a, b) => a.name === b.name && a.year === b.year && a.duration === b.duration);
  }
}

export interface Documentary {
  name: string;
  year: number;
  topic: string;
}

export class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
  searchByName(name: string): Documentary[] {
    return this.getItems().filter((doc) => doc.name.includes(name));
  }

  searchByYear(year: number): Documentary[] {
    return this.getItems().filter((doc) => doc.year === year);
  }

  removeItem(item: Documentary): void {
    super.removeItem(item, (a, b) => a.name === b.name && a.year === b.year && a.topic === b.topic);
  }
}