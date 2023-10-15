export type Family = {
  id: string;
  name: string;
};

export type FamilyWithoutId = Omit<Family, "id">;

function FamilyLogicFactory(firebaseService: any) {
  function createFamily(newFamily: FamilyWithoutId) {
    firebaseService.saveToFirestore("families", null, newFamily);
  }

  return {
    createFamily,
  };
}

export default FamilyLogicFactory;
