declare const config: {
    APP_PRECISION: number;
    LOG_LEVEL: "silent" | "info" | "debug";
};

declare function add(a: number, b: number): number;
declare function capitalize(s: string): string;
type NumberFormatOptions = {
    precision?: number;
    locale?: string;
};
declare function formatNumber(value: number, options?: NumberFormatOptions): string;
type LogLevel = 'silent' | 'info' | 'debug';
declare class Logger {
    private level;
    constructor(level: LogLevel);
    info(msg: string): void;
    debug(msg: string): void;
}

export { type LogLevel, Logger, type NumberFormatOptions, add, capitalize, config, formatNumber };
