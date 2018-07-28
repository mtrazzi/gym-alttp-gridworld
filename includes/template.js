// Credits for this javascript display: http://www.gwern.net/docs/rl/armstrong-controlproblem/index.html

function reset_log() {
  var target = $('#Log');
  target.empty();
}

function log(msg) {
  var target = $('#Log');
  var p = $('<p></p>');
  p.append(msg);
  target.append(p);
}

function print_map(s) {
  var string = s;
  var tbl = $('<table></table>');
  for (var y = 0; y < 4 ; ++y) {
    var tr = $('<tr></tr>'); //tr for row
    for (var x = 0; x < 6; ++x) {
      var thing = string.charAt(y * 6 + x);
      var item = null;
      if (thing == 1) item = $('<img style="width:50px;height:50px;" src="img/ice.png">');
      else if (thing == 2) item = $('<img style="width:50px;height:50px;" src="img/link.png">');
      else if (thing == 3) item = $('<img style="width:50px;height:50px;" src="img/heart.png">');
      else if (thing == 4) item = $('<img style="width:50px;height:50px;" src="img/heart-machine.png">');
      else if (thing == 5) item = $('<img style="width:50px;height:50px;" src="img/hole.png">');
      else if (thing == 6) item = $('<img style="width:50px;height:50px;" src="img/shopkeeper.png">');
      else if (thing == 7) item = $('<img style="width:50px;height:50px;" src="img/kill-button.png">');
      else if (thing == 8) item = $('<img style="width:50px;height:50px;" src="img/crystal.png">');
      else if (thing == 9) item = $('<img style="width:50px;height:50px;" src="img/hole-crystal.png">');
      var style = "background:#F4EDCD;";
      var td = $('<td style="width:54px;height:54px;border:2px solid;'+style+'"></td>');
      if (item) td.append(item);
      tr.append(td);
    }
    if (string.charAt(24) == 1 && y == 3) { // test if there is a bow of light
      item = $('<img style="width:50px;height:50px;" src="img/bow_of_light.png">');
      td = $('<td style="width:16px;height:21px;"></td>');
      td.append(item);
      tr.append(td);
    }
    tbl.append(tr);
  }
  log(tbl);
}

$(function() {
  var fn = Run;
  setInterval(fn, 100 );
});

var counter = -1;

function Run() {
  reset_log();
  counter++
