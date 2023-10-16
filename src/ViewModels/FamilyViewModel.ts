import Models from "../Models";
import { FamilyWithoutId } from "../Models/FamilyLogic";

export type FamilyViewModel = {
  CreateFamily: (f: FamilyWithoutId) => void;
};

function FamilyViewModelFactory(): FamilyViewModel {
  return {
    CreateFamily: Models.FamilyLogic.createFamily,
  };
}

export default FamilyViewModelFactory;
