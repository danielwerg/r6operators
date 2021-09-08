import { IOperator } from "~/types/Operator"

export const maestro: IOperator = {
  name: "Maestro",
  role: "Defender",
  unit: "GIS",
  ratings: {
    armor: 3,
    speed: 1,
    difficulty: 2,
  },
  meta: {
    gender: "m",
    country: "it",
    season: "Y3S2",
    height: 185,
    weight: 87,
  },
  bio: {
    real_name: "Adriano Martello",
    birthplace: "Rome, Italy",
  },
}