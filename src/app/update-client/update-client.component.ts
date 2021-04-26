import { Client } from './../entity/Client';
import { ServiceClientService } from './../service/service-client.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {



  client: any ;
  client_final : Client;
  id : any;
  etat_view : any;
  formulaire : FormGroup;
  error_message : any;
  constructor(private route : ActivatedRoute,private router :  Router,
    private service : ServiceClientService,private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formulaire = this.formBuilder.group({
      id : '',
      nom: '',
      situation : '',
      etat  : '',
      sexe : ''
    });

    this.id = this.route.snapshot.paramMap.get('id');
    this.service.get_client_By_id(this.id).subscribe(res=>{
      this.client = res;

      console.log(this.client.etat)
      if (this.client.etat == 'Activer')
        this.etat_view = true;
      else
        this.etat_view = false;

      this.formulaire.setValue({
        id : this.id,
        nom : this.client.nom,
        situation  : this.client.situation,
        etat : this.etat_view,
        sexe : this.client.sexe
      })


    });




  }

  valider(){

    this.client_final = new Client(
      this.formulaire.value.id,
      this.formulaire.value.nom,
      this.formulaire.value.sexe,
      this.formulaire.value.situation,
      this.formulaire.value.etat
    )

    if(this.client_final.etat == stringify (false)){
      console.log('non coché')
      this.client_final.etat ='Desactiver'
    }
    else
    this.client_final.etat ='Activer'

    console.log(this.client);

    this.service.update(this.client_final)
    .subscribe(res=>{
      if  (res= '200')
      this.router.navigate(['']);
      else
          this.error_message = 'erreur lors envoie data...';
    })

  }


}
