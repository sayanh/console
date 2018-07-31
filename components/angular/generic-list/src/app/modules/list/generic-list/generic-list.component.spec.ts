import { PlainListComponent } from './../plain-list/plain-list.component';
import { ListFilterComponent } from './../list-filter/list-filter.component';
import { ListModule } from './../list.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericListComponent } from './generic-list.component';
import { ListSearchComponent } from '../list-search/list-search.component';
import { PagingComponent } from '../paging/paging.component';

describe('GenericListComponent', () => {
  let component: GenericListComponent;
  let fixture: ComponentFixture<GenericListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GenericListComponent,
        ListFilterComponent,
        ListSearchComponent,
        PagingComponent,
        PlainListComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
