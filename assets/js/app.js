$(document).ready(function(){
	$('.modal').modal();

  $('.add').click(function(){
    var addName = $('.name').val();
    var addNumber = $('.number').val();
    var addMail = $('.mail').val();
    $('body').append('<section class="container"><div class="contact z-depth-2"><div class="row"><div class="col s12"><h4>' + addName + '</h4><p>' + addNumber + '</p></div><div class="row"><div class="col s11 right-align"><a class="waves-effect waves-light btn remove">Borrar</a></div></div></div></section>');
  })
  $('.remove').click(function(){
    $('.contact').remove();
  })
})