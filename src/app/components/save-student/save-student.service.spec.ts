import { TestBed } from '@angular/core/testing';

import { SaveStudentService } from './save-student.service';

describe('SaveStudentService', () => {
  let service: SaveStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
