import { IOperator } from "~/types/Operator"

export const sledge: IOperator = {
  name: "Sledge",
  role: "Attacker",
  unit: "SAS",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    gender: "m",
    country: "uk",
    season: "Release",
    height: 192,
    weight: 95,
  },
  bio: {
    real_name: "Seamus Cowden",
    birthplace: "John O’groats, Scotland",
  },
}