function cipher(str) {
  let final = "";
  let shift = 2;
  for (let i = 0; i < str.length; i++) {
    if (shift === 2) {
      final += String.fromCharCode(str.charCodeAt(i) - 2);
      shift = 0;
      continue;
    }
    if (shift === 0) {
      final += String.fromCharCode(str.charCodeAt(i));
      shift = 1;
      continue;
    }
    if (shift === 1) {
      final += String.fromCharCode(str.charCodeAt(i) - 1);
      shift = 2;
      continue;
    }
  }
  return final;
}
function decipher(str) {
  let final = "";
  let shift = 2;
  for (let i = 0; i < str.length; i++) {
    if (shift === 2) {
      final += String.fromCharCode(str.charCodeAt(i) + 2);
      shift = 0;
      continue;
    }
    if (shift === 0) {
      final += String.fromCharCode(str.charCodeAt(i));
      shift = 1;
      continue;
    }
    if (shift === 1) {
      final += String.fromCharCode(str.charCodeAt(i) + 1);
      shift = 2;
      continue;
    }
  }
  return final;
}
console.log(cipher("0000000000"));
console.log(cipher("admin"));
console.log(decipher("_dlgn"), "Should be admin");
console.log(decipher("/80/"), "/80/");
console.log(cipher("/80/"));
