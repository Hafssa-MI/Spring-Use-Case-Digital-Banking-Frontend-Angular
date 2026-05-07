import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {evironment} from '../../environments/environment';
import {AccountDetails} from '../model/account.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http : HttpClient) {

  }
  public getAccount(accountId:string,page:number,size:number):Observable<AccountDetails>{
    return this.http.get<AccountDetails>(evironment.backendHost+"/accounts/"+accountId+"/pageOperations?page="+page+"&size="+size);

  }
  public debit(accountId:string,amount : number,description:string){
    let data={accountId :accountId,amount: amount, description : description}
    return this.http.post(evironment.backendHost+"/accounts/debit",data);

  }
  public credit(accountId:string,amount : number,description:string){
    let data={accountId :accountId,amount: amount, description : description}
    return this.http.post(evironment.backendHost+"/accounts/credit",data);

  }
  public transfer(accountSource:string,accountDestination:string,amount : number,description:string){
    let data={accountSource,accountDestination,amount, description }
    return this.http.post(evironment.backendHost+"/accounts/transfer",data);

  }
}
