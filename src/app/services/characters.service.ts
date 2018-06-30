import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class CharactersService {

  private apiUrl: string;
  private itemsLimit: number;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.itemsLimit = 10;
  }

  getCharacters(page) {
    return this.http.get(`${this.apiUrl}/characters?_page=${page}?_limit=${this.itemsLimit}`, {observe: 'response'}).map(res => {
      return {
        data: res.body,
        totalCount: parseInt(res.headers.get('X-Total-Count'), 10)
      };
    });
  }

}
