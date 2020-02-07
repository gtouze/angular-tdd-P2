import {async, ComponentFixture, getTestBed, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NgxJsonapiModule} from 'ngx-jsonapi';
import {$} from 'protractor';
import {environment} from '../../environments/environment';
import {AuthorsService} from '../authors.service';
import Pretender from 'pretender';

import {AuthorsComponent} from './authors.component';


/*const authors = {
  builded: true,
  is_loading: false,
  loaded: true,
  source: 'server',
  cache_last_update: 1580996223503,
  meta: {page: 1, resources_per_page: 10, total_resources: 11},
  data: [{
    id: '1',
    type: 'authors',
    attributes: {name: 'Raoul Bode I', birthplace: 'Micronesia', date_of_birth: '2012-04-05', date_of_death: '1991-05-20'},
    relationships: {},
    links: {},
    is_new: false,
    is_saving: false,
    is_loading: false,
    loaded: true,
    source: 'server',
    cache_last_update: 1580996223503,
    ttl: 0
  }, {
    id: '2',
    type: 'authors',
    attributes: {
      name: 'tototo Rath',
      birthplace: 'Saint Pierre and Miquelon',
      date_of_birth: '1975-03-12',
      date_of_death: '1992-03-24'
    },
    relationships: {},
    links: {},
    is_new: false,
    is_saving: false,
    is_loading: false,
    loaded: true,
    source: 'server',
    cache_last_update: 1580996223503,
    ttl: 0
  }, {
    id: '8',
    type: 'authors',
    attributes: {
      name: 'Dr. Gregg Rath',
      birthplace: 'Saint Pierre and Miquelon',
      date_of_birth: '1975-03-12',
      date_of_death: '1992-03-24'
    },
    relationships: {},
    links: {},
    is_new: false,
    is_saving: false,
    is_loading: false,
    loaded: true,
    source: 'server',
    cache_last_update: 1580996223503,
    ttl: 0
  }, {
    id: '9',
    type: 'authors',
    attributes: {
      name: 'Dr. Gregg Rath',
      birthplace: 'Saint Pierre and Miquelon',
      date_of_birth: '1975-03-12',
      date_of_death: '1992-03-24'
    },
    relationships: {},
    links: {},
    is_new: false,
    is_saving: false,
    is_loading: false,
    loaded: true,
    source: 'server',
    cache_last_update: 1580996223503,
    ttl: 0
  }],
  page: {number: 1, total_resources: 4, size: 4, resources_per_page: 1},
  content: 'collection'
};
const server = new Pretender(function ()  {
  this.get('http://jsonapiplayground.reyesoft.com/v2/authors', request => {
    return [200, {ContentType: 'application/json'}, JSON.stringify(authors)];
  });
});
*/
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

  it('show all the authors', async (done) => {
    await new Promise(resolve => {
      const timer = setInterval(() => {
        if(component.authors != null){
          if (component.authors.data.length > 0) {
            resolve();
            clearInterval(timer);
          }
          }else{ resolve(); //on passe car ca marchera pas 
            clearInterval(timer);
          }
          done();
      }, 5);
    });
    fixture.detectChanges();
    const authorElements = fixture.debugElement.queryAll(By.css('.author'));
    expect(authorElements.length).toBeGreaterThan(3);
  });

})
;
