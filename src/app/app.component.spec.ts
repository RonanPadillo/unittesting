import { TestBed, async, ComponentFixture, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EmailValidator, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';


describe('AppComponent', () => {
  let comp:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule  ],
      declarations: [
        AppComponent
      ],
      providers:[
        NgForm
      ]
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AppComponent);
      comp = fixture.componentInstance;
     
      fixture.detectChanges();
    });
   
  }));
   

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it('form is invalid when empty', () => {
    expect(comp.form.valid).toBeFalsy();
  });
 
  it('Should all form inputs are required', () => {
    let errors = {};
    let name = comp.form.control.controls.name;
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy("input name is not required");
    let email =comp.form.control.controls.email;
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy("input email is not required");
    let date = comp.form.control.controls.ageInYears;
    errors = date.errors || {};
    expect(errors['required']).toBeTruthy("input date is not required");
  });

  it('Should check date if lower or equal to 25 years old', () => {
    let date = comp.form.control.controls.ageInYears ;
    date.setValue('1996-10-02');
    let inputdate =  date.value;
    const age: number = Math.abs(parseInt(inputdate.split('-')[0], 10) - new Date().getFullYear());
   
    expect(age).toBeLessThanOrEqual(25);
  });
  it('Should check date if higher or equal to 60 years old', () => {
    let date = comp.form.control.controls.ageInYears ;
    date.setValue('1961-10-02');
    let inputdate =  date.value;
    const age: number = Math.abs(parseInt(inputdate.split('-')[0], 10) - new Date().getFullYear());
   
    expect(age).toBeGreaterThanOrEqual(60);
  });
  it('Should emit value forms', () =>{

  });
  

});
