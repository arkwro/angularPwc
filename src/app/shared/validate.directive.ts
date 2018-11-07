import { Directive, Input, HostBinding } from "@angular/core";
import { NgModel, NG_VALIDATORS, Validator, FormControl } from "@angular/forms";

@Directive({
  selector: "[appValidate]",
  providers: [
    { provide: NG_VALIDATORS, useExisting: ValidateDirective, multi: true }
  ]
})
export class ValidateDirective implements Validator {
  @Input()
  appValidate = "";

  @HostBinding("class.valid")
  valid = true;

  constructor(/* private model: NgModel */) {}

  validate(control:FormControl) {
    this.valid = control.value !== "placki"; //this.appValidate;
    return this.valid ? null : { placki: true };
  }

  ngOnInit() {
    // this.model.valueChanges.subscribe(value => {
    //   this.valid = value !== "placki";
    // });
  }
}
