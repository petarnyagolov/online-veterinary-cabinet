import { Component } from '@angular/core';
import { Human } from "../models/human";
import { HUMANS } from "../mock-humans";
import {MatTableModule} from "@angular/material/table";

@Component({
  selector: 'app-humans',
  templateUrl: './humans.component.html',
  styleUrls: ['./humans.component.scss'],
  standalone:true,
  imports: [MatTableModule]

})
export class HumansComponent {
  humans: Human[]=[];
  dataSource = [...HUMANS];
  displayedColumns: string[] = [ 'name','phone','email'];

}
