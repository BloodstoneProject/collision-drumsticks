import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number, currency: 'GBP' | 'USD' | 'EUR' | 'AUD' = 'GBP') {
  const symbol = { GBP: '£', USD: '$', EUR: '€', AUD: 'A$' }[currency];
  return `${symbol}${amount.toFixed(2)}`;
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
