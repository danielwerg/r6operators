import { Operator } from "~/types/Operator"

export const mute: Operator = {
  name: "Mute",
  role: "Defender",
  unit: "SAS",
  ratings: {
    armor: 2,
    speed: 2,
    difficulty: 1,
  },
  meta: {
    sex: "m",
    country: "uk",
    season: "Release",
    height: 170,
    weight: 80,
  },
  bio: {
    real_name: "Mark Chandar",
    birthplace: "York, England",
  },
}