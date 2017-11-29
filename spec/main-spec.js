const main = require('../main/main');
//console.log(main);
describe('taxi fee', function () {
   it('10km,5min',function(){
    let result = main(10,5);
    expect(14).toEqual(result);
   });
   it('8km,5min',function(){
    let result = main(8,5);
   expect(12).toEqual(result);
   });
});

