import SettingName from './class/SettingName.js';
import SettingRules from './class/SettingRules.js';
import * as gb from './gb.js';

export const registerSettings=()=>{
    game.settings.register(gb.moduleName, 'fightingSkill', {
		name: gb.trans('SettingFighting'),
		hint: gb.trans('SettingFightingHint'),
		default: gb.trans('Fighting'),
		scope: "world",
		type: String,
		config: false
    }); 
    
    /*

    'ammoFromInventory' => PC
'npcAmmo' => NPC
    /// replaced by 'ammoManagement' from swade system
     game.settings.register(gb.moduleName, 'countShots', {
		name: gb.trans('SettingUseShots'),
		hint: gb.trans('SettingUseShotsHint'),
		default: true,
		scope: "world",
		type: Boolean,
		config: true
    });  */
    
    game.settings.register(gb.moduleName, 'countPP', {
		name: gb.trans('SettingUsePP'),
		hint: gb.trans('SettingUsePPHint'),
		default: true,
		scope: "world",
		type: Boolean,
		config: true
    });

    game.settings.register(gb.moduleName, 'itemNameClick', {
		name: gb.trans('SettingsItemNameClick'),
		hint: gb.trans('SettingsItemNameClickHint'),
		default: false,
		scope: "world",
		type: Boolean,
		config: true
    });


    game.settings.register(gb.moduleName, 'defaultStatusIcons', {
		name: gb.trans('SettingsDefaultStatus'),
		hint: gb.trans('SettingsDefaultStatusHint'),
		default: false,
		scope: "world",
		type: Boolean,
		config: true
    });


    game.settings.register(gb.moduleName, 'disableJokersWild', {
		name: gb.trans('SettingsJokersWild'),
		hint: gb.trans('SettingsJokersWildHint')+' '+gb.trans('AutoDisableWarn')+' '+gb.trans('JokersWild','SWADE'),
		default: false,
		scope: "world",
		type: Boolean,
		config: true
    });

    game.settings.register(gb.moduleName, 'disableAutoInitStart', {
      name: gb.trans('SettingsAutoInitStart'),
      hint: gb.trans('SettingsAutoInitStartHint')+' '+gb.trans('AutoDisableWarn')+' '+gb.trans('AutoInit','SWADE'),
      default: false,
      scope: "world",
      type: Boolean,
      config: true
      });


    game.settings.registerMenu(gb.moduleName,'settingName',{
        name: gb.trans('settingName'),
        label: gb.trans('settingNameButton'),
        hint: gb.trans('settingNameHint'),
        icon: 'far fa-address-card',
        type: SettingName,
        restricted: true
    });

    game.settings.registerMenu(gb.moduleName,'settingRules',{
      name: gb.trans('settingRules'),
      label: gb.trans('settingRulesButton'),
      hint: gb.trans('settingRulesHint'),
      icon: 'fas fa-list',
      type: SettingRules,
      restricted: true
  });


    gb.edgesNaming.map((value)=>{
        let confkey=gb.settingKey(value);
        game.settings.register(gb.moduleName,confkey,{
            scope: 'world',
            type: String,
            config: false,
            default: gb.trans(confkey)
        })
    })

    gb.abilitiesNaming.map((value)=>{
        let confkey=gb.settingKey(value);
        game.settings.register(gb.moduleName,confkey,{
            scope: 'world',
            type: String,
            config: false,
            default: gb.trans(confkey)
        })
    })

    gb.settingRules.map((value)=>{
      let confkey=gb.settingKey(value);
      game.settings.register(gb.moduleName,confkey,{
          scope: 'world',
          type: Boolean,
          config: false,
          default: false
      })
  })


  game.settings.register(gb.moduleName,'grittyDamage',{
    scope: 'world',
    type: String,
    config: false,
    default: ''
});

let outChoices={'':gb.trans('Disabled')};

game.tables.map(table=>{
  outChoices[table.id]=table.name;
})


game.settings.register(gb.moduleName,'outofcontrolTable',{
  name: gb.trans('OutOfControlTable'),
  hint: gb.trans('OutOfControlTableHint'),
  scope: 'world',
  type: String,
  config: true,
  choices: outChoices,
  default: ''
});

}