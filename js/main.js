var Tendarts = window.Tendarts || {};

var url = new URL(window.location.href);
var from = url.searchParams.get('from');
var $main = $('#main');
var $form = $('#interestsForm');
var $thanks = $('#thanks');

console.log(from);
if (from) {
  //Only subscribe if param form is in the url
  Tendarts.init({
    token: 'ae78ae500e964ca9f3b4bd50dc48e42f6f9f77ea',
    publicKey:
      'BP9AhaIxlUspDadNAJTD6r3uinq6RbJh8NetzMwPg3zzbYYG4lX39jISja9BNyD1egzC_pou4m9KTKxj_m0Vgms',
    autosubscribe: true,
    geolocation: false,
    debug: true,
    scope: '/publisher-sample/',
    serviceWorkerPath: '/publisher-sample/'
  });
  console.log('addEventListener');
  document.addEventListener(
    'CREATE_DEVICE_EVENT',
    function() {
      console.log('event CREATE_DEVICE_EVENT');
      Tendarts.saveKeyInDevice('publisher', from);
      Tendarts.saveKeyInUser('publisher', from);
      $main.fadeOut();
      $form.fadeIn();
    },
    false
  );
}

$form.on('submit', function(event) {
  event.preventDefault();
  var interests = [];
  $('input:checked').each(function(i) {
    interests.push(this.value);
  });
  if (!interests.length) {
    return;
  }
  var first = interests.shift();
  Tendarts.saveKeyInUser('interests', first, 4).then(() =>
    interests.forEach(function(interest) {
      Tendarts.saveKeyInUser('interests', interest);
    })
  );
  $form.fadeOut();
  $thanks.fadeIn();
  return false;
});
