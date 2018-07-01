import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CharactersService {

  private apiUrl: string;
  private itemsLimit: number;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.apiUrl;
    this.itemsLimit = 10;
  }

  getCharacters(page, text = '') {
    return this.http.get(`${this.apiUrl}/characters?_page=${page}&_limit=${this.itemsLimit}&q=${text}`, {observe: 'response'}).map(res => {
      return {
        data: res.body,
        totalCount: parseInt(res.headers.get('X-Total-Count'), 10)
      };
    }).debounceTime(200);
  }

}
