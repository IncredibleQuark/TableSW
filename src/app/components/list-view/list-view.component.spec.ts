import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewComponent } from './list-view.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CharactersService} from '../../services/characters.service';
import {CharactersServiceMock} from '../../mocks/charactersService.mock';
import {HttpClientModule} from '@angular/common/http';

describe('ListViewComponent', () => {
  let component: ListViewComponent;
  let fixture: ComponentFixture<ListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListViewComponent ],
      imports: [FormsModule, RouterTestingModule, HttpClientModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    fixture = TestBed.createComponent(ListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
