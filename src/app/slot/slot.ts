import { Time } from '@angular/common';

export interface slot
{
    slotId: number;
    hospitalName : string;
    city : string;
    date : Date;
    time : Time;
    donorId : number;
}