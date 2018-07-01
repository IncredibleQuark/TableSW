import {ICharacter} from '../models/character/character.interface';

export interface ICharacterResponse {
  data: Array<ICharacter>;
  totalCount: number;
}
