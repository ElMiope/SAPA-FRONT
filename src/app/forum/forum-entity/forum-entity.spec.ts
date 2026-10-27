import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumEntity } from './forum-entity';

describe('ForumEntity', () => {
  let component: ForumEntity;
  let fixture: ComponentFixture<ForumEntity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumEntity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumEntity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
