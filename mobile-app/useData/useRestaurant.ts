import useSWR from "swr";
import { api } from "@/utils/fetch";
import useStorage from "@/hooks/useStorage";
import { useAuth } from "@/context/AuthProvider";

export const useRestaurants = () => {

  const { getData } = useStorage();
  const {token } = useAuth();

  const { data, isLoading, mutate } = useSWR(
    `/restaurant/getAll`,
    async (url) => {
      try {
        const response = await api.get(url, {headers : {'Authorization' : 'Bearer ' + await getData('token')}});
        console.log(await getData('token'));
        return response.data.data;
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  );

  return {
    restaurants: data,
    fetchingRestaurants: isLoading,
    refreshRestaurants: mutate,
  };
};
