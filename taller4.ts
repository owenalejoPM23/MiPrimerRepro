class Discount{
giveDiscount (customerType: "premiun"| "regular"): number{

   if (customerType === "regular") {
      return 10;
    } else  {
      return 20;
    } 

}
}
