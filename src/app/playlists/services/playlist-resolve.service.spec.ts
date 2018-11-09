import { TestBed } from '@angular/core/testing';

import { PlaylistResolveService } from './playlist-resolve.service';

describe('PlaylistResolveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaylistResolveService = TestBed.get(PlaylistResolveService);
    expect(service).toBeTruthy();
  });
});
