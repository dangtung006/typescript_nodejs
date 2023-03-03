import winston from "winston";
import { LogLevels } from "../const/logLevel"

const formatter = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    winston.format.splat(),

    winston.format.printf((info) => {

        const { timestamp, level, message, ...meta } = info;
        return `${timestamp} [${level}]: ${message} ${ Object.keys(meta).length ? JSON.stringify(meta, null, 2) : '' }`;
    })
);

class Logger {
    private readonly logger;
    constructor(){
        this.logger  = winston.createLogger({
            level: 'trace',
            levels: LogLevels.levels,
            transports: [
                new winston.transports.Console({ format: formatter })
            ],
        });

        winston.addColors(LogLevels.colors);
    }

    public trace(msg: any, meta?: any) {
        this.logger.log('trace', msg, meta);
    }
      
    public debug(msg: any, meta?: any) {
        this.logger.debug(msg, meta);
    }
    
    public info(msg: any, meta?: any) {
        this.logger.info(msg, meta);
    }
    
    public warn(msg: any, meta?: any) {
        this.logger.warn(msg, meta);
    }
    
    public error(msg: any, meta?: any) {
        this.logger.error(msg, meta);
    }
    
    public fatal(msg: any, meta?: any) {
        this.logger.log('fatal', msg, meta);
    }
}

export const logger = new Logger();
