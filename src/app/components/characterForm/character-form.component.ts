import {Component, OnInit} from '@angular/core';
import {CharactersService} from '../../services/characters.service';
import {Character} from '../../models/character/character.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'sl-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {

  speciesArray: Array<string>;
  character: Character;
  model: any;
  sending: boolean;
  id: number;
  isModeEdit: boolean;


  constructor(private charactersService: CharactersService, private router: Router, private route: ActivatedRoute) {
    this.model = {};

    if (this.route.snapshot.params.id) {
      this.id = this.route.snapshot.params.id;
      this.isModeEdit = true;
      this.getCharacter(this.id);
    } else {
      this.isModeEdit = false;
    }
  }

  ngOnInit() {
    this.model = new FormGroup({
      'name': new FormControl(this.model.name, Validators.required),
      'species': new FormControl(this.model.species, Validators.required),
      'gender': new FormControl(this.model.gender, Validators.required)
    });


    this.charactersService.getAllSpecies().subscribe((data: Array<string>) => {
      this.speciesArray = data;
    });
  }

  getCharacter(id) {
    this.charactersService.getCharacter(id).subscribe((data: Array<Character>) => {
      this.model = {
        name: data[0].name,
        species: data[0].species,
        gender: data[0].gender,
        homeworld: data[0].homeworld || ''
      };

    }, (err) => {
      console.warn('Could not load character' + err);
    });
  }

  submitForm(form) {

    if (form.valid) {

      this.sending = true;
      this.character = new Character(this.model.name, this.model.species, this.model.gender, this.model.homeworld || '');

      if (this.isModeEdit) {
        this.editCharacter();
      } else {
        this.addNewCharacter();
      }

    }

  }

  editCharacter() {
    this.charactersService.editCharacter(this.id, this.character).subscribe( () => {
      console.warn('Character edited');
      this.router.navigate(['']);
    }, (err) => {
      console.warn('Could not edit character ' + err);
    });
  }

  addNewCharacter() {
    this.charactersService.addNewCharacter(this.character).subscribe((res: any) => {
      console.warn('Added character with id: ' + res.id);
      this.sending = false;
      this.router.navigate(['']);
    }, (err) => {
      console.warn('Could not add character' + err);
      this.sending = false;
    });
  }

}
