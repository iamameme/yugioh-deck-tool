import * as logger from "loglevel";
import { Logger } from "loglevel";
import { DEVELOPMENT_MODE } from "./mode";
import { name as getName } from "lightdash";

logger.setLevel(DEVELOPMENT_MODE ? logger.levels.DEBUG : logger.levels.WARN);

const getLogger = (consumer: unknown): Logger => {
    const name = getName(consumer);
    if (name == null) {
        throw new TypeError(
            `Cannot find name for consumer: '${String(consumer)}'`
        );
    }
    return logger.getLogger(name);
};

export { getLogger };
