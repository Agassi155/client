import { Client } from './../entity/Client';
import { ServiceClientService } from './../service/service-client.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

client : Client;
formulaire  : FormGroup;
error_message : any;
client2:Client=new Client(null,'','','','');
  constructor(private router : Router,private service: ServiceClientService
    ,private formBuilder :  FormBuilder ) { }

  ngOnInit() {
    this.formulaire = this.formBuilder.group({

      nom:  '',
      sexe : '',
      situation : '',
      etat  : false,

    });
  }

  create_client(x){
     this.client = new Client(
      null,
     x.nom,
     x.sexe,
    x.situation,
     x.etat
    )

        if(this.client.etat==stringify(false)){
          console.log('non coché')
          this.client.etat = 'Desactiver'
        }
        else
        this.client.etat = 'Activer'

        console.log(this.client);


    this.service.create_client(this.client)
      .subscribe(res=>{
        if  (res= '200')
        this.router.navigate(['']);
        else
            this.error_message = 'erreur lors envoie data...';
      })
  }


}
