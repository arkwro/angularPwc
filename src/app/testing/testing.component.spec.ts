import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TestingComponent } from "./testing.component";
import { By } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

fdescribe("TestingComponent", () => {
  let fixture: ComponentFixture<TestingComponent>;
  let instance: TestingComponent;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [TestingComponent],
      imports: [FormsModule],
      providers: []
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
    const elem = fixture.debugElement.query(By.css("input"));

    elem.nativeElement.value = "Placki";
    elem.nativeElement.dispatchEvent(new Event("input"));
    // or:
    elem.triggerEventHandler("input", {
      target: { value: "Placki" }
    });

    expect(instance.message).toMatch("Placki");
  });
});
