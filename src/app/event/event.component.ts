import { Component, ViewChild} from '@angular/core';
import { EVENTS } from "../mock-events";
import { MatTable, MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { Event } from "../models/event";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  standalone:true,
  imports: [MatTableModule, MatButtonModule]
})
export class EventComponent {
  events: Event[] = [];
  dataSource = [...EVENTS];
  displayedColumns: string[] = [ 'id','animal.type','animal.name','description'];
  @ViewChild(MatTable) table: MatTable<Event>;
  constructor() {
    this.table = {} as MatTable<Event>;
  }
  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.events.length);
    this.dataSource.push(this.events[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }
}
