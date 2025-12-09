class ConfigManager {
  constructor() {
    this.config = {};
  }
  get(path) {
    return this.config[path];
  }
}
module.exports = ConfigManager;