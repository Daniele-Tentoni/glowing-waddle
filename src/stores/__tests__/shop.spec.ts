import { beforeEach, describe, expect, it } from 'vitest';
import { useShop } from '../shop';
import { createPinia, setActivePinia } from 'pinia';

describe('The shop store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('Should contains some items', () => {
    const shop = useShop();
    expect(shop.shop).toBeTruthy();
  });
});
