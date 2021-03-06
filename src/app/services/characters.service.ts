import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map, debounceTime} from 'rxjs/operators';

@Injectable()
export class CharactersService {

  private readonly apiUrl: string;
  private itemsLimit: number;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.itemsLimit = 10;
  }

  getCharacters(page, text = '', sort = {view: 'id', order: 'DESC'}) {
    return this.http.get(`${this.apiUrl}/characters?_page=${page}&_limit=${this.itemsLimit}&q=${text}&_sort=${sort.view}&_order=${sort.order}`, {observe: 'response'})
      .pipe(
        map(res => {
          return {
            data: res.body,
            totalCount: parseInt(res.headers.get('X-Total-Count'), 10)
          };
        }),
        debounceTime(200));
  }

  getCharacter(id) {
    return this.http.get(`${this.apiUrl}/characters/?id=${id}`);
  }

  editCharacter(id, data) {
    return this.http.put(`${this.apiUrl}/characters/${id}`, data);
  }

  getAllSpecies() {
    return this.http.get(`${this.apiUrl}/species`);
  }

  addNewCharacter(data) {
    return this.http.post(`${this.apiUrl}/characters`, data);
  }

  deleteCharacter(id) {
    return this.http.delete(`${this.apiUrl}/characters/${id}`);
  }

}
