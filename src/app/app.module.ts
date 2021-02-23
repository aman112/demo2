import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';
import { HeaderComponent } from './components/header/header.component';
import { CocktailsComponent } from './components/cocktails/cocktails.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AlcoholFilterPipe } from './pipes/alcohol-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CocktailDetailsComponent,
    HeaderComponent,
    CocktailsComponent,
    PageNotFoundComponent,
    AlcoholFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
