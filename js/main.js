var Tendarts = window.Tendarts || {};

console.log(window.location.href);

var url = new URL(window.location.href);
var from = url.searchParams.get('from');
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
    key: {
      label: 'publisher',
      value: from,
      kind: 2
    },
    scope: '/publisher-sample/',
    serviceWorkerPath: '/publisher-sample/'
  });
}
