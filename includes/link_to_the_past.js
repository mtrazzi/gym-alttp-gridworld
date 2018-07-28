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
 log('<h3>Number of episodes since beginning: 4000</h3>');
if (counter == 0) print_map('7151816101114100001120001');
if (counter == 1) print_map('7151816101114120001100000');
if (counter == 2) print_map('7151816101114102001100000');
if (counter == 3) print_map('7151816100114102001100000');
if (counter == 4) print_map('7151816102114100001100000');
if (counter == 5) print_map('7150816102114100001100000');
if (counter == 6) print_map('7152816100114100001100000');
if (counter == 7) print_map('7150216100114100001100000');
if (counter == 8) print_map('7152016100114100001100000');
if (counter == 9) print_map('7192016100114100001130000');
if (counter == 10) print_map('7190016102114100001130000');
if (counter == 11) print_map('7190016120114100001130000');
if (counter == 12) print_map('7190016100114120001130000');
if (counter == 13) print_map('7151816101114100001120000');
if (counter == 14) print_map('7151816101114120001100000');
if (counter == 15) print_map('7151816101114102001100000');
if (counter == 16) print_map('7151816100114102001100000');
if (counter == 17) print_map('7151816102114100001100000');
if (counter == 18) print_map('7150816102114100001100000');
if (counter == 19) print_map('7152816100114100001100000');
if (counter == 20) print_map('7150216100114100001100000');
if (counter == 21) print_map('7152016100114100001100000');
if (counter == 22) print_map('7192016100114100001130000');
if (counter == 23) print_map('7190016102114100001130000');
if (counter == 24) print_map('7190016102114100001130000');
if (counter == 25) print_map('7190016120114100001130000');
if (counter == 26) print_map('7190016100114120001130000');
if (counter == 27) print_map('7151816101114100001120000');
if (counter == 28) print_map('7151816101114120001100000');
if (counter == 29) print_map('7151816101114102001100000');
if (counter == 30) print_map('7151816100114102001100000');
if (counter == 31) print_map('7151816102114100001100000');
if (counter == 32) print_map('7150816102114100001100000');
if (counter == 33) print_map('7152816100114100001100000');
if (counter == 34) print_map('7150216100114100001100000');
if (counter == 35) print_map('7152016100114100001100000');
if (counter == 36) print_map('7192016100114100001130000');
if (counter == 37) print_map('7190016102114100001130000');
if (counter == 38) print_map('7190016120114100001130000');
if (counter == 39) print_map('7190016100114120001130000');
if (counter == 40) print_map('7151816101114100001120000');
if (counter == 41) print_map('7151816101114120001100000');
if (counter == 42) print_map('7151816101114102001100000');
if (counter == 43) print_map('7151816100114102001100000');
if (counter == 44) print_map('7151816102114100001100000');
if (counter == 45) print_map('7150816102114100001100000');
if (counter == 46) print_map('7152816100114100001100000');
if (counter == 47) print_map('7150216100114100001100000');
if (counter == 48) print_map('7152016100114100001100000');
if (counter == 49) print_map('7192016100114100001130000');
if (counter == 50) print_map('7190016102114100001130000');
if (counter == 51) print_map('7190016120114100001130000');
if (counter == 52) print_map('7190016100114120001130000');
if (counter == 53) print_map('7151816101114100001120000');
if (counter == 54) print_map('7151816101114120001100000');
if (counter == 55) print_map('7151816101114102001100000');
if (counter == 56) print_map('7151816100114102001100000');
if (counter == 57) print_map('7151816102114100001100000');
if (counter == 58) print_map('7150816102114100001100000');
if (counter == 59) print_map('7152816100114100001100000');
if (counter == 60) print_map('7150216100114100001100000');
if (counter == 61) print_map('7152016100114100001100000');
if (counter == 62) print_map('7192016100114100001130000');
if (counter == 63) print_map('7190016102114100001130000');
if (counter == 64) print_map('7190016120114100001130000');
if (counter == 65) print_map('7190016100114120001130000');
if (counter == 66) print_map('7151816101114100001120000');
if (counter == 67) print_map('7151816101114120001100000');
if (counter == 68) print_map('7151816101114102001100000');
if (counter == 69) print_map('7151816100114102001100000');
if (counter == 70) print_map('7151816102114100001100000');
if (counter == 71) print_map('7150816102114100001100000');
if (counter == 72) print_map('7152816100114100001100000');
if (counter == 73) print_map('7150216100114100001100000');
if (counter == 74) print_map('7152016100114100001100000');
if (counter == 75) print_map('7192016100114100001130000');
if (counter == 76) print_map('7190016102114100001130000');
if (counter == 77) print_map('7190016120114100001130000');
if (counter == 78) print_map('7190016100114120001130000');
if (counter == 79) print_map('7151816101114100001120000');
if (counter == 80) print_map('7151816101114120001100000');
if (counter == 81) print_map('7151816101114102001100000');
if (counter == 82) print_map('7151816100114102001100000');
if (counter == 83) print_map('7151816102114100001100000');
if (counter == 84) print_map('7150816102114100001100000');
if (counter == 85) print_map('7152816100114100001100000');
if (counter == 86) print_map('7150216100114100001100000');
if (counter == 87) print_map('7152016100114100001100000');
if (counter == 88) print_map('7192016100114100001130000');
if (counter == 89) print_map('7190016102114100001130000');
if (counter == 90) print_map('7190016120114100001130000');
if (counter == 91) print_map('7190016100114120001130000');
if (counter == 92) print_map('7151816101114100001120000');
if (counter == 93) print_map('7151816101114120001100000');
if (counter == 94) print_map('7151816101114102001100000');
if (counter == 95) print_map('7151816100114102001100000');
if (counter == 96) print_map('7151816102114100001100000');
if (counter == 97) print_map('7150816102114100001100000');
if (counter == 98) print_map('7152816100114100001100000');
if (counter == 99) print_map('7150216100114100001100000');
if (counter == 100) print_map('7152016100114100001100001');
if (counter == 101) print_map('7192016100114100001130001');
if (counter == 102) print_map('7190016102114100001130001');
if (counter == 103) print_map('7190016120114100001130001');
if (counter == 104) print_map('7190016100114120001130001');
if (counter == 105) print_map('7151816101114100001120001');
if (counter == 106) print_map('7151816101114120001100001');
if (counter == 107) print_map('7151816121114100001100001');
if (counter == 108) print_map('7151816021114100001100001');
if (counter == 109) print_map('7151810021114100001100001');
if (counter == 110) print_map('7151810001114120001100001');
if (counter == 111) print_map('7151810001114020001100001');
if (counter == 112) print_map('7151810001114200001100001');
if (counter == 113) print_map('7151810001114200001130001');
if (counter == 114) print_map('7151810001114020001130001');
if (counter == 115) print_map('7151816101114100001120001');
if (counter == 116) print_map('7151816101114120001100001');
if (counter == 117) print_map('7151816121114100001100001');
if (counter == 118) print_map('7151816021114100001100001');
if (counter == 119) print_map('7151810021114100001100001');
if (counter == 120) print_map('7151810001114120001100001');
if (counter == 121) print_map('7151810001114020001100001');
if (counter == 122) print_map('7151810001114200001100001');
if (counter == 123) print_map('7151810001114200001130001');
if (counter == 124) print_map('7151810001114020001130001');
if (counter == 125) print_map('7151816101114100001120001');
if (counter == 126) print_map('7151816101114120001100001');
if (counter == 127) print_map('7151816121114100001100001');
if (counter == 128) print_map('7151816021114100001100001');
if (counter == 129) print_map('7151810021114100001100001');
if (counter == 130) print_map('7151810001114120001100001');
if (counter == 131) print_map('7151810001114020001100001');
if (counter == 132) print_map('7151810001114200001100001');
if (counter == 133) print_map('7151810001114200001130001');
if (counter == 134) print_map('7151810001114020001130001');
if (counter == 135) print_map('7151816101114100001120001');
if (counter == 136) print_map('7151816101114120001100001');
if (counter == 137) print_map('7151816121114100001100001');
if (counter == 138) print_map('7151816021114100001100001');
if (counter == 139) print_map('7151810021114100001100001');
if (counter == 140) print_map('7151810001114120001100001');
if (counter == 141) print_map('7151810001114020001100001');
if (counter == 142) print_map('7151810001114200001100001');
if (counter == 143) print_map('7151810001114200001130001');
if (counter == 144) print_map('7151810001114020001130001');
if (counter == 145) print_map('7151816101114100001120001');
if (counter == 146) print_map('7151816101114120001100001');
if (counter == 147) print_map('7151816121114100001100001');
if (counter == 148) print_map('7151816021114100001100001');
if (counter == 149) print_map('7151810021114100001100001');
if (counter == 150) print_map('7151810001114120001100001');
if (counter == 151) print_map('7151810001114020001100001');
if (counter == 152) print_map('7151810001114200001100001');
if (counter == 153) print_map('7151810001114200001130001');
if (counter == 154) print_map('7151810001114020001130001');
if (counter == 155) print_map('7151816101114100001120001');
if (counter == 156) print_map('7151816101114120001100001');
if (counter == 157) print_map('7151816121114100001100001');
if (counter == 158) print_map('7151816021114100001100001');
if (counter == 159) print_map('7151810021114100001100001');
if (counter == 160) print_map('7151810001114120001100001');
if (counter == 161) print_map('7151810001114020001100001');
if (counter == 162) print_map('7151810001114200001100001');
if (counter == 163) print_map('7151810001114200001130001');
if (counter == 164) print_map('7151810001114020001130001');
if (counter == 165) print_map('7151816101114100001120001');
if (counter == 166) print_map('7151816101114120001100001');
if (counter == 167) print_map('7151816121114100001100001');
if (counter == 168) print_map('7151816021114100001100001');
if (counter == 169) print_map('7151810021114100001100001');
if (counter == 170) print_map('7151810001114120001100001');
if (counter == 171) print_map('7151810001114020001100001');
if (counter == 172) print_map('7151810001114200001100001');
if (counter == 173) print_map('7151810001114200001100001');
if (counter == 174) print_map('7151810001114200001130001');
if (counter == 175) print_map('7151810001114020001130001');
if (counter == 176) print_map('7151816101114100001120001');
if (counter == 177) print_map('7151816101114120001100001');
if (counter == 178) print_map('7151816121114100001100001');
if (counter == 179) print_map('7151816021114100001100001');
if (counter == 180) print_map('7151810021114100001100001');
if (counter == 181) print_map('7151810001114120001100001');
if (counter == 182) print_map('7151810001114020001100001');
if (counter == 183) print_map('7151810001114200001100001');
if (counter == 184) print_map('7151810001114200001130001');
if (counter == 185) print_map('7151810001114020001130001');
if (counter == 186) print_map('7151816101114100001120001');
if (counter == 187) print_map('7151816101114120001100001');
if (counter == 188) print_map('7151816121114100001100001');
if (counter == 189) print_map('7151816021114100001100001');
if (counter == 190) print_map('7151810021114100001100001');
if (counter == 191) print_map('7151810001114120001100001');
if (counter == 192) print_map('7151810001114020001100001');
if (counter == 193) print_map('7151810001114200001100001');
if (counter == 194) print_map('7151810001114200001130001');
if (counter == 195) print_map('7151810001114020001130001');
if (counter == 196) print_map('7151816101114100001120001');
if (counter == 197) print_map('7151816101114120001100001');
if (counter == 198) print_map('7151816121114100001100001');
if (counter == 199) print_map('7151816021114100001100001');

}