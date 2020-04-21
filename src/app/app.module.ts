import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


// Routes

import { APP_ROUTING } from './app.routes';

// Components

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { TattoosComponent } from './components/tattoos/tattoos.component';

// Services

import { TattoosService } from './services/tattoos.service';
import { TattooComponent } from './components/tattoo/tattoo.component';
import { SearcherComponent } from './components/searcher/searcher.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    TattoosComponent,
    TattooComponent,
    SearcherComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [
    TattoosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
