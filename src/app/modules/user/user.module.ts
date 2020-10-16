import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './component/all-users/all-users.component';
import { UserComponent } from './component/user/user.component';

@NgModule({
  declarations: [AllUsersComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ]
})
export class UserModule { }
