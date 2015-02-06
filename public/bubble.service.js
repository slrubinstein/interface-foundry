'use strict';

angular.module('ifApp')
	.factory('bubbleService', bubbleService);

bubbleService.$inject = ['dataService', '$q', '$http'];

function bubbleService(dataService, $q, $http) {
	
	var stacks = [],
			bubbles = [];

	return {
		bubbles: bubbles,
		filterBubbles: filterBubbles,
		getBubbles: getBubbles,
		reorderBubbles: reorderBubbles,
		stackBubbles: stackBubbles,
		stacks: stacks
	};


	function filterBubbles(type) {
		if (type === 'all') {
			stacks = stackBubbles(bubbles);
			return stacks;
		}
		var filtered = bubbles.filter(function(b) {
			return b.subType === type;
		});
		stacks = stackBubbles(filtered);
		return stacks;
	}

	function getBubbles() {
		var tempStacks;

		return dataService.get()
	    .then(function (result) {
	    	angular.copy(result.data, bubbles);
	    	tempStacks = stackBubbles(bubbles);
	    	angular.copy(tempStacks, stacks);
    });
	}

	function reorderBubbles(index, card) {
		var temp = stacks[index].topCard;
		stacks[index].topCard = stacks[index][card];
		stacks[index][card] = temp;
		return stacks;
	}

	function stackBubbles(bubs) {
		var workingStacks = [],
				bubblesCopy = bubs.slice(0);
		while (bubblesCopy.length) {
			var stack ={
				topCard: bubblesCopy.shift(),
				midCard: bubblesCopy.shift(),
				botCard: bubblesCopy.shift()
			}
			workingStacks.push(stack)
		}
		return workingStacks;
	}
}