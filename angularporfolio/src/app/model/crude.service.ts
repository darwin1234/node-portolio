import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { dsdata } from './dsdata.model';

@Injectable()
export class CrudeService 
{
	selectedEmployee: dsdata;
	employees: dsdata[];
	
	readonly baseURL = 'http://localhost:3000/employees';

	constructor(private http: HttpClient) { }

	add(emp: dsdata) {
		return this.http.post(this.baseURL, emp);
	}

	getList() {
		return this.http.get(this.baseURL);
	}

	edit(emp: dsdata) {
		return this.http.put(this.baseURL + `/${emp._id}`, emp);
	}

	dsdelete(_id: dsdata) {
		return this.http.delete(this.baseURL + `/${_id}`);
	}
}
