import { Subject } from "rxjs";
import Models from "../Models";
import { Family, FamilyWithoutId } from "../Models/FamilyLogic";

export type FamilyViewModel = {
  CreateFamily: (f: FamilyWithoutId) => void;
  getFamiliesSubject: () => Subject<Record<Family["id"], Family>>;
};

function FamilyViewModelFactory(): FamilyViewModel {
  return {
    CreateFamily: Models.FamilyLogic.createFamily,
    getFamiliesSubject: Models.FirebaseService.getFamiliesSubject,
  };
}

export default FamilyViewModelFactory;
