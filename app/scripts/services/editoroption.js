'use strict';

/**
 * @ngdoc service
 * @name primeApp.editorOption
 * @description
 * # editorOption
 * Constant in the primeApp.
 */
angular.module('primeApp')
  .constant('editorOption', {
    plugins: 'autoresize contextmenu fullscreen hr link image imagetools code table advlist autolink lists charmap print preview paste searchreplace textcolor',
    toolbar: 'undo redo paste searchreplace | bold italic forecolor backcolor | alignleft aligncenter alignright | image table | code fullscreen',
    language: 'ko_KR',
    autoresize_max_height: 600,
    contextmenu: "link image inserttable | cell row column deletetable",
    image_caption: true,
    imagetools_toolbar: "rotateleft rotateright | flipv fliph | editimage imageoptions",
    table_toolbar: "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol",
    table_default_styles: {
      border: '1px solid black'
    }
  });
