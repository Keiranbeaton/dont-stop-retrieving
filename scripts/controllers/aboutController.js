(function(module) {
  //creating an empty aboutController object.
  var aboutController = {};
  //routes the view to the About section
  aboutController.index = function() {
    aboutView.index();
  };
  module.aboutController = aboutController;
})(window);
