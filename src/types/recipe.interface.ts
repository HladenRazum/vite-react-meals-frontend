import { RatingType } from "./rating.type";

export interface RecipeI {
   name: string;
   rating: RatingType;
   tumbnailImageURL: string;
   authorName: string;
}
