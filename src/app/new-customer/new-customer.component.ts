import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Customer} from '../model/customer.model';
import {CustomerService} from '../services/customer.service';

@Component({
  selector: 'app-new-customer',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit{
  newCustomerFormGroup! : FormGroup;
  constructor(private fb : FormBuilder,private customerService:CustomerService){}
  ngOnInit() {
    this.newCustomerFormGroup=this.fb.group({
      name : this.fb.control(null),
      email:this.fb.control(null)
    });
  }

  handleSaveCustomer() {
    let customer :Customer= this.newCustomerFormGroup.value;
    this.customerService.SaveCustomer(customer).subscribe({
      next : data=>{
        alert("Customer saved Successfully");
      },
      error:err=>{
        console.log(err);
      }
    });

  }
}
