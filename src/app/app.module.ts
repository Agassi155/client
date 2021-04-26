import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ListeClientComponent } from './liste-client/liste-client.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateClientComponent } from './update-client/update-client.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule , MatTableModule,MatTableDataSource, MatPaginatorModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { MyDialogComponent } from './my-dialog/my-dialog.component'
import { HashLocationStrategy,LocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListeClientComponent,
    UpdateClientComponent,
    MyDialogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule

  ],
  entryComponents : [
    MyDialogComponent
  ],
  providers: [{provide : LocationStrategy,useClass : HashLocationStrategy}],
  bootstrap: [AppComponent],

})
export class AppModule { }
