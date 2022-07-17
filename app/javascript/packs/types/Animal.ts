type Animal = {
  id: string;
  name: string;
  motto: string;
  createdAt: Date;
  updatedAt: Date;
};

type AnimalUpdate = {
  name?: string;
  motto?: string;
};

type AnimalCreate = {
  name?: string;
  motto?: string;
};

export type AnimalResponse = {
  animal: Animal | null;
  isLoading: boolean;
  isError: any;
};

export { AnimalUpdate, AnimalCreate };

export default Animal;
