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
  markets: FormArray;

  constructor() {
    this.queryForm = new FormGroup({
      query: new FormControl("batman"),
      options: new FormGroup({
        type: new FormControl("album"),
        markets: new FormArray([
          new FormControl("PL"), 
          new FormControl("UK")])
      })
    });
    this.markets = this.queryForm.get("options.markets") as FormArray;

    console.log(this.queryForm);
  }

  addMarket() {
    (this.queryForm.get("options.markets") as FormArray).push(
      new FormControl("")
    );
  }

  ngOnInit() {}

  search(query: string) {
    console.log(query);
  }
}
