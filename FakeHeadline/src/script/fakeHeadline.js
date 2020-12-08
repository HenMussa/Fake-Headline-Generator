var title = $('h1');
var site = $('p');

var loadFile = function(event) {
	var image = document.getElementById('upload');
    image.src = URL.createObjectURL(event.target.files[0]);
}

$('input#sub').on('click', function(){
    var wroteTitle = $('input#wroteTitle').val();
    title.text(wroteTitle)

    var wroteSite = $('input#site').val().toUpperCase();
    site.text(wroteSite)
})

