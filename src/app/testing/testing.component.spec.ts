import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TestingComponent } from "./testing.component";
import { By } from "@angular/platform-browser";

fdescribe("TestingComponent", () => {
  let fixture: ComponentFixture<TestingComponent>;
  let instance: TestingComponent;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [TestingComponent],
      imports: [],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    instance = fixture.componentInstance
    fixture.detectChanges()
  });

  it("should create", () => {
    expect(instance).toBeTruthy();
  });

  it("should render message", () => {
    expect(fixture.nativeElement.innerHTML).toMatch('testing works')
  });
  
  it('should update when message change',()=>{
    instance.message = 'Placki!'
    fixture.detectChanges()
    const elem = fixture.debugElement.query(By.css('.message'))
    expect(elem.nativeElement.innerHTML).toMatch('Placki!')
  })

});
