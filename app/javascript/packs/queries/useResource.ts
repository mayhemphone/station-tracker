// import useSWR from "swr";
// import fetcher from "../helpers/fetcher";

// type GenericKeyValue<T> = { [key: string]: T | undefined };

// const test: GenericKeyValue<string> = {
//   test: "bababa",
//   tests: 2,
// };

// type GenericResource<T> = {
//   [key: string]: T | undefined;
//   isLoading: boolean;
//   isError: any;
// };

// const getResources = (klass: string) => {
//   // TODO: type bassed off klass

//   const { data, error } = useSWR<any>(`/api/v1/${klass}`, fetcher);

//   // res needs to be an object that can accept klass as a key
//   const res: any = {
//     // data: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
//   res[klass] = data;

//   return res;
// };

// const getResource = (klass: string, id: string) => {
//   // TODO: type bassed off klass
//   const { data, error } = useSWR<any>(`/api/v1/${klass}/${id}`, fetcher);

//   return {
//     data: data,
//     isLoading: !error && !data,
//     isError: error,
//   };
// };

// export default { getResources, getResource };
