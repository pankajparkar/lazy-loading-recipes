import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FiltersComponent } from '../filters/filters.component';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'wc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private matDialog: MatDialog, private locationService: LocationService) { }

  ngOnInit() {
  }

  openFilters() {
    this.matDialog.open(FiltersComponent).afterClosed().subscribe(
      changedIpData => {
        if (changedIpData) {
          this.locationService.ipDataSetter(changedIpData);
        }
      }
    );
  }

}
