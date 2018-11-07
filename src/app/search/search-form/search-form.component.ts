import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormArray
} from "@angular/forms";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.css"]
})
export class SearchFormComponent implements OnInit {
  queryForm: FormGroup;

  constructor() {
    this.queryForm = new FormGroup({
      query: new FormControl("batman",{
        updateOn:'blur'
      }),
      type: new FormControl("album")
    });

    console.log(this.queryForm)
  }

  ngOnInit() {}

  search(query: string) {
    console.log(query);
  }
}
