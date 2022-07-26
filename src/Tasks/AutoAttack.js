import { AutoAttackConf } from "../config/index";

export const AutoAttack = () => {
  setInterval(() => {
    Tap(...AutoAttackConf.pos);
  }, AutoAttackConf.delay);
}

