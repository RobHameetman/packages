import { faker } from '@faker-js/faker';
import { LISTENER_TYPES } from '../ListenerTypes';

export const randomListenerType =
	() => faker.helpers.arrayElement(LISTENER_TYPES);
