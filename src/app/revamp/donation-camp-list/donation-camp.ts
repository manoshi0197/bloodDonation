import { Time } from '@angular/common';


export interface DonationCamp {
    id:number;
    bloodBankId:number;
    organiserName:string;
    campName:string;
    date:Date;
    startTime:Time;
    endTime:Time
    location:string;
}
