import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder
} from "@angular/forms";
import {
  distinctUntilKeyChanged,
  distinctUntilChanged,
  filter,
  debounceTime
} from "rxjs/operators";

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.css"]
})
export class SearchFormComponent implements OnInit {
  queryForm = new FormGroup({
    query: new FormControl("batman")
  });

  constructor() {
    this.queryForm
      .get("query")
      .valueChanges.pipe(
        debounceTime(400),
        filter(query => query.length >= 3),
        distinctUntilChanged(),
      )
      .subscribe(query => {
        this.search(query);
      });

    console.log(this.queryForm);
  }

  ngOnInit() {}

  search(query: string) {
    console.log(query);
  }
}
