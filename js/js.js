// get rid of default value in input box
$('input[name=toDoItem]').focus(function() {
  $(this).val('');
})

$('#add').click(function() {
  
  var $input = $('input[name=toDoItem]').val();
  
  if ($input.length > 0) {
    $('#list').append('<li class="item ">' + $input + '<span class="trash close"' + '>' + '</span>' + '<label>' + '<input class="toggle" name="check" type="checkbox"' + '>' + '<i>' + '</i>' + '</label>' + '</li>');
  } else {
    alert("We'd all love to do nothing.");
  }
  
  // reset input box to no text
  $('input[name=toDoItem]').val('');
});

/*Allows user to delete items*/
$(document).on("click", ".close", function(){
    $(this).closest('.item').fadeOut(300);
});

$(document).on( "click", ".toggle",  function() {
  $(this).closest( ".item" ).toggleClass( "done" );
});

// remove list item
//$('#list').on('click', '.close', function() {
  //$(this).hide('2000', function() {
     //$(this).remove();
  //});
  
//});