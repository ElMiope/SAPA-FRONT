import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEntity } from './post-entity';

describe('PostEntity', () => {
  let component: PostEntity;
  let fixture: ComponentFixture<PostEntity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostEntity],
    }).compileComponents();

    fixture = TestBed.createComponent(PostEntity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
