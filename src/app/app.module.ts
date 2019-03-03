import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ListViewComponent} from './components/list-view/list-view.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {CharactersService} from './services/characters.service';
import {HttpClientModule} from '@angular/common/http';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {FormsModule} from '@angular/forms';
import {CharacterFormComponent} from './components/characterForm/character-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    NavigationComponent,
    PaginatorComponent,
    CharacterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CharactersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
