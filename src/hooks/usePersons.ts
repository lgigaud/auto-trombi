import type { Person } from '../components/Main';
import supabase from '../utils/bddutils';

export const usePersons = {
  getPersons: async () => {
    const { data } = await supabase
      .from("persons")
      .select("*");
    return data as Person[];
  },
  addPerson: (person: Person) => {
    supabase
      .from("persons")
      .insert(person)
      .single();
  },
}