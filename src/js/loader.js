import read from './reader';
import json from './parser';
import GameSaving from './saving'

export default class GameSavingLoader {
  static load() {
    return read()
    .then((result) => json(result))
    .then((saving) => new GameSaving(JSON.parse(saving)));
  }
}
