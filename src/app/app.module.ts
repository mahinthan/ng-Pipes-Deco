import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppendorPipe } from './pipes/appendor/appendor.pipe';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { SpecificUsersPipe } from './pipes/specific-users/specific-users.pipe';
import { ServersComponent } from './components/servers/servers.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserService } from './services/user/user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListItemComponent,
    AppendorPipe,
    SpecificUsersPipe,
    ServersComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
