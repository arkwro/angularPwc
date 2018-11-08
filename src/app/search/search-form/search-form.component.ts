import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Observable, Observer } from "rxjs";
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormArray,
  FormBuilder,
  ValidatorFn,
  AsyncValidatorFn,
  ValidationErrors,
  Validators
} from "@angular/forms";
import {
  distinctUntilKeyChanged,
  distinctUntilChanged,
  filter,
  debounceTime,
  combineLatest,
  withLatestFrom
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

// const asyncCensor = (option: type) =>
//                     (value: string) => value == option.correctValue;

const asyncCensor = (badword: string): AsyncValidatorFn => (
  control: AbstractControl
): Observable<ValidationErrors | null> => {
  const hasError = (control.value as string).includes(badword);

  return Observable.create((observer: Observer<ValidationErrors | null>) => {
    const handle = setTimeout(() => {
      observer.next(
        hasError
          ? {
              censor: {
                badword
              }
            }
          : null
      );
      observer.complete();
    }, 1500);

    return /* onUnsubscribe */ () => {
      clearTimeout(handle);
    };

    // return this.http.get('validate',{params:{value}}).pipe(map(resp => errors))
    // return timer(200).pipe(map(resp => errors)))
  });
};

@Component({
  selector: "app-search-form",
  templateUrl: "./search-form.component.html",
  styleUrls: ["./search-form.component.css"]
})
export class SearchFormComponent implements OnInit {
  queryForm = new FormGroup({
    query: new FormControl(
      "",
      [Validators.required, Validators.minLength(3)],
      [asyncCensor("batman")]
    )
  });

  @Input()
  set query(query: string) {
    this.queryForm.get("query")!.setValue(query, {
      onlySelf: true,
      // Dont do search
      emitEvent: false
    });
  }

  ngOnInit() {}

  @Output()
  queryChange = new EventEmitter<string>();

  constructor() {
    const queryField = this.queryForm.get("query")!;

    const status$ = queryField.statusChanges;
    const valid$ = status$.pipe(filter(status => status == "VALID"));

    const value$ = queryField.valueChanges.pipe(
      debounceTime(400),
      filter(query => query.length >= 3),
      distinctUntilChanged()
    );

    const validValue$ = valid$.pipe(
      // combineLatest(value$, (valid, value) => value)
      withLatestFrom(value$, (valid, value) => value)
    );

    validValue$.subscribe((query: string) => {
      this.search(query);
    });

    console.log(this.queryForm);
  }

  search(query: string) {
    this.queryChange.emit(query);
    // console.log(query)
  }
}
