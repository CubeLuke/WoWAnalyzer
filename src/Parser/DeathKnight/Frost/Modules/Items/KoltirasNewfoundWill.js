import React from 'react';

import SPELLS from 'common/SPELLS';
import ITEMS from 'common/ITEMS';

import Analyzer from 'Parser/Core/Analyzer';
import calculateEffectiveDamage from 'Parser/Core/calculateEffectiveDamage';

import ItemDamageDone from 'Interface/Others/ItemDamageDone';

import RuneTracker from '../../../Shared/RuneTracker';

const DAMAGE_MODIFIER = .1;

/**
 * Equip: Obliterate deals 10% more damage and has a 15% chance to refund 1 runes.
 */
class KoltirasNewfoundWill extends Analyzer {
  static dependencies = {
    runeTracker: RuneTracker,
  };

  bonusDamage = 0;

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasWaist(ITEMS.KOLTIRAS_NEWFOUND_WILL.id);
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if (spellId === SPELLS.OBLITERATE_MAIN_HAND_DAMAGE.id || spellId === SPELLS.OBLITERATE_OFF_HAND_DAMAGE.id) {
      this.bonusDamage += calculateEffectiveDamage(event, DAMAGE_MODIFIER);
    }
  }

  get runesGenerated() {
    // this is a little ugly to prevent the page from crashing when it accesses runeTracker before runeTracker is done processing
    return this.runeTracker.buildersObj.hasOwnProperty(SPELLS.KOLTIRAS_NEWFOUND_WILL.id) ? this.runeTracker.buildersObj[SPELLS.KOLTIRAS_NEWFOUND_WILL.id].generated : 0;
  }

  item() {
    return {
      item: ITEMS.KOLTIRAS_NEWFOUND_WILL,
      result: <dfn data-tip={`Runes refunded: ${this.runesGenerated}`}>
        <ItemDamageDone amount={this.bonusDamage} />
      </dfn>,
    };
  }
}

export default KoltirasNewfoundWill;
