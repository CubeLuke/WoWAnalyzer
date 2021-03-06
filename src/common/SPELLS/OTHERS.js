/**
 * Anything that isn't a class specific ability nor a racial goes in here. You need to do this manually, usually an easy way to do this is by opening a WCL report and clicking the icons of spells to open the relevant Wowhead pages, here you can get the icon name by clicking the icon, copy the name of the spell and the ID is in the URL.
 * You can access these entries like other entries in the spells files by importing `common/SPELLS` and using the assigned property on the SPELLS object. Please try to avoid abbreviating properties.
 */

export default {
  // General:
  FAKE_SPELL: {
    id: -100,
    name: 'Fake Spell',
    icon: 'spell_super_duper_fake02',
  },
  // I think both `Word of Recall (OLD)` and `Melee` may be seen as spell id 1, so this is a bit complicated.
  // WORD_OF_RECALL_OLD: {
  //   id: 1,
  //   name: 'Word of Recall (OLD)',
  //   icon: 'trade_engineering',
  // },
  MELEE: {
    id: 1,
    name: 'Auto attack',
    icon: 'inv_axe_02',
  },
  LEECH: {
    id: 143924,
    name: 'Leech',
    icon: 'spell_shadow_lifedrain02',
  },
  AVOIDANCE: {
    id: 143927,
    name: 'Avoidance',
    icon: 'ability_rogue_quickrecovery',
  },
  SPEED: {
    id: 143922,
    name: 'Speed',
    icon: 'petbattle_speed',
  },
  ANCIENT_HEALING_POTION: {
    id: 188016,
    name: 'Ancient Healing Potion',
    icon: 'inv_alchemy_70_red',
  },
  ASTRAL_HEALING_POTION: {
    id: 251645,
    name: 'Astral Healing Potion',
    icon: 'inv_alchemy_70_red',
  },
  POTION_OF_PROLONGED_POWER: {
    id: 229206,
    name: 'Potion of Prolonged Power',
    icon: 'trade_alchemy_dpotion_a28',
  },
  POTION_OF_THE_OLD_WAR: {
    id: 188028,
    name: 'Potion of the Old War',
    icon: 'inv_alchemy_70_orange',
  },
  POTION_OF_DEADLY_GRACE: {
    id: 188027,
    name: 'Potion of Deadly Grace',
    icon: 'inv_alchemy_70_flask02',
  },
  FLASK_OF_THE_WHISPERED_PACT: {
    id: 188031,
    name: 'Flask of the Whispered Pact',
    icon: 'inv_alchemy_70_flask03purple',
  },
  FLASK_OF_THE_SEVENTH_DEMON: {
    id: 188033,
    name: 'Flask of the Seventh Demon',
    icon: 'inv_alchemy_70_flask03orange',
  },
  FLASK_OF_THE_COUNTLESS_ARMIES: {
    id: 188034,
    name: 'Flask of the Countless Armies',
    icon: 'inv_alchemy_70_flask03red',
  },
  FLASK_OF_TEN_THOUSAND_SCARS: {
    id: 188035,
    name: 'Flask of Ten Thousand Scars',
    icon: 'inv_alchemy_70_flask03green',
  },
  DEFILED_AUGMENT_RUNE: {
    id: 224001,
    name: 'Defiled Augment Rune',
    icon: 'ability_bossfellord_felspike',
  },
  LEYTORRENT_POTION: {
    id: 188030,
    name: 'Leytorrent Potion',
    icon: 'inv_alchemy_70_flask01',
  },
  ANCIENT_MANA_POTION: {
    id: 188017,
    name: 'Ancient Mana Potion',
    icon: 'inv_alchemy_70_blue',
  },
  UNBENDING_POTION: {
    id: 127845,
    name: 'Unbending Potion',
    icon: 'inv_alchemy_70_flask04',
  },
  SPIRIT_BERRIES: {
    id: 223573,
    name: 'Spirit Berries',
    icon: 'inv_misc_food_93_skethylberries',
  },
  PURE_RAGE_POTION: {
    id: 175821,
    name: 'Pure Rage Potion',
    icon: 'trade_alchemy_dpotion_a13',
  },
  SUNFRUIT: {
    id: 223595,
    name: 'Sunfruit',
    icon: 'inv_misc_food_42',
  },
  HEALTHSTONE: {
    id: 6262,
    name: 'Healthstone',
    icon: 'warlock_healthstone',
  },
  ANCIENT_REJUVENATION_POTION: {
    id: 188018,
    name: 'Ancient Rejuvenation Potion',
    icon: 'inv_alchemy_70_purple',
  },
  MARK_OF_THE_CLAW: {
    id: 190909,
    name: 'Mark of the Claw',
    icon: 'classicon_druid',
  },
  // Food Buffs
  THE_HUNGRY_MAGISTER: {
    id: 225602,
    name: 'The Hungry Magister',
    icon: 'spell_misc_food',
  },
  AZSHARI_SALAD: {
    id: 225603,
    name: 'Azshari Salad',
    icon: 'spell_misc_food',
  },
  NIGHTBORNE_DELICACY_PLATTER: {
    id: 225604,
    name: 'Nightborne Delicacy Platter',
    icon: 'spell_misc_food',
  },
  SEED_BATTERED_FISH_PLATE: {
    id: 225605,
    name: 'Seed-Battered Fish Plate',
    icon: 'spell_misc_food',
  },
  STAM_FEAST: {
    id: 201637,
    name: 'Lavish Suramar Feast',
    icon: 'spell_misc_food',
  },
  STR_FEAST: {
    id: 201638,
    name: 'Lavish Suramar Feast',
    icon: 'spell_misc_food',
  },
  AGI_FEAST: {
    id: 201639,
    name: 'Lavish Suramar Feast',
    icon: 'spell_misc_food',
  },
  INT_FEAST: {
    id: 201640,
    name: 'Lavish Suramar Feast',
    icon: 'spell_misc_food',
  },
  DARKMOON_VERS_FOOD: {
    id: 185736,
    name: 'Lemon Herb Filet',
    icon: 'spell_misc_food',
  },
  // Items buffs:
  JACINS_RUSE: {
    id: 224149,
    name: 'Jacin\'s Ruse',
    icon: 'sha_ability_rogue_bloodyeye',
  },
  GNAWED_THUMB_RING: {
    id: 228461,
    name: 'Taste of Mana',
    icon: 'inv_70_dungeon_ring6a',
  },
  VELENS_FUTURE_SIGHT_BUFF: {
    id: 235966,
    name: 'Velen\'s Future Sight',
    icon: 'spell_holy_healingfocus',
  },
  VELENS_FUTURE_SIGHT_HEAL: {
    id: 235967,
    name: 'Velen\'s Future Sight',
    icon: 'spell_holy_healingfocus',
  },
  XAVARICS_MAGNUM_OPUS: {
    id: 207472,
    name: 'Xavaric\'s Magnum Opus',
    icon: 'ability_vehicle_shellshieldgenerator',
  },
  FRAGILE_ECHO_ENERGIZE: {
    id: 215270,
    name: 'Fragile Echo',
    icon: 'spell_warlock_demonsoul',
  },
  FRAGILE_ECHO_BUFF: {
    id: 215267,
    name: 'Fragile Echo',
    icon: 'spell_warlock_demonsoul',
  },
  SEPHUZS_SECRET_BUFF: {
    id: 208052,
    name: 'Sephuz\'s Secret',
    icon: 'inv_jewelry_ring_149',
  },
  MARK_OF_THE_ANCIENT_PRIESTESS: {
    id: 228401,
    name: 'Mark of the Ancient Priestess',
    icon: 'ability_priest_ascension',
  },
  MARK_OF_THE_HIDDEN_SATYR: {
    id: 191259,
    name: 'Mark of the Hidden Satyr',
    icon: 'sha_spell_fire_fireball02_nightmare',
  },
  // Dungeon Trinkets
  SHADOWS_STRIKE: { // Dreadstone of Endless Shadows crit proc
    id: 238499,
    name: "Shadow's Strike",
    icon: 'ability_warlock_shadowfurytga',
  },
  SHADOW_MASTER: { // Dreadstone of Endless Shadows mastery proc
    id: 238500,
    name: "Shadow Master",
    icon: 'ability_creature_disease_05',
  },
  SWARMING_SHADOWS: { // Dreadstone of Endless Shadows haste proc
    id: 238501,
    name: "Swarming Shadows",
    icon: 'spell_shadow_shadesofdarkness',
  },
  LEGIONS_GAZE: { //Eye of Command buff
    id: 230152,
    name: 'Legion\'s Gaze',
    icon: 'inv_pet_inquisitoreye',
  },
  QUITE_SATISFIED_VERSATILITY: { //Majordomo's Dinner Bell vers proc
    id: 230105,
    name: 'Quite Satisfied',
    icon: 'inv_misc_food_03',
  },
  QUITE_SATISFIED_CRIT: { //Majordomo's Dinner Bell crit proc
    id: 230102,
    name: 'Quite Satisfied',
    icon: 'inv_misc_food_03',
  },
  QUITE_SATISFIED_HASTE: { //Majordomo's Dinner Bell haste proc
    id: 230103,
    name: 'Quite Satisfied',
    icon: 'inv_misc_food_03',
  },
  QUITE_SATISFIED_MASTERY: { //Majordomo's Dinner Bell mastery proc
    id: 230104,
    name: 'Quite Satisfied',
    icon: 'inv_misc_food_03',
  },
  DIRGE_OF_ANGERBODA: { //Memento of Angerboda mastery proc
    id: 214807,
    name: 'Dirge of Angerboda',
    icon: 'spell_deathknight_unholypresence',
  },
  HOWL_OF_INGVAR: { //Memento of Angerboda crit proc
    id: 214802,
    name: 'Howl of Ingvar',
    icon: 'spell_deathknight_bloodpresence',
  },
  WAIL_OF_SVALA: { //Memento of Angerboda haste proc
    id: 214803,
    name: 'Wail of Svala',
    icon: 'spell_deathknight_frostpresence',
  },
  DOWN_DRAFT: { //Nightmare Egg Shell buff
    id: 214340,
    name: 'Down Draft',
    icon: 'ability_skyreach_wind',
  },
  ACCELERATION: { //Chrono Shard buff
    id: 214128,
    name: 'Acceleration',
    icon: 'inv_enchant_shardbrilliantsmall',
  },
  GREASE_THE_GEARS: { //Fel-Oiled Infernal Machine buff
    id: 238534,
    name: 'Grease the Gears',
    icon: 'inv_misc_enggizmos_14',
  },
  COLLAPSE: { //Ring of Collapsing Futures
    id: 234142,
    name: 'Collapse',
    icon: 'spell_priest_void-blast',
  },

  // Nighthold Trinkets
  RECURSIVE_STRIKES: {
    id: 225739,
    name: 'Recursive Strikes',
    icon: 'sha_ability_mage_firestarter_nightborne',
  },
  ACCELERANDO: {
    id: 225719,
    name: 'Accelerando',
    icon: 'spell_holy_borrowedtime',
  },
  // Tomb trinkets
  CLEANSING_MATRIX: {
    id: 242619,
    name: 'Cleansing Matrix',
    icon: 'inv__wod_arakoa4',
  },
  AOF_INFUSION_OF_LIGHT: {
    id: 242621,
    name: 'Infusion of Light',
    icon: 'spell_shadow_mindshear',
  },
  GUILTY_CONSCIENCE: {
    id: 242327,
    name: 'Guilty Conscience',
    icon: 'spell_shadow_mindshear',
  },
  GUIDING_HAND: {
    id: 242622,
    name: 'Guiding Hand',
    icon: 'spell_shadow_mindshear',
  },
  FRUITFUL_MACHINATIONS: {
    id: 242623,
    name: 'Fruitful Machinations',
    icon: 'spell_shadow_mindshear',
  },
  OCEANS_EMBRACE: {
    id: 242474,
    name: 'Ocean\'s Embrace',
    icon: 'inv_jewelcrafting_starofelune_02',
  },
  CEASELESS_TOXIN: {
    id: 242497,
    name: 'Ceaseless Toxin',
    icon: 'inv_potionc_5',
  },
  SUMMON_DREAD_REFLECTION: {
    id: 246461,
    name: 'Summon Dread Reflection',
    icon: 'spell_warlock_soulburn',
  },
  DREAD_TORRENT: {
    id: 246464,
    name: 'Dread Torrent',
    icon: 'spell_warlock_soulburn',
  },
  INFERNAL_CINDERS: {
    id: 242218,
    name: 'Infernal Cinders',
    icon: 'inv_weapon_shortblade_54',
  },
  UMBRAL_GLAIVE_STORM_CAST: {
    id: 242553,
    name: 'Umbral Glaive Storm',
    icon: 'ability_upgrademoonglaive',
  },
  UMBRAL_GLAIVE_STORM_TICK: { // this is the damage ID, and also each tick of procs a cast event with this ID
    id: 242556,
    name: 'Umbral Glaive Storm',
    icon: 'ability_upgrademoonglaive',
  },
  SHATTERING_UMBRAL_GLAIVES: { // this is the shatter's damage ID, and also the shatter procs a cast event with this ID
    id: 242557,
    name: 'Shattering Umbral Glaives',
    icon: 'ability_upgrademoonglaive',
  },
  STRENGTH_OF_WILL: {
    id: 242642,
    name: 'Strength of Will',
    icon: 'inv_wand_36',
  },
  SOLAR_INFUSION: { //Chalice of Moonlight crit proc
    id: 242544,
    name: 'Solar Infusion',
    icon: 'achievment_raid_houroftwilight',
  },
  LUNAR_INFUSION: { //Chalice of Moonlight haste proc
    id: 242543,
    name: 'Lunar Infusion',
    icon: 'ability_druid_lunarguidance',
  },
  // T21 Healing trinkets
  TARRATUS_KEYSTONE: {
    id: 253282,
    name: 'Tarratus Keystone',
    icon: 'inv__wod_arakoa4',
  },
  HIGHFATHERS_TIMEKEEPING_BUFF: {
    id: 253287,
    name: 'Highfather\'s Timekeeping',
    icon: 'spell_priest_psyfiend',
  },
  HIGHFATHERS_TIMEKEEPING_HEAL: {
    id: 253288,
    name: 'Highfather\'s Timekeeping',
    icon: 'spell_priest_psyfiend',
  },
  EONARS_COMPASSION_HEAL: {
    id: 257442,
    name: 'Emerald Blossom',
    icon: 'inv_antorus_green',
  },
  EONARS_COMPASSION_PROCBUFF: {
    id: 256824,
    name: 'Mark of Eonar',
    icon: 'inv_antorus_green',
  },
  EONARS_COMPASSION_PANTHEONSHIELD: {
    id: 257444,
    name: 'Verdant Embrace',
    icon: 'talentspec_druid_restoration',
  },
  EONARS_COMPASSION_PANTHEONBUFF_RDRUID: {
    id: 257470,
    name: 'Eonar\'s Verdant Embrace',
    icon: 'talentspec_druid_restoration',
  },
  EONARS_COMPASSION_PANTHEONBUFF_RMONK: {
    id: 257471,
    name: 'Eonar\'s Verdant Embrace',
    icon: 'talentspec_druid_restoration',
  },
  EONARS_COMPASSION_PANTHEONBUFF_HPALADIN: {
    id: 257472,
    name: 'Eonar\'s Verdant Embrace',
    icon: 'talentspec_druid_restoration',
  },
  EONARS_COMPASSION_PANTHEONBUFF_DPRIEST: {
    id: 257473,
    name: 'Eonar\'s Verdant Embrace',
    icon: 'talentspec_druid_restoration',
  },
  EONARS_COMPASSION_PANTHEONBUFF_HPRIEST: {
    id: 257474,
    name: 'Eonar\'s Verdant Embrace',
    icon: 'talentspec_druid_restoration',
  },
  EONARS_COMPASSION_PANTHEONBUFF_RSHAMAN: {
    id: 257475,
    name: 'Eonar\'s Verdant Embrace',
    icon: 'talentspec_druid_restoration',
  },
  //T21 Dps Trinket
  SHADOW_STRIKE: { //Seeping Scourewing Base Damage
    id: 253324,
    name: 'Shadow Strike',
    icon: 'ability_creature_poison_03',
  },
  ISOLATED_STRIKE: {
    id: 255609,
    name: 'Isolated Strike',
    icon: 'ability_creature_poison_03',
  },
  GORSHALACHS_LEGACY_FIRST_HIT: {
    id: 253329,
    name: 'Gorshalach\'s Legacy',
    icon: 'inv_sword_1h_firelandsraid_d_01',
  },
  GORSHALACHS_LEGACY_SECOND_HIT: {
    id: 255673,
    name: 'Gorshalach\'s Legacy',
    icon: 'inv_sword_1h_firelandsraid_d_01',
  },
  GOLGANNETHS_VITALITY_RAVAGING_STORM: { //Each tick is a cast event of this spell
    id: 257286,
    name: 'Ravaging Storm',
    icon: 'inv_antorus_grey',
  },
  GOLGANNETHS_VITALITY_THUNDEROUS_WRATH: {
    id: 257430,
    name: 'Golganneth\'s Thunderous Wrath',
    icon: 'ability_thunderking_thunderstruck',
  },
  GOLGANNETHS_VITALITY_MARK_OF_GOLGANNETH: {
    id: 256821,
    name: 'Mark of Golganneth',
    icon: 'inv_antorus_grey',
  },
  GOLGANNETHS_VITALITY_THUNDEROUS_WRATH_BUFF: {
    id: 256833,
    name: 'Golganneth\'s Thunderous Wrath',
    icon: 'ability_thunderking_thunderstruck',
  },
  //Khaz'goroths Courage procs:
  WORLDFORGERS_FLAME_BUFF: {
    id: 256826,
    name: 'Worldforger\'s Flame',
    icon: 'inv_antorus_red',
  },
  WORLDFORGERS_FLAME_DAMAGE: {
    id: 257244,
    name: 'Worldforger\'s Flame',
    icon: 'inv_antorus_red',
  },
  KHAZGOROTHS_SHAPING: { //Khaz'goroths Pantheon Proc
    id: 256835,
    name: 'Khaz\'goroth\'s Shaping',
    icon: 'spell_nature_unleashedrage',
  },
  FIRE_MINES: { // forgefiends fabricator
    id: 253321,
    name: 'Fire Mines',
    icon: 'inv_jewelry_orgrimmarraid_trinket_04_green',
  },
  FIRE_MINES_2: { // also forgefiends fabricator
    id: 253322,
    name: 'Fire Mines',
    icon: 'inv_jewelry_orgrimmarraid_trinket_04_green',
  },
  LEGION_BOMBARDMENT: { // terminus signaling beacon
    id: 257376,
    name: 'Legion Bombardment',
    icon: 'spell_fire_felrainoffire',
  },
  PROTOTYPE_PERSONNEL_DECIMATOR: {
    id: 255629,
    name: 'Prototype Personnel Decimator',
    icon: 'ability_rogue_cannonballbarrage',
  },
  SHEATH_OF_ASARA_SHADOW_BLADES: { // sheath of asara
    id: 257702,
    name: 'Shadow Blades',
    icon: 'spell_shadow_shadowbolt',
  },
  RUSH_OF_KNOWLEDGE: { //Norgannon's Prowess Int Buff
    id: 256828,
    name: 'Rush of Knowledge',
    icon: 'inv_antorus_blue',
  },
  NORGANNONS_COMMAND: { //Norgannon's Prowess Pantheon Buff
    id: 256836,
    name: 'Norgannon\'s Command',
    icon: 'ability_monk_forcesphere_arcane',
  },
  NORGANNONS_FIREBALL: {
    id: 257241,
    name: 'Norgannon\'s Fireball',
    icon: 'spell_fire_fireball02',
  },
  NORGANNONS_FROSTBOLT: {
    id: 257242,
    name: 'Norgannon\'s Frostbolt',
    icon: 'spell_frost_frostbolt02',
  },
  NORGANNONS_ARCANE_MISSLE: {
    id: 257243,
    name: 'Norgannon\'s Arcane Missle',
    icon: 'spell_nature_starfall',
  },
  NORGANNONS_DIVINE_SMITE: {
    id: 257532,
    name: 'Norgannon\'s Divine Smite',
    icon: 'spell_holy_holysmite',
  },
  NORGANNONS_WRATH: {
    id: 257533,
    name: 'Norgannon\'s Wrath',
    icon: 'spell_nature_wrathv2',
  },
  NORGANNONS_SHADOW_BOLT: {
    id: 257534,
    name: 'Norgannon\'s Shadow Bolt',
    icon: 'spell_shadow_shadowbolt',
  },
  CYCLE_OF_THE_LEGION: { //Acrid three stat buff
    id: 253260,
    name: 'Cycle of the Legion',
    icon: 'inv_7_0raid_trinket_01c',
  },
  FERVOR_OF_THE_LEGION: { //Acrid Haste Buff
    id: 253261,
    name: 'Fervor of the Legion',
    icon: 'inv_misc_volatilelife_green',
  },
  MALICE_OF_THE_LEGION: { //Acrid Mastery Buff
    id: 255744,
    name: 'Malice of the Legion',
    icon: 'inv_misc_volatilewater',
  },
  BRUTALITY_OF_THE_LEGION: { //Acrid Crit buff
    id: 255742,
    name: 'Brutality of the Legion',
    icon: 'inv_misc_volatilelife',
  },
  FLAMES_OF_FHARG: {
    id: 253308,
    name: 'Flames of F\'harg',
    icon: 'ability_warlock_backdraft',
  },
  CORRUPTION_OF_SHATUG: {
    id: 253307,
    name: 'Corruption of Shatug',
    icon: 'spell_fire_twilightimmolation',
  },
  // Item Abilities
  SPECTRAL_OWL: {
    id: 242570,
    name: 'Spectral Owl',
    icon: 'inv_jewelcrafting_purpleowl',
  },
  SPECTRAL_BLAST: {
    id: 246442,
    name: 'Spectral Blast',
    icon: 'inv_axe_02',
  },
  SPECTRAL_BOLT: {
    id: 242571,
    name: 'Spectral Bolt',
    icon: 'ability_thunderking_thunderstruck',
  },
  SPECTRAL_THURIBLE_DAMAGE: {
    id: 246751,
    name: 'Piercing Anguish',
    icon: 'inv_spear_08',
  },
  TERROR_FROM_BELOW_DAMAGE: {
    id: 242525,
    name: 'Terror From Below',
    icon: 'trade_archaeology_sharkjaws',
  },
  TOME_OF_UNRAVELING_SANITY_DAMAGE: {
    id: 243941,
    name: 'Insidious Corruption',
    icon: 'inv_archaeology_70_demon_flayedskinchronicle',
  },
  TOME_OF_UNRAVELING_SANITY_BUFF: {
    id: 243942,
    name: 'Extracted Sanity',
    icon: 'inv_archaeology_70_demon_flayedskinchronicle',
  },
  RISING_TIDES: {
    id: 242458,
    name: 'Rising Tides',
    icon: 'inv_7_0raid_trinket_04a',
  },
  // Engine of Eradication buff
  DEMONIC_VIGOR: {
    id: 242612,
    name: 'Demonic Vigor',
    icon: 'inv_relics_warpring',
  },
  MARCH_OF_THE_LEGION: {
    id: 228446,
    name: 'March of the Legion',
    icon: 'ability_warlock_fireandbrimstone',
  },
  KILJAEDENS_BURNING_WISH_DAMAGE: {
    id: 235999,
    name: 'Kil\'jaeden\'s Burning Wish',
    icon: 'sha_spell_fire_bluepyroblast_nightmare',
  },
  KILJAEDENS_BURNING_WISH_CAST: {
    id: 235991,
    name: 'Kil\'jaeden\'s Burning Wish',
    icon: 'sha_spell_fire_bluepyroblast_nightmare',
  },
  ARCHIMONDES_HATRED_REBORN_ABSORB: {
    id: 235169,
    name: 'Archimonde\'s Hatred Reborn',
    icon: 'spell_nature_elementalshields',
  },
  ARCHIMONDES_HATRED_REBORN_DAMAGE: {
    id: 235188,
    name: 'Archimonde\'s Hatred Reborn',
    icon: 'spell_nature_elementalshields',
  },
  DRUMS_OF_FURY: {
    id: 178207,
    name: 'Drums of Fury',
    icon: 'inv_misc_drum_01',
  },
  DRUMS_OF_RAGE: {
    id: 146555,
    name: 'Drums of Rage',
    icon: 'inv_misc_drum_05',
  },
  DRUMS_OF_THE_MOUNTAIN: {
    id: 230935,
    name: 'Drums of the Mountain',
    icon: 'inv_archaeology_70_tauren_drum',
  },
  // Cinidaria
  SYMBIOTE_STRIKE: {
    id: 207694,
    name: 'Symbiote Strike',
    icon: 'inv_leather_raiddruid_m_01belt',
  },
  ROOTS_OF_SHALADRASSIL_HEAL: {
    id: 208981,
    name: 'Roots of Shaladrassil',
    icon: 'inv_robe_pants_pvpwarlock_c_02',
  },

  // Encounter mechanics
  RECURSIVE_STRIKES_ENEMY: {
    id: 218508,
    name: 'Recursive Strikes',
    icon: 'ability_mage_massinvisibility',
  },
  MAGIC_MELEE: {
    id: -32, // No idea why it's negative, but adds with "magic melee attacks" (eels on Mistress/tank add on KJ melee) cast an ability with this ID
    name: 'Melee',
    icon: 'inv_axe_02',
  },
  ASTRAL_VULNERABILITY: {
    id: 236330,
    name: 'Astral Vulnerability',
    icon: 'spell_frost_wisp',
  },
  ANNIHILATION_TRILLIAX: {
    id: 207631,
    name: 'Annihilation',
    icon: 'spell_arcane_arcanetorrent',
  },
  // Garothi Feedback Conduit
  FEEDBACK_LOOP: {
    id: 253269,
    name: 'Feedback Loop',
    icon: 'spell_holy_dispelmagic',
  },
  VALARJARS_PATH: {
    id: 215956,
    name: 'Valarjar\'s Path',
    icon: 'inv_misc_horn_03',
  },
  // Dot spell for Carafe of Searing Light
  REFRESHING_AGONY_DOT: {
    id: 253284,
    name: 'Refreshing Agony',
    icon: 'ability_priest_flashoflight',
  },
  // Mana return spell for Carafe of Searing Light
  REFRESHING_AGONY_MANA: {
    id: 255981,
    name: 'Refreshing Agonyt',
    icon: 'ability_priest_flashoflight',
  },
  FELSHIELD_ABSORB: {
    id: 253277,
    name: 'Felshield',
    icon: 'ability_vehicle_shellshieldgenerator_green',
  },
  FELSHIELD_DAMAGE: {
    id: 253278,
    name: 'Felshield',
    icon: 'ability_vehicle_shellshieldgenerator_green',
  },
  //Aman'Thul's Vision
  AMANTHULS_GRANDEUR: { //Pantheon Proc
    id: 256832,
    name: 'Aman\'Thul\'s Grandeur',
    icon: 'ability_shaman_repulsiontotem',
  },
  GLIMPSE_OF_ENLIGHTENMENT: { //Regular Proc
    id: 256818,
    name: 'Glimpse of Enlightenment',
    icon: 'inv_antorus_turquoise',
  },
  //Aggramar's Conviction Argus Tanking Pantheon Trinket
  AGGRAMARS_FORTITUDE: { //Pantheon Proc
    id: 256831,
    name: 'Aggramar\'s Fortitude',
    icon: 'spell_holy_empowerchampion',
  },
  CELESTIAL_BULWARK: { //Regular Proc
    id: 256816,
    name: 'Celestial Bulwark',
    icon: 'inv_antorus_orange',
  },
  //Smoldering Titanguard
  BULLWARK_OF_FLAME: { //absorb
    id: 251946,
    name: 'Bullwark of Flame',
    icon: 'ability_warrior_shieldmastery',
  },
  WAVE_OF_FLAME: { //damage waves
    id: 251948,
    name: 'Wave of Flame',
    icon: 'ability_warlock_coil2',
  },
  // Diima's
  CHILLING_NOVA: { //AoE damage
    id: 251940,
    name: 'Chilling Nova',
    icon: 'spell_frost_frostward',
  },
  FROZEN_ARMOR: {
    id: 251941,
    name: 'Frozen Armor',
    icon: 'ability_hunter_glacialtrap',
  },
  // Riftworld Codex
  WINDS_OF_KARETH: { //6sec HoT
    id: 251938,
    name: 'Winds of Kareth',
    icon: 'spell_nature_regeneration_02',
  },
  LIGHT_OF_ABSOLARN: { //Absorb Shield
    id: 252545,
    name: 'Light of Absolarn',
    icon: 'spell_frost_frostarmor02',
  },
  FLAMES_OF_RUVARAAD: { //8sec Immolation - Buff
    id: 256415,
    name: 'Flames of Ruvaraad',
    icon: 'spell_fire_ragnaros_supernova',
  },
  FLAMES_OF_RUVARAAD_HEALING: {
    id: 252550,
    icon: 'spell_fire_ragnaros_supernova',
  },
  SWAP_HOUNDS: { //swaps the Eye trinket from Hounds
    id: 252075,
  },
  // Antorus: Argus the Unmaker boss fight
  STRENGTH_OF_THE_SEA: { // 2000 Haste/versa buff
    id: 253901,
    name: 'Strength of the Sea',
    icon: 'inv_elemental_primal_water',
  },
  STRENGTH_OF_THE_SKY: { // 2000 Crit/mastery buff
    id: 253903,
    name: 'Strength of the Sky',
    icon: 'spell_nature_unrelentingstorm',
  },
  //Darkmoon Whistle
  BLOW_DARKMOON_WHISTLE: { //Blows the whistle making an annoying voice
    id: 132568,
    name: 'Blow Darkmoon Whistle',
    icon: 'ability_hunter_beastcall',
  },
  DARKMOON_FIREWORK: { //Darkmoon Firework toy
    id: 103740,
    name: 'Darkmoon Firework',
    icon: 'inv_misc_missilesmallcluster_green',
  },

};
