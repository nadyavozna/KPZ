import { config } from './config';

// базовые функции
export function add(a: number, b: number): number {
  return a + b;
}

export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// форматирование чисел с дефолтной точностью из .env
export type NumberFormatOptions = {
  precision?: number;
  locale?: string;
};

export function formatNumber(value: number, options?: NumberFormatOptions): string {
  const precision = options?.precision ?? config.APP_PRECISION;
  return value.toFixed(precision);
}

// Logger с типами уровней логов
export type LogLevel = 'silent' | 'info' | 'debug';

export class Logger {
  constructor(private level: LogLevel) {}

  info(msg: string): void {
    if (this.level !== 'silent') {
      console.log('[INFO]', msg);
    }
  }

  debug(msg: string): void {
    if (this.level === 'debug') {
      console.log('[DEBUG]', msg);
    }
  }
}
