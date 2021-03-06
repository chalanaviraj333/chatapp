import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { SharedserviceService } from '../sharedservice.service';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-useroption',
  templateUrl: './useroption.component.html',
  styleUrls: ['./useroption.component.css']
})
export class UseroptionComponent implements OnInit {

  addingUser = {};

  constructor(public dialogRef: MatDialogRef<UseroptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, private activatedroute: ActivatedRoute,private SharedService: SharedserviceService) { }

  ngOnInit() {

    this.addingUser = this.SharedService.getData();
  }

  cancel(){
    this.dialogRef.close();
  }

  adduserfromGroup(){

        this.http.post("http://localhost:3000/addgrouptotheuser", this.addingUser)
        .subscribe(response => {
            //console.log(response);
    })
    this.dialogRef.close();
  }

}
