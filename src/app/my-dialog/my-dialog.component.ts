import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent implements OnInit {


  constructor(public dialogRef : MatDialogRef<MyDialogComponent>,
     @Inject(MAT_DIALOG_DATA) public data  : any) { }

  ngOnInit() {
  }

  confirmer(){
    this.dialogRef.close(this.data.client);
  }
  annuler(){
    this.dialogRef.close('annulation');
  }
}
