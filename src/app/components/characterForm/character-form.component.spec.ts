import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFormComponent } from './character-form.component';
import {FormsModule} from '@angular/forms';
import {CharactersService} from '../../services/characters.service';
import {CharactersServiceMock} from '../../mocks/charactersService.mock';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('CharacterFormComponent', () => {
  let component: CharacterFormComponent;
  let fixture: ComponentFixture<CharacterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterFormComponent ],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: CharactersService,
          useClass: CharactersServiceMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
