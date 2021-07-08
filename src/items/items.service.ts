import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly Items: Item[] = [
    {
      id: '12345678976',
      name: 'item',
      qty: 1000,
      description: 'shoes',
    },
    {
      id: '1231678976',
      name: 'item1',
      qty: 1000,
      description: 'bags',
    },
  ];
  findAll(): Item[] {
    return this.Items;
  }

  findOne(id: string): Item {
    return this.Items.find((item) => item.id === id);
  }
}
