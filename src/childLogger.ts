import * as Logger from 'bunyan';

export function createChildLogger(logger: Logger, className: string) {
  return logger.child({ child: "graphql-server-amqp", "class": className }, true);
}
