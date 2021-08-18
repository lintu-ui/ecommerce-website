import { TestBed } from '@angular/core/testing';

import { ShoppingCartSrvService } from './shopping-cart-srv.service';

describe('ShoppingCartSrvService', () => {
  let service: ShoppingCartSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
