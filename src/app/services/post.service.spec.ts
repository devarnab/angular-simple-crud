import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpClientModule } from '@angular/common/http';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
