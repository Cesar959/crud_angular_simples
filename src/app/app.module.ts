import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AlunosComponent } from './alunos/alunos.component';

import { AlunosService } from './alunos.service';

@NgModule({
  declarations: [
    AppComponent,
    AlunosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ AlunosService, HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
