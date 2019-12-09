import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { DetailPersonComponent } from './detail-person/detail-person.component';
import { SearchPersonComponent } from './search-person/search-person.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
import { DetachPersonComponent } from './detach-person/detach-person.component';
import { AttachPersonComponent } from './attach-person/attach-person.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    ListPersonsComponent,
    DetailPersonComponent,
    SearchPersonComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    DeletePersonComponent,
    DetachPersonComponent,
    AttachPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
