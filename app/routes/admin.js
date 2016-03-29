import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('story');
  },

  actions: {
    delete(story) {
      if (confirm('delete this story?')){
        story.destroyRecord();
      }
    },
    saveStory(params) {
      var newStory = this.store.createRecord('story', params);
      newStory.save();
    }
  }
});
