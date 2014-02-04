app.run(['$templateCache', function($templateCache){  'use strict';

  $templateCache.put('views/contact.html',
    "<div id=carte ng-controller=ContactCtrl>Page Contact<ul><li>Status : {{contact.STATUS}}</li><li>ID : {{contact.USERID}}</li><li>Name : {{contact.FIRST_NAME}} {{contact.LAST_NAME}}</li><li>Phone number : {{contact.TELEPHONENUMBER}}</li><li>Business Address :</li><li>Team : {{contact.TEAM_NAME}}</li><li>Title : {{contact.TILE}}</li><li>{{contact.LOC_ADDRESS1}}<br><span ng-show=\"contact.LOC_ADDRESS2 != null\">{{contact.LOC_ADDRESS2}}<br></span> {{contact.LOC_POSTAL_ZONE}}<br></li></ul></div>"
  );


  $templateCache.put('views/directives/infinite-scroll.html',
    "<div id=wrapper><div id=scroller><ul class=listview><li ng-transclude=\"\" last-repeat=\"\"></li></ul></div></div>"
  );


  $templateCache.put('views/directives/ng-iscroll-list.html',
    "<div><div id=scroller><ul class=listview><li ng-transclude=\"\" last-repeat=false></li></ul><div class=gap></div></div></div>"
  );


  $templateCache.put('views/directives/ng-iscroll.html',
    "<div><div id=scroller><ul class=listview><div ng-transclude=\"\" last-repeat=false></div></ul></div></div>"
  );


  $templateCache.put('views/directives/smart-input.html',
    "<div class=smart-input ng-click=focus()><a class=smart-input-icon><i class=\"fa fa-search\"></i></a> <a class=smart-input-erase ng-click=erase()><i class=\"fa fa-times-circle\"></i></a><input class=\"smart-input-input no-shadow\" placeholder=Search></div>"
  );


  $templateCache.put('views/directory.html',
    "<div id=directory ng-controller=DirectoryCtrl><div class=space-full><form><div class=form-group><div class=row><div smart-input=\"\" ng-model=searchTextInput></div></div></div></form></div><div infinite-scroll=\"contact in directory\"><div class=row><div class=col-right-icon><a href=tel:{{contact.content.T}} class=square><div class=phone><i class=\"fa fa-22px fa-phone\"></i></div></a> <a href=mailto:{{contact.content.M}} class=square><div class=mail><i class=\"fa fa-22px fa-envelope-o\"></i></div></a></div><div class=\"col100 has-right-icon\"><a ng-click=displayContact(contact.I)><div class=name>{{contact.content.F}} {{contact.content.L}}</div><div class=job>{{contact.content.J}}</div><div class=place>{{contact.content.P}}</div><div class=phone>Tel: {{contact.content.T}}</div></a></div></div></div></div>"
  );
}]);