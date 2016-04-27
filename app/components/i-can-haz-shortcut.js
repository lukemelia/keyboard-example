import Ember from 'ember';
import { EKMixin, EKOnInsertMixin, keyUp, keyDown } from 'ember-keyboard';

export default Ember.Component.extend(EKMixin, EKOnInsertMixin, {
  init(){
    this._super(...arguments);
    this.log = Ember.A();
  },
  logKeyDown: Ember.on(keyDown('meta+Enter'), function(){
    this.get('log').pushObject('keyDown of meta+Enter');
  }),
  logKeyUp: Ember.on(keyUp('meta+Enter'), function(){
    this.get('log').pushObject('keyUp of meta+Enter');
  })
});
