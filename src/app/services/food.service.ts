
import { Injectable } from '@angular/core';
import { food } from '../shared/model/food';
import { sample_foods } from '../data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():food[] {
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

//   getAllTags():tags[] {
// return sa
//   }

  getAllFoodsByTag(tag: string): food[] {
    return tag === "All" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(foodId:Number):food{
    return this.getAll().find(food => food.id == foodId) ?? new food();
  }

}
