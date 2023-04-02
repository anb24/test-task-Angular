import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {UsersListComponent} from "./components/users-list/users-list.component";
import {UserListItemComponent} from "./components/user-list-item/user-list-item.component";
import {ResourcesListComponent} from "./components/resources-list/resources-list.component";
import {ResourceListItemComponent} from "./components/resource-list-item/resource-list-item.component";
import {UserCardComponent} from "./components/user-card/user-card.component";
import {UserEditComponent} from "./components/user-card-edit/user-card-edit.component";
import {FooterComponent} from "./components/footer/footer.component";
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {UserPageComponent} from "./pages/user-page/user-page.component";
import {Modal} from "./components/popup/popup.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UserListItemComponent,
    ResourcesListComponent,
    ResourceListItemComponent,
    UserCardComponent,
    UserEditComponent,
    FooterComponent,
    UsersPageComponent,
    UserPageComponent,
    Modal,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
