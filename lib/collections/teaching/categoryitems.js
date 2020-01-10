/* Teaching: building a list of teachings per category to be displayed on the category's page */

module.exports = collection => {
	let teachingsPerCategory = {}
	collection.getFilteredByGlob("teaching/*.md").forEach(item => {
		let category = item.data.category
		if (typeof category !== "string")
			return
		if (Array.isArray(teachingsPerCategory[category]))
			teachingsPerCategory[category].push(item)
		else
			teachingsPerCategory[category] = [item]
	})
	return teachingsPerCategory
};
