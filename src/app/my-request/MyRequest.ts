export interface MyRequest
{
    id:number;
    availableBloodId : number;
    bloodGroup : string;
    firstName: string;
    lastName:string;
    bloodBankName : string;    
    rejected:boolean;    
    pending:boolean;
    approved:boolean;
}