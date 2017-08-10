({
	handleEvent: function(component, event) {
		component.set('v.label', event.getParam('label'));
		component.set('v.temparature', event.getParam('temparature'));
	}
})