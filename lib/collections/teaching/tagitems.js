/* Teaching: building a list of teachings per tag to be displayed on the tags's page */

module.exports = collection => {
	let resultArrays = {};
	collection.getFilteredByGlob("teaching/*.md").forEach(function(item) {
		if(Array.isArray(item.data["tags"])) {
			for(let tag of item.data["tags"]) {
				if( !resultArrays[tag] ) {
					resultArrays[tag] = [];
				}
				resultArrays[tag].push(item);
			}
		}
	});
	return resultArrays;
};
