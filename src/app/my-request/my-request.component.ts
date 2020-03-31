import { Component, OnInit } from '@angular/core';
import { MyRequestService } from '../service/my-request.service';
import { MyRequest } from './myRequest';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { user } from '../site/login/user';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.css']
})
export class MyRequestComponent implements OnInit {

  public myRequests: MyRequest[];
  userName: string;
  user: user;
  userId: number;
  constructor(private myRequestService: MyRequestService, private authService: AuthService, private userService: UserService) {

  }

  ngOnInit() {

    this.userId = this.userService.user.userId;
    this.myRequestService.getMyRequests(this.userId).subscribe((res:MyRequest[]) => {
    this.myRequests=res;
    });
    this.myRequestService.getSubject().subscribe((data) => {
      this.myRequests = data;
    });

  }

  getMyRequests() {

    console.log("my " + this.myRequests[0].approved);
    console.log("my" + this.myRequests[0].bloodGroup);    
    console.log("my" + this.myRequests[0].bloodBankName);

  }

}
