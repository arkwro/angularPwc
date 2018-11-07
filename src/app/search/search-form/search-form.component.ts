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

  constructor(private bob: FormBuilder) {
    this.queryForm = this.bob.group({
      query: ["batman"],
      //
      options: this.bob.group({
        type: ["album"],
        //
        markets: this.bob.array([["PL"], ["UK"]])
      })
    });
    this.markets = this.queryForm.get("options.markets") as FormArray;

    console.log(this.queryForm);
  }

  addMarket() {
    (this.queryForm.get("options.markets") as FormArray).push(
      this.bob.control("")
    );
  }

  ngOnInit() {}

  search(query: string) {
    console.log(query);
  }
}
