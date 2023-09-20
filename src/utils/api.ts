import { v4 as uuidv4 } from 'uuid';

import { IBaseEntity } from '../lib/interfaces/entity';

export function generateBaseFields(): IBaseEntity {
  const timestamp = Math.floor(Date.now() / 1000);

  return {
    id: uuidv4(),
    updatedAt: timestamp,
    createdAt: timestamp,
  };
}
