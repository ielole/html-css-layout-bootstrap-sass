'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

//on document ready
$(()=>{
$('.sign-up-form').on('submit', function(e){
  e.preventDefault();
  let $coolBro = $('#sign-up-email').val();
  //$ referring to jQuery doesn't have an actual fxn beside as a sign post
  //debugger;

  console.log(coolBro);

  $('#sign-up-modal').modal('hide');
  //use above to hide stuff instead of javascript .hide
  //think about bubbling up especially when only being able to click a square once
  });
});
