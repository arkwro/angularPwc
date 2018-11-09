import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TestingComponent } from "./testing.component";

fdescribe("TestingComponent", () => {
  let instance: TestingComponent;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      declarations: [TestingComponent],
      imports: [],
      providers: []
    }).compileComponents().then(()=>{
      done()
    })

    // TestBed.createComponent()
  });

  it("should create", () => {
    expect(instance).toBeTruthy();
  });

  it("should render message", () => {
    instance;
  });
});
