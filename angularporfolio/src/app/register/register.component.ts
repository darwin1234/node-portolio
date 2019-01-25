import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CrudeService } from '../model/crude.service';
import { dsdata } from '../model/dsdata.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private crudeService: CrudeService) { }


  ngOnInit() {
  }
  
  onSubmit(form: NgForm){
	  if (form.value._id == "") 
	  {
			this.crudeService.add(form.value).subscribe((res) => {
			//this.resetForm(form);
			//this.refreshEmployeeList();
			//M.toast({ html: 'Saved successfully', classes: 'rounded' });
			});
	}else {
      this.crudeService.edit(form.value).subscribe((res) => {
        ///this.resetForm(form);
        //this.refreshEmployeeList();
        //M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
	}
  }

}
