(function () {
  console.log(`la la la`);
})();

(function (name) {
  console.log(`la la la ${name}`);
})(name);

(name => {
  console.log(`la la la ${name}`);
  console.log(`${name} you're so beautiful.`);
  console.log(`la la la`);
})("Flo");
