import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeFilmesComponent } from './cadastro-de-filmes.component';

describe('CadastroDeFilmesComponent', () => {
  let component: CadastroDeFilmesComponent;
  let fixture: ComponentFixture<CadastroDeFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDeFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDeFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
