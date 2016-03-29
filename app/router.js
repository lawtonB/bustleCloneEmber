import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('details', {path: '/details/:details_id'});
  this.route('admin');
});

export default Router;
