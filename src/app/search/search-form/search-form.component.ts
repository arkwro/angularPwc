import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  ValidatorFn,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {
  distinctUntilKeyChanged,
  distinctUntilChanged,
  filter,
  debounceTime
} from "rxjs/operators";

const censor = (badword: string): ValidatorFn => (
  control: AbstractControl
): ValidationErrors | null => {
  const hasError = (control.value as string).includes(badword);

  return hasError
    ? {
        censor: {
          badword
        }
      }
    : null;
};

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.css"]
})
export class SearchFormComponent implements OnInit {
  queryForm = new FormGroup({
    query: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      censor("placki")
    ])
  });

  constructor() {
    const queryField = this.queryForm.get("query")!;

    queryField.valueChanges
      .pipe(
        debounceTime(400),
        filter(query => query.length >= 3),
        distinctUntilChanged()
      )
      .subscribe(query => {
        this.search(query);
      });

    console.log(this.queryForm);
  }

  ngOnInit() {}

  @Output()
  queryChange = new EventEmitter<string>();

  search(query: string) {
    this.queryChange.emit(query);
  }
}
