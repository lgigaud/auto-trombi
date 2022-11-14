import type { Person } from '../components/Main';
import supabase from '../utils/bddutils';

export const usePersons = {
  getAllPersons: async () => {
    const { data } = await supabase
      .from("persons")
      .select("*");
    return data as Person[];
  },
  addPerson: async (person: Person) => {
    await supabase
      .from('persons')
      .insert(person);
  },
  editPerson: async (person: Person) => {
    await supabase
      .from('persons')
      .update(person)
      .match({ id: person.id });
  },
  removePerson: async (person: Person) => {
    await supabase
      .from('persons')
      .delete()
      .match({ 'id': person.id });
  }
}