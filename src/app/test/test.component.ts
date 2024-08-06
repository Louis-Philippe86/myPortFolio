import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {UserService} from "./user.service";
import {User} from "./user/user";
import {SharedModule} from "../shared/shared.module";


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  users : any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data =>{
      this.users = data
    console.log(data)
    });

  }


}
