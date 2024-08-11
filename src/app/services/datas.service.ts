import {Injectable, OnInit} from '@angular/core';
import {PersonalData} from "../models/PersonalData";


@Injectable({
  providedIn: 'root'
})
export class DatasService {


  choice =[
    {option : "Hein ??" , purcent : 8},
    {option : "Novice" , purcent : 20},
    {option : "Débutant" , purcent : 40},
    {option : "Intermediaire" , purcent : 60},
    {option : "Avancé" , purcent : 80},
    {option : "Expert" , purcent : 110},
  ]

  PersonalData : PersonalData[] = [
    new PersonalData("Francueil","tdesign:map-location"),
    new PersonalData("06-73-07-30-69","gridicons:phone"),
    new PersonalData("24 Juin 1986","icon-park-outline:birthday-cake"),
    new PersonalData("Permis B","tdesign:map-location"),
    new PersonalData("louis.philippe.coronas@gmail.com","octicon:mail-16","mailto:louis.philippe.coronas@gmail.com"),
    new PersonalData("Louis-Philippe CORONAS","mdi:linkedin","https://www.linkedin.com/in/louis-philippe-coronas-a90a6620b"),
    new PersonalData("Louis-Philippe86","mdi:github","https://github.com/Louis-Philippe86/PorteFolio"),
  ]


  getPersonalDatas() : PersonalData[] {
    return this.PersonalData;
  }


}
