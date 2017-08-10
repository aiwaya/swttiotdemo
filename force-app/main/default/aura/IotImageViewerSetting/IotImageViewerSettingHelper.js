({
	fireEvent: function(component) {
        var iotEvent = $A.get("e.c:IotEvent");
		iotEvent.setParams({'label': component.get('v.label')}).setParams({'temparature': component.get('v.temparature')});
        iotEvent.fire();
	}
})