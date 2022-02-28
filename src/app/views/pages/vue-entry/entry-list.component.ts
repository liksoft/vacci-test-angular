import { Component, OnInit } from '@angular/core';
import { ActionProcess } from '../../actions/action.component';
import { EntryService } from '../../../providers/entry/entry.service';
import { PermissionService } from '../../../providers/permission/permission.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppUIStateProvider } from 'src/app/lib/core/ui-state';
import { Router, ActivatedRoute } from '@angular/router';




@Component({
  selector: 'entry-list',
  templateUrl: './entry-list.component.html',
})
export class EntryListComponent extends ActionProcess  implements OnInit {


  constructor(
    protected service: EntryService,
    protected PermissionService: PermissionService,
    protected formBuilder: FormBuilder,
    protected uiState: AppUIStateProvider,
    protected router: Router,


  ) {
    super()
  }

  ngOnInit(): void {

    //this.buildForm();
    this.getData("with=entry_details");
  }


  Add() {
    this.router.navigate([`${this.routeDefinitions.entriesRoute}/${this.routeDefinitions.createRoute}`]);
  }

  Update(entry: any) {
    this.router.navigate([`${this.routeDefinitions.entriesRoute}/${this.routeDefinitions.createRoute}`],  { queryParams: { id: entry.id } });
  }




}


