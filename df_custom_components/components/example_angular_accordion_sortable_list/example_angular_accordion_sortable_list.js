/*Life's Not Complete Without Art (Expand Your Editor > ASCII Is Not Responsive ;)


							             __---__
                            _-       _--______
                       __--( /     \ )XXXXXXXXXXXXX_
                     --XXX(   O   O  )XXXXXXXXXXXXXXX-
                    /XXX(       U     )        XXXXXXX\
                  /XXXXX(              )--_  XXXXXXXXXXX\
                 /XXXXX/ (      O     )   XXXXXX   \XXXXX\
                 XXXXX/   /            XXXXXX   \__ \XXXXX----
                 XXXXXX__/          XXXXXX         \__----  -
         ---___  XXX__/          XXXXXX      \__         ---
           --  --__/   ___/\  XXXXXX            /  ___---=
             -_    ___/    XXXXXX              '--- XXXXXX
               --\/XXX\ XXXXXX                      /XXXXX
                 \XXXXXXXXX                        /XXXXX/
                  \XXXXXX                        _/XXXXX/
                    \XXXXX--__/              __-- XXXX/
                     --XXXXTMR---------------  XXXXX--
                        \XXXXXXXXXXXXXXXXXXXXXXXX-
                          --XXXXXXXXXXXXXXXXXX- 

*/

angular.module('ui.bootstrap.test', ['ui.bootstrap', 'ui.sortable']);

angular.module('ui.bootstrap.test').controller('MainCtrl', function($scope) {
  $scope.oneAtATime = true;

});

angular.module('ui.bootstrap.test').controller('SectionsCtrl', function($scope) {


  $scope.sortableOptions = {
    items: '.mPart'
  }


  $scope.sections = [{
    title: 'Section - 1',
    content: 'Body - 1 && Some Lorem Ipsum'
  }, {
    title: 'Section - 2',
    content: 'Body - 2 && Some Lorem Ipsum'
  }, {
    title: 'Section - 3',
    content: 'Body - 3 && Some Lorem Ipsum'
  }, {
    title: 'Section - 4 with Sub-Sections',
    content: 'Body - 4 && Some Lorem Ipsum',
    subSections: [{
      title: 'Sub-Section - 4.1',
      content: 'Body - 4.1 && Some Lorem Ipsum'
    }, {
      title: 'Sub-Section - 4.2',
      content: 'Body - 4.2 && Some Lorem Ipsum'
    }, {
      title: 'Sub-Section - 4.3',
      content: 'Body - 4.3 && Some Lorem Ipsum'
    }, {
      title: 'Sub-Section - 4.4',
      content: 'Body - 4.4 && Some Lorem Ipsum'
    }]
  }];

});