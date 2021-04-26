import { ServiceClientService } from './../service/service-client.service';
import { Client } from './../entity/Client';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatDialog , MatPaginator,MatTableDataSource } from '@angular/material';
import { MyDialogComponent } from './../my-dialog/my-dialog.component';



@Component({
  selector: 'app-liste-client',
  templateUrl: './liste-client.component.html',
  styleUrls: ['./liste-client.component.css']
})
export class ListeClientComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nom', 'sexe', 'situation', 'OP','OP2'];
  text_holder = 'filtre...';
  dataSource;

  @ViewChild(MatPaginator , {static: false})paginator : MatPaginator;



  liste_client : any;
  constructor(private service : ServiceClientService,private router : Router,
    public dialog : MatDialog) { }

  ngAfterViewInit() {

  }

  ngOnInit() {

    this.service.liste_pour_table()
      .subscribe(res=> {

        let clie:Array<Client>=res;
        this.dataSource = new MatTableDataSource(clie)
        this.dataSource.paginator = this.paginator;

      })


  }


  update(client){
    this.router.navigate(['/update', client.id]);
  }




  delete(id){
    this.service.delete_client_by_id(id)
    .subscribe(res1=>{
      if(res1 = 200){
        this.service.liste_pour_table()
          .subscribe(res=> {

            let clts:Array<Client>=res;
            this.dataSource = new MatTableDataSource<Client>(clts);

          this.dataSource.paginator = this.paginator;

    });
  }})}


  ouvrirDialogue(id){
    let dialogRef = this.dialog.open(MyDialogComponent,{
      data : {
        client : id
      }

    });
    dialogRef.afterClosed().subscribe(result=>{
      if(result  != 'annulation')
        this.delete(result);
      else
        console.log('annulation!!')
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}




