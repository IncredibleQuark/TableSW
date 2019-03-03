import {Component, OnInit} from '@angular/core';
import {CharactersService} from '../../services/characters.service';
import {ICharacter} from '../../models/character/character.interface';
import {ICharacterResponse} from '../../types/response.type';

@Component({
  selector: 'sl-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {

  charactersArray: Array<ICharacter>;
  page: number;
  totalCount: number;
  columns: Array<string>;
  sort: { view: string, order: string };
  searchText: string;

  constructor(private charactersService: CharactersService) {
    this.page = 1;
  }

  ngOnInit() {
    this.sort = {view: 'id', order: 'asc'};
    this.columns = ['Id', 'Name', 'Species', 'Gender', 'Homeworld'];
    this.getData(this.page);

  }

  getData(page, text = this.searchText) {
    this.page = page;
    this.searchText = text;

    this.charactersService.getCharacters(page, this.searchText, this.sort).subscribe((res: ICharacterResponse) => {
      this.charactersArray = res.data;
      this.totalCount = res.totalCount;
    });
  }

  toggleSort(view) {
    let order = 'asc';
    if (view.toLowerCase() === this.sort.view) {
      order = this.sort.order === 'asc' ? 'desc' : 'asc';
    }
    this.sort = {view: view.toLowerCase(), order: order};
    this.getData(this.page);
  }

  deleteCharacter(id) {
    this.charactersService.deleteCharacter(id).subscribe(() => {
      this.getData(this.page);
    }, (err) => {
      console.warn(err);
    });
  }
}
