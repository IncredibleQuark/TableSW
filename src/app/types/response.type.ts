import {ICharacter} from '../models/character/character.model';

export interface ICharacterResponse {
  data: Array<ICharacter>;
  totalCount: number;
}
