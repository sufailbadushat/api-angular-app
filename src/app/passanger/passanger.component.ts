import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-passanger',
  templateUrl: './passanger.component.html',
  styleUrls: ['./passanger.component.css']
})
export class PassangerComponent {

  constructor(private api:ApiService){
    api.fetchPassnger().subscribe(
      (response)=>{
        this.passengers=response;
      }
    )
  }

  passengers: any = { }
}
