import { describe, it, expect, beforeEach } from 'vitest';
import { SeriesCollection, MoviesCollection, DocumentariesCollection } from '/src/ejercicio-clase';

describe('SeriesCollection', () => {
  let seriesCollection: SeriesCollection;

  beforeEach(() => {
    seriesCollection = new SeriesCollection([
      { name: 'Breaking Bad', year: 2008, seasons: 5 },
      { name: 'Game of Thrones', year: 2011, seasons: 8 },
      { name: 'Stranger Things', year: 2016, seasons: 4 },
    ]);
  });

  it('should search series by name', () => {
    const result = seriesCollection.searchByName('Thrones');
    expect(result).toEqual([{ name: 'Game of Thrones', year: 2011, seasons: 8 }]);
  });

  it('should search series by year', () => {
    const result = seriesCollection.searchByYear(2016);
    expect(result).toEqual([{ name: 'Stranger Things', year: 2016, seasons: 4 }]);
  });

  it('should add a new series', () => {
    seriesCollection.addItem({ name: 'The Witcher', year: 2019, seasons: 2 });
    expect(seriesCollection.searchByName('Witcher')).toEqual([{ name: 'The Witcher', year: 2019, seasons: 2 }]);
  });

  it('should remove a series', () => {
    seriesCollection.removeItem({ name: 'Breaking Bad', year: 2008, seasons: 5 });
    expect(seriesCollection.searchByName('Breaking Bad')).toEqual([]);
  });
});

describe('MoviesCollection', () => {
  let moviesCollection: MoviesCollection;

  beforeEach(() => {
    moviesCollection = new MoviesCollection([
      { name: 'Inception', year: 2010, duration: 148 },
      { name: 'The Dark Knight', year: 2008, duration: 152 },
      { name: 'Interstellar', year: 2014, duration: 169 },
    ]);
  });

  it('should search movies by name', () => {
    const result = moviesCollection.searchByName('Dark');
    expect(result).toEqual([{ name: 'The Dark Knight', year: 2008, duration: 152 }]);
  });

  it('should search movies by year', () => {
    const result = moviesCollection.searchByYear(2014);
    expect(result).toEqual([{ name: 'Interstellar', year: 2014, duration: 169 }]);
  });

  it('should add a new movie', () => {
    moviesCollection.addItem({ name: 'Dunkirk', year: 2017, duration: 106 });
    expect(moviesCollection.searchByName('Dunkirk')).toEqual([{ name: 'Dunkirk', year: 2017, duration: 106 }]);
  });

  it('should remove a movie', () => {
    moviesCollection.removeItem({ name: 'Inception', year: 2010, duration: 148 });
    expect(moviesCollection.searchByName('Inception')).toEqual([]);
  });
});

describe('DocumentariesCollection', () => {
  let documentariesCollection: DocumentariesCollection;

  beforeEach(() => {
    documentariesCollection = new DocumentariesCollection([
      { name: 'Planet Earth', year: 2006, topic: 'Nature' },
      { name: 'The Social Dilemma', year: 2020, topic: 'Technology' },
      { name: '13th', year: 2016, topic: 'Social Justice' },
    ]);
  });

  it('should search documentaries by name', () => {
    const result = documentariesCollection.searchByName('Earth');
    expect(result).toEqual([{ name: 'Planet Earth', year: 2006, topic: 'Nature' }]);
  });

  it('should search documentaries by year', () => {
    const result = documentariesCollection.searchByYear(2020);
    expect(result).toEqual([{ name: 'The Social Dilemma', year: 2020, topic: 'Technology' }]);
  });

  it('should add a new documentary', () => {
    documentariesCollection.addItem({ name: 'The Last Dance', year: 2020, topic: 'Sports' });
    expect(documentariesCollection.searchByName('Last Dance')).toEqual([{ name: 'The Last Dance', year: 2020, topic: 'Sports' }]);
  });

  it('should remove a documentary', () => {
    documentariesCollection.removeItem({ name: 'Planet Earth', year: 2006, topic: 'Nature' });
    expect(documentariesCollection.searchByName('Planet Earth')).toEqual([]);
  });
});