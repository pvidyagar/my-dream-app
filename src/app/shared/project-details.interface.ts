export interface IExpense{
    date?:string;
    type?:string;
    description?:string;
    amount?:number;
}

export interface IProjectDetails {
  customerName: string;
  projectName: string;
  startDate: string;
  endDate: string;
  expenses?:IExpense[];
}
