
class Checkoutt {
    constructor(pricingRules) {
      this.pricingRules = pricingRules;
      this.basket = [];
    }
  
    get ViewBasket() {
      return this.basket;
    }
  
    Scan(item) {
      this.basket.push(item);
    }
  
    get Total() {
      let total = 0;
  
      const itemMap = {};
  
      this.basket.forEach((item) => {
        itemMap[item] ? (itemMap[item] += 1) : (itemMap[item] = 1);
      });
  
      Object.keys(itemMap).forEach((item) => {
  
        const numberOfItems = itemMap[item];
  
        const unitPrice = this.pricingRules[item].unitPrice;
  
        if (this.pricingRules[item].specialPriceString) {
  
          const specialPriceStringArray =
            this.pricingRules[item].specialPriceString.split(" ");
  
          const specialPriceQuantity = Number(specialPriceStringArray[0]);
  
          const totalSpecialPrice = Number(specialPriceStringArray[2]);
  
          const numberOfSpecialPriceDeals = Math.floor(
            numberOfItems / specialPriceQuantity
          );
  
          total += numberOfSpecialPriceDeals * totalSpecialPrice;
  
          const remainingNormalPriceItems = numberOfItems % specialPriceQuantity;
  
          total += remainingNormalPriceItems * unitPrice;
        } else {
          
          total += numberOfItems * unitPrice;
        }
      });
  
      return total;
    }
  }
  
  module.exports = Checkoutt;