({
	doInit: function(component, event, helper) {
		helper.fireEvent(component);
	},
	
	doSet: function(component, event, helper) {
		var label = component.get("v.label");		
		var temparature = component.get("v.temparature");
		var delay = component.get("v.delay");
		//alert("label: " + label + ", temparature: " + temparature + ", delay: " + delay);
		helper.fireEvent(component);
	},
	
	doAlert: function(component, event, helper) {
		var action = component.get("c.createCase");
		action.setParams({"accountId": component.get("v.accountId"), "serialNumber": component.get("v.serialNumber")});
		action.setCallback(this, function(response) {
			var state = response.getState();
			if (component.isValid() && state == "SUCCESS") {
				var caseId = response.getReturnValue();
				console.log("case Id: " + caseId);
			}
			else {
				console.log("Failed with state: " + state);
			}
		});
		$A.enqueueAction(action);
	}

})