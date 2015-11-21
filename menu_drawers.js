    /*
     * Open the drawer when the menu icon is clicked.
     * Code taken from L5 Solution Example.
     * TODO - Put code in .js file
     */
    var menu = document.querySelector('#menu');
    var main = document.querySelector('main');
    var drawer = document.querySelector('.nav');

    menu.addEventListener('click', function(e) {
      drawer.classList.toggle('open');
      e.stopPropagation();
    });
    main.addEventListener('click', function() {
      drawer.classList.remove('open');
    });