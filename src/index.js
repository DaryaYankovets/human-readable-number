module.exports = function toReadable (number) {
    const arrSimple = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']; 
    const arrTy = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']; 
  
      const firstNum = +number.toString()[0];
      const secondNum = +number.toString()[1];
      const thirdNum = +number.toString()[2];
      const teenNum = +(number.toString()[1] + number.toString()[2]);
  
    if (number >= 0 && number <= 19) {
        return arrSimple[number];
    } else if (number >= 20 && number <= 99) {
        return  (secondNum === 0) ? arrTy[firstNum] : `${arrTy[firstNum]} ${arrSimple[secondNum]}`;
      
    } else if (number >= 100 && number <= 999) {
      
        if (secondNum === 0 && thirdNum === 0)  {
          return `${arrSimple[firstNum]} hundred`;
          
        } else if (secondNum === 0 && thirdNum !== 0) {
          return `${arrSimple[firstNum]} hundred ${arrSimple[thirdNum]}`;
          
        } else if (secondNum !== 0 && teenNum >= 10 && teenNum <= 19) {
          return `${arrSimple[firstNum]} hundred ${arrSimple[teenNum]}`;
          
        } else if (secondNum !== 0 && teenNum >= 20 && teenNum <= 99) {
          return thirdNum === 0 ? `${arrSimple[firstNum]} hundred ${arrTy[secondNum]}` : `${arrSimple[firstNum]} hundred ${arrTy[secondNum]} ${arrSimple[thirdNum]}`;
        }
    }
}
