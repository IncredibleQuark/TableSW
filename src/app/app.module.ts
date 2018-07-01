import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ListViewComponent} from './components/list-view/list-view.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {NewCharacterComponent} from './components/new-character/new-character.component';
import {CharactersService} from './services/characters.service';
import {HttpClientModule} from '@angular/common/http';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    NavigationComponent,
    NewCharacterComponent,
    PaginatorComponent
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
