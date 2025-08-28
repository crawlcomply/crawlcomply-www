import { Component } from '@angular/core';

@Component({
    selector: 'app-archive-log',
    templateUrl: './archive-log.component.html',
    styleUrls: ['./archive-log.component.scss'],
    standalone: false
})
export class ArchiveLogComponent {
  displayedColumns: string[] = ['status', 'domain', 'date'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  status: "200 (OK)" | "404 (Not Found)" | "500 (Internal Server Error)" | "503 (Service Unavailable)";
  domain: string;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {status: "200 (OK)", domain: "footlocker.com", date: "2023-10-25T13:15:30Z"},
  {status: "404 (Not Found)", domain: "footlocker.com", date: "2023-10-26T13:15:30Z"},
  {status: "500 (Internal Server Error)", domain: "footlocker.com", date: "2023-10-27T13:15:30Z"},
  {status: "503 (Service Unavailable)", domain: "footlocker.com", date: "2023-10-28T13:15:30Z"}
];
