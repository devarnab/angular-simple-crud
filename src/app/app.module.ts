import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AddEditComponent } from './components/posts/add-edit/add-edit.component';
import { ListingComponent } from './components/posts/listing/listing.component';
import { PostsComponent } from './components/posts/posts.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { MessagesComponent } from './components/shared/messages/messages.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { HttpInterceptorInterceptor } from './interceptors/http-interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    PostsComponent,
    AddEditComponent,
    ListingComponent,
    ModalComponent,
    LoaderComponent,
    PageNotFoundComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
