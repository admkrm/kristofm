module.exports = function(config) {
			// Filters
			config.addFilter('head', require('./lib/filters/head.js'));

			// Collections
			config.addCollection("notes", function(collection) {
				const coll = collection.getFilteredByGlob("notes/*.md");
				for(let i = 0; i < coll.length ; i++) {
			    const prevPost = coll[i-1];
			    const nextPost = coll[i + 1];

			    coll[i].data["prevPost"] = prevPost;
			    coll[i].data["nextPost"] = nextPost;
			  }
			  return coll;
			});
			config.addCollection("noteTags", require('./lib/collections/notes/taglist.js'));
			config.addCollection("noteTagCollections", require('./lib/collections/notes/tagitems.js'));
			config.addCollection("noteCategories", require('./lib/collections/notes/categorylist.js'));
			config.addCollection("noteCategoryCollections", require('./lib/collections/notes/categoryitems.js'));
			config.addCollection("links", function(collection) {return collection.getFilteredByGlob("links/*.md");});
			config.addCollection("linkTags", require('./lib/collections/links/taglist.js'));
			config.addCollection("linkTagCollections", require('./lib/collections/links/tagitems.js'));
			config.addCollection("linkCategories", require('./lib/collections/links/categorylist.js'));
			config.addCollection("linkCategoryCollections", require('./lib/collections/links/categoryitems.js'));
			config.addCollection("writing", function(collection) {return collection.getFilteredByGlob("writing/*.md");});
			config.addCollection("writingTags", require('./lib/collections/writing/taglist.js'));
			config.addCollection("writingTagCollections", require('./lib/collections/writing/tagitems.js'));
			config.addCollection("writingCategories", require('./lib/collections/writing/categorylist.js'));
			config.addCollection("writingCategoryCollections", require('./lib/collections/writing/categoryitems.js'));
			config.addCollection("teaching", function(collection) {return collection.getFilteredByGlob("teaching/*.md");});
			config.addCollection("teachingTags", require('./lib/collections/teaching/taglist.js'));
			config.addCollection("teachingTagCollections", require('./lib/collections/teaching/tagitems.js'));
			config.addCollection("teachingCategories", require('./lib/collections/teaching/categorylist.js'));
			config.addCollection("teachingCategoryCollections", require('./lib/collections/teaching/categoryitems.js'));
			config.addCollection("gallery", function(collection) {return collection.getFilteredByGlob("gallery/*.md");});
			config.addCollection("galleryTags", require('./lib/collections/gallery/taglist.js'));
			config.addCollection("galleryTagCollections", require('./lib/collections/gallery/tagitems.js'));
			config.addCollection("galleryCategories", require('./lib/collections/gallery/categorylist.js'));
			config.addCollection("galleryCategoryCollections", require('./lib/collections/gallery/categoryitems.js'));
			config.addCollection("library", function(collection) {return collection.getFilteredByGlob("library/**/*.md");});
			config.addCollection("libraryTags", require('./lib/collections/library/taglist.js'));
			config.addCollection("libraryTagCollections", require('./lib/collections/library/tagitems.js'));
			config.addCollection("libraryCategories", require('./lib/collections/library/categorylist.js'));
			config.addCollection("libraryCategoryCollections", require('./lib/collections/library/categoryitems.js'));
			config.addCollection("yopList", require('./lib/collections/library/yoplist.js'));
			config.addCollection("yops", require('./lib/collections/library/yopbooks.js'));
			config.addCollection("photographerList", require('./lib/collections/library/photographerlist.js'));
			config.addCollection("photographerBooks", require('./lib/collections/library/photographerbooks.js'));
			config.addCollection("photographers", function(collection) {return collection.getFilteredByGlob("photographers/*.md");});

			// Passthrough
		  config.addPassthroughCopy("media");
  		config.addPassthroughCopy("css");
			config.addPassthroughCopy("js");
			config.setDataDeepMerge(true);

		  return {
		    templateFormats: [
		      "md",
		      "njk",
		      "html",
		      "liquid"
		    ],

		    pathPrefix: "/",

		    markdownTemplateEngine: "njk",
		    htmlTemplateEngine: "njk",
		    dataTemplateEngine: "njk",
		    passthroughFileCopy: true,
		    dir: {
		      input: ".",
		      includes: "_includes",
		      data: "_data",
		      output: "_site"
		    }
		  };
};
