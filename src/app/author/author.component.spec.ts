import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NgxJsonapiModule} from 'ngx-jsonapi';
import {$} from 'protractor';
import Pretender from 'pretender';
import { AuthorsService } from '../authors.service';
import { AuthorsComponent } from '../authors/authors.component';
import { environment } from 'src/environments/environment';


describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;
  let service: AuthorsService;
  let injector: TestBed;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorsComponent],
      imports: [NgxJsonapiModule.forRoot({
        url: environment.jsonapi_url
      })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    injector = getTestBed();
    service = injector.get(AuthorsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
})
;
