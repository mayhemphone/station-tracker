import useSWR, { mutate } from "swr";
import Animal, { AnimalUpdate } from "../types/animal";
import fetcher from "../helpers/fetcher";

const model = "animal";

type Error = any;

const getAnimals = () => {
  const { data, error } = useSWR<Animal[], Error>(`/api/v1/${model}s`, fetcher);

  return {
    animals: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const getAnimal = (id: string) => {
  const { data, error } = useSWR<Animal>(`/api/v1/${model}s/${id}`, fetcher);

  return {
    animal: data,
    isLoading: !error && !data,
    isError: error,
  };
};

const createAnimal = async (data: AnimalUpdate) => {
  const url = `/api/v1/${model}s`;

  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const result = await response.json();
    mutate(`/api/v1/${model}s`);
    return {
      animal: result,
      isLoading: false,
      isError: null,
    };
  } else {
    const error = await response.json();
    return {
      animal: null,
      isLoading: false,
      isError: error,
    };
  }
};

const updateAnimal = async (id: string, data: AnimalUpdate) => {
  const url = `/api/v1/${model}s/${id}`;

  const response = await fetch(url, {
    method: "PUT",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const result = await response.json();

    mutate(`/api/v1/${model}s/${id}`);
    mutate(`/api/v1/${model}s`);
    return {
      animal: result,
      isLoading: false,
      isError: null,
    };
  } else {
    const error = await response.json();
    return {
      animal: null,
      isLoading: false,
      isError: error,
    };
  }
};

const destroyAnimal = async (id: string) => {
  const url = `/api/v1/${model}s/${id}`;

  const response = await fetch(url, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    const result = await response.json();
    mutate(`/api/v1/${model}s/${id}`);
    mutate(`/api/v1/${model}s`);
    return {
      animal: result,
      isLoading: false,
      isError: null,
    };
  } else {
    const error = await response.json();
    return {
      animal: null,
      isLoading: false,
      isError: error,
    };
  }
};

export { getAnimals, getAnimal, updateAnimal, createAnimal, destroyAnimal };
