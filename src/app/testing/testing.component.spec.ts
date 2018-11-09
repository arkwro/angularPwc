import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";

import { TestingComponent } from "./testing.component";
import { By } from "@angular/platform-browser";
import { FormsModule, NgModel } from "@angular/forms";
import { Component } from "@angular/core";
import { TestingServiceService } from "../testing-service.service";
import { of } from 'rxjs';

@Component({
  template: `
    <div appTEstDirective></div>
  `
})
class WrapperComponent {}

fdescribe("TestingComponent", () => {
  let fixture: ComponentFixture<TestingComponent>;
  let instance: TestingComponent;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [TestingComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: TestingServiceService,
          useValue: jasmine.createSpyObj("TestingServiceService", [
            "fetchMessage"
          ])
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    instance = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(instance).toBeTruthy();
  });

  it("should render message", () => {
    expect(fixture.nativeElement.innerHTML).toMatch("testing works");
  });

  it("should update when message change", () => {
    instance.message = "Placki!";
    fixture.detectChanges();
    const elem = fixture.debugElement.query(By.css(".message"));
    expect(elem.nativeElement.innerHTML).toMatch("Placki!");
  });

  it("should display message in input", () => {
    return fixture.whenStable().then(() => {
      const elem = fixture.debugElement.query(By.css("input"));
      expect(elem.nativeElement.value).toMatch(instance.message);
    });
  });

  it("should update message when input changes", () => {
    const elem = fixture.debugElement.query(By.directive(NgModel));

    elem.nativeElement.value = "Placki";
    elem.nativeElement.dispatchEvent(new Event("input"));
    // or:
    elem.triggerEventHandler("input", {
      target: { value: "Placki" }
    });

    expect(instance.message).toMatch("Placki");
  });

  it('should call save() function when "Save" is clicked', () => {
    const elem = fixture.debugElement.query(By.css(".save-btn"));
    const spy = spyOn(instance, "save");

    elem.triggerEventHandler("click", {});

    expect(spy).toHaveBeenCalledWith(instance.message);
  });

  it("sholud output message when save() was called", () => {
    instance.messageChange.subscribe((msg: string) => {
      expect(msg).toBe("Placki!");
    });

    instance.save("Placki!");
  });

  it("should fetch message from service", inject(
    [TestingServiceService],
    (service: jasmine.SpyObj<TestingServiceService>) => {

      service.fetchMessage.and.returnValue(of('Placki'))

      instance.fetchMessge();

      expect(service.fetchMessage).toHaveBeenCalled();
      expect(instance.message).toBe('Placki')
    }
  ));
});
