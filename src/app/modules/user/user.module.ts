import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';

import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AllUsersComponent } from './component/all-users/all-users.component';
import { UserComponent } from './component/user/user.component';
import { UserService } from './services';

@NgModule({
  declarations: [AllUsersComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ShareModule
  ],
  exports: [AllUsersComponent],
  providers: [UserService]
})
export class UserModule { }
