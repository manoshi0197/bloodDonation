import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { BloodRequestService } from 'src/app/service/blood-request.service';
import { MyRequestService } from 'src/app/service/my-request.service';
import { MyRequest } from 'src/app/my-request/myRequest';
import { BloodAvailablityService } from 'src/app/service/blood-availablity.service';

@Component({
  selector: 'app-individual-my-request',
  templateUrl: './individual-my-request.component.html',
  styleUrls: ['./individual-my-request.component.css']
})
export class IndividualMyRequestComponent implements OnInit {

  @Input() req: MyRequest;
  @Output() acceptOrRejectRequest = new EventEmitter();

  constructor(private userService: UserService, private requestService: BloodRequestService, private requestStatusService: MyRequestService, private availableBloodService:BloodAvailablityService) { }

  ngOnInit() {
  }

  onAccept() {
    this.requestStatusService.accept(this.req.id).subscribe((res) => { console.log("approved") });
    this.acceptOrRejectRequest.emit(this.req.id);
    this.updateAvailableBloodUnit();
  }
  onReject() {
    this.requestStatusService.reject(this.req.id).subscribe((res) => { console.log("rejected") });
    this.acceptOrRejectRequest.emit(this.req.id);
  }

  updateAvailableBloodUnit(){
    this.availableBloodService.updateAvailableBloodStock(this.req.availableBloodId).subscribe((res)=>{console.log("decremented")});    
  }

}
