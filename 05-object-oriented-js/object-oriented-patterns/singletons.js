class Logger {
  logs = [];

  get count() {
    return this.logs.length;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    this.logs.push({ message, timestamp });
    console.log(`${timestamp} - ${message}`);
  }
}

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = new Logger();
    }
  }

  getInstance() {
    return Singleton.instance;
  }
}

const logger = new Singleton().getInstance();

logger.log("Always One Instance");
logger.log("Always the same logger");
