import {Component, OnInit} from '@angular/core';
import {CharactersService} from '../../services/characters.service';
import {Character} from '../../models/character/character.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

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


  constructor(private charactersService: CharactersService, private router: Router) {
    this.model = {};
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

  submitForm(form) {

    if (form.valid) {

      this.sending = true;
      this.character = new Character(this.model.name, this.model.species, this.model.gender, this.model.homeworld || '');

      this.charactersService.addNewCharacter(this.character).subscribe((res: any) => {
        console.warn('Added character with id: ' + res.id);
        this.sending = false;
        this.router.navigate(['']);
      }, (err) => {
        console.warn(err);
        this.sending = false;
      });

    }

  }

}
