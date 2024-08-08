import { Injectable } from '@angular/core';
import {SoftSkill} from "../models/SoftSkill";


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



  private softSkillsList =[
    new SoftSkill('Pédagogue', "La pédagogie, c'est l'art de la répétition", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new SoftSkill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new SoftSkill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new SoftSkill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new SoftSkill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new SoftSkill('Autonome', "L'autonomie c'est être seul", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),
    new SoftSkill('Pédagogue', "La pédagogie, c'est l'art de la répétition", 'j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc j\'ai fait plein de truc'),

  ]



  getSoftSkillsList(): SoftSkill[] {
    return this.softSkillsList;
  }

}
