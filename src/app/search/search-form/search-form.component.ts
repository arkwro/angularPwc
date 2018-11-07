import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder
} from "@angular/forms";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.css"]
})
export class SearchFormComponent implements OnInit {
  queryForm: FormGroup;
  markets: FormArray;

  constructor() {
    this.queryForm = new FormGroup({
      query: new FormControl("batman")
    });

    this.queryForm.get("query")
        .valueChanges.subscribe(query => {
          this.search(query);
        });

    console.log(this.queryForm);
  }

  ngOnInit() {}

  search(query: string) {
    console.log(query);
  }
}
