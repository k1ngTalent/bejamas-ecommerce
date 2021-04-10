export const formatCurrency=(num:any,currency:string)=>{
    const formatter = new Intl.NumberFormat('en-US', {
     style: 'currency',
     currency:currency
   });
     return formatter.format(num);
 }