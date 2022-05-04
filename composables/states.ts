import { useState } from 'nuxt/app';

export const useCounter = () => useState<number>('counter', () => 0);
