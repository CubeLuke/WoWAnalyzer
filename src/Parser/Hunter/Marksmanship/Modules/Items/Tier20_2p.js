import React from 'react';

import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';
import SpellLink from 'common/SpellLink';
import { formatPercentage } from 'common/format';
import Analyzer from 'Parser/Core/Analyzer';
import calculateEffectiveDamage from 'Parser/Core/calculateEffectiveDamage';
import HIT_TYPES from 'Parser/Core/HIT_TYPES';
import ItemDamageDone from 'Interface/Others/ItemDamageDone';

const T20_2P_CRIT_DMG_BONUS = 0.1;

/**
 * Casting two Aimed Shots in a row increases your critical strike damage by 10% for 6 sec.
 */
class Tier20_2p extends Analyzer {
  totalAimed = 0;
  buffedAimed = 0;
  bonusDmg = 0;

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasBuff(SPELLS.HUNTER_MM_T20_2P_BONUS.id);
  }
  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    const isCrit = event.hitType === HIT_TYPES.CRIT || event.hitType === HIT_TYPES.BLOCKED_CRIT;
    if (this.selectedCombatant.hasBuff(SPELLS.HUNTER_MM_T20_2P_BONUS_BUFF.id, event.timestamp)) {
      if (isCrit) {
        this.bonusDmg += calculateEffectiveDamage(event, T20_2P_CRIT_DMG_BONUS);
      }
      if (spellId === SPELLS.AIMED_SHOT.id) {
        this.buffedAimed += 1;
      }
    }
    if (spellId === SPELLS.AIMED_SHOT.id) {
      this.totalAimed += 1;
    }
  }
  item() {
    return {
      id: `spell-${SPELLS.HUNTER_MM_T20_2P_BONUS_BUFF.id}`,
      icon: <SpellIcon id={SPELLS.HUNTER_MM_T20_2P_BONUS_BUFF.id} />,
      title: <SpellLink id={SPELLS.HUNTER_MM_T20_2P_BONUS_BUFF.id} icon={false} />,
      result: (
        <dfn data-tip={`Your utilization of tier 20 2 piece: <ul> <li> Buffed aimed shots: ${this.buffedAimed}.</li> <li> Total aimed shots:  ${this.totalAimed}.</li></ul> `}>
          Buffed {<SpellLink id={SPELLS.AIMED_SHOT.id} />}s: {formatPercentage(this.buffedAimed / this.totalAimed)}%<br />
          <ItemDamageDone amount={this.bonusDmg} />
        </dfn>
      ),
    };
  }
}

export default Tier20_2p;
