import {Component, OnInit} from '@angular/core';
import {CharactersService} from '../../services/characters.service';
import {ICharacter} from '../../models/character/character.model';
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

  constructor(private charactersService: CharactersService) {
    this.page = 1;
  }

  ngOnInit() {
    this.getData(this.page);
  }

  getData(page) {

    this.charactersService.getCharacters(page).subscribe((res: ICharacterResponse) => {
      this.charactersArray = res.data;
      this.totalCount = res.totalCount;
      console.log(res);
    });
  }
}
