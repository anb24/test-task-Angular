import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {UserPageComponent} from "./pages/user-page/user-page.component";
import {UserCardComponent} from "./components/user-card/user-card.component";
import {UsersListComponent} from "./components/users-list/users-list.component";
import {UserListItemComponent} from "./components/user-list-item/user-list-item.component";
import {ResourceComponent} from "./components/resource/resource.component";
import {ResourcesListComponent} from "./components/resources-list/resources-list.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsersPageComponent,
    UserPageComponent,
    UserCardComponent,
    UsersListComponent,
    UserListItemComponent,
    ResourceComponent,
    ResourcesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
