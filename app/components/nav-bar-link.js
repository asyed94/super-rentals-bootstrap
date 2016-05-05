import Ember from 'ember';

var thisComponent = null;

export default thisComponent = Ember.Component.extend({
	tagName: "li",
	classNameBindings: ["isActive:active"],
	isActive: false,
	linkRoute: null,
	linkText: null
});
