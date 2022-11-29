import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-us-public',
  templateUrl: './us-public.component.html',
  styleUrls: ['./us-public.component.css']
})
export class UsPublicComponent {
   
  constructor(private api:ApiService){
    api.fetchUsPublic().subscribe(
      (response)=>{
        this.usData=response;
      }
    )
  }
  
  usData:any ={}
}