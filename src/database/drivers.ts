
export interface Driver {
  id: number;
  name: string;
  age: number;
  nationality: string;
  teamId: number; 
}

export const drivers: Driver[] = [
  {
    id: 1,
    name: "Lewis Hamilton",
    age: 39,
    nationality: "British",
    teamId: 1,
  },
  {
    id: 2,
    name: "Max Verstappen",
    age: 27,
    nationality: "Dutch",
    teamId: 2,
  },
  {
    id: 3,
    name: "Charles Leclerc",
    age: 26,
    nationality: "Monegasque",
    teamId: 3,
  },
  {
    id: 4,
    name: "Sergio Pérez",
    age: 34,
    nationality: "Mexican",
    teamId: 2,
  },
];
