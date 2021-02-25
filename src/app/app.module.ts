import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { PrimarySidebarComponent } from './primary-sidebar/primary-sidebar.component';
import { PrimaryTopNavComponent } from './primary-top-nav/primary-top-nav.component';
import { CommunityViewComponent } from './community-view/community-view.component';
import { AskQuestionComponent } from './ask-question/ask-question.component';
import { PrimaryBottomNavComponent } from './primary-bottom-nav/primary-bottom-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PrimarySidebarComponent,
    PrimaryTopNavComponent,
    CommunityViewComponent,
    AskQuestionComponent,
    PrimaryBottomNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatButtonModule,MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
