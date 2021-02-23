import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alcoholFilter'
})
export class AlcoholFilterPipe implements PipeTransform {
  alcoholFilterArr:any[];
  categoriesList:any[];
  glassesList:any[];
  alcoholsFilteredList:any[];
  
  transform(value: any, ...args: any[]): any {
    this.alcoholFilterArr=args[0];
    //var categoriesList=args[1];
    //var glassesList=args[2];
    console.log("value:",value);
    console.log("alcohols:",this.alcoholFilterArr);
    console.log("this.alcoholFilterArr: ",this.alcoholFilterArr.length);
    var alcoholFlag=(this.alcoholFilterArr.length>0);
    console.log("alcoholFlag: ",alcoholFlag);
    //console.log("alcoholFilterArr:",alcoholFilterArr);

    var FilteredValue=value.filter((v)=>{
      return ((alcoholFlag===false || (alcoholFlag===true && this.alcoholFilterArr.indexOf(v.strAlcoholic)>=0)));
    });
    console.log("Filtered value: ",FilteredValue);
    
    //console.log("alcoholsFilteredList:",alcoholsFilteredList);
    //console.log("categoriesList:",categoriesList);
    //console.log("glassesList:",glassesList);
    return FilteredValue;
  }

}
