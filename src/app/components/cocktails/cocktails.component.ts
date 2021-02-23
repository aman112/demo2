import { AfterViewInit, Component, OnInit } from '@angular/core';
import {CocktailApiService} from '../../services/cocktail-api.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit,AfterViewInit {
  drinksArray:any=[];
  finalDrinksArray:any[];
  cocktailSearch:any={};
  cocktails:boolean=true;
  
  categoriesList:any=[];
  glassesList:any=[];
  alcoholsList:any=[];
  alcoholsArr=[];
  categoriesArr=[];
  glassesArr=[];
  
  GlassFlag=false;
  AlcoholFlag=false;
  CategoryFlag=false;

  public innerWidth: any;

  constructor(private cocktailApiService: CocktailApiService) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    this.fetchFiltersList();
  }
  ngAfterViewInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

  fetchFiltersList=function(){
    this.cocktailApiService.getAllCategories()
    .subscribe((data)=>{
      console.log(data);
      this.categoriesList=data["drinks"];
    });
    this.cocktailApiService.getAllGlasses()
    .subscribe((data)=>{
      console.log(data);
      this.glassesList=data["drinks"];
    });
    this.cocktailApiService.getAllAlcoholsList()
    .subscribe((data)=>{
      console.log(data);
      this.alcoholsList=data["drinks"];
    });
  }

  searchByName=function(name){
    this.cocktails=false;
    this.cocktailApiService.getCocktailsByName(name)
    .subscribe((data)=>{
      console.log(data);
      this.cocktails=true;
      this.drinksArray=data["drinks"];
      this.filterFxn();
    });
  }
  getAlcoholArray=function(value:String,checked:boolean){
    checked=!checked;
    if(checked){
      if(this.alcoholsArr.indexOf(value)==-1){
        this.alcoholsArr.push(value);
      }
    }
    else{
      this.alcoholsArr.splice(this.alcoholsArr.indexOf(value),1);
    }
    this.AlcoholFlag=(this.alcoholsArr.length>0);
    this.filterFxn();
  }
  getCategoryArray=function(value:String,checked:boolean){
    checked=!checked;
    if(checked){
      if(this.categoriesArr.indexOf(value)==-1){
        this.categoriesArr.push(value);
      }
    }
    else{
      this.categoriesArr.splice(this.categoriesArr.indexOf(value),1);
    }
    this.CategoryFlag=(this.categoriesArr.length>0);
    this.filterFxn();
  }
  getGlassArray=function(value:String,checked:boolean){
    checked=!checked;
    if(checked){
      if(this.glassesArr.indexOf(value)==-1){
        this.glassesArr.push(value);
      }
    }
    else{
      this.glassesArr.splice(this.glassesArr.indexOf(value),1);
    }
    this.GlassFlag=(this.glassesArr.length>0);
    this.filterFxn();
  }

  filterFxn=function(){
    var FilteredData=this.drinksArray.filter((v)=>{
      return ((this.AlcoholFlag===false || (this.AlcoholFlag===true && this.alcoholsArr.indexOf(v.strAlcoholic)>=0)) 
              && (this.CategoryFlag===false || (this.CategoryFlag===true && this.categoriesArr.indexOf(v.strCategory)>=0)) 
              && (this.GlassFlag===false || (this.GlassFlag===true && this.glassesArr.indexOf(v.strGlass)>=0)));
    });
    this.finalDrinksArray=FilteredData;
  }
}
