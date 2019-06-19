import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule, MatDialogModule, MatInputModule} from '@angular/material';
import {BlogPostService} from './services/blog-post-service';
import {HttpClientModule} from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    NoopAnimationsModule
  ],
  providers: [
    BlogPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
