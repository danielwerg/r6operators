export interface IOperator {
  /** Readable name of the operator */
  name: string
  /** Role of the operator.
   *
   *  Possible values are `Attacker`, `Defender` or `Recruit`
   */
  role: "Attacker" | "Defender" | "Recruit"
  /** Shortened name of the operator's unit */
  unit: string
  /** Object containing the armor, speed and difficulty ratings. */
  ratings?: IOperatorRatings
  /** Object containing metadata of the operator. */
  meta?: IOperatorMeta
  /** Object containing biography of the operator. */
  bio?: IOperatorBio
}

interface IOperatorRatings {
  /** Armor rating as a number between `1` and `3` */
  armor: number
  /** Speed rating as a number between `1` and `3` */
  speed: number
  /** Difficulty rating as a number between `1` and `3` */
  difficulty: number
}

interface IOperatorMeta {
  /** Gender of the operator.
   *
   *  Possible values are:
   *  ```
   *  'm' - Male
   *  'f' - Female
   *  'o' - Other
   *  'n' - None/Not applicable
   *  'u' - Unknown
   *  ```
   */
  gender: "m" | "f" | "o" | "n" | "u"
  /** Country of the operator as a ISO 3166-1 alpha-2 code (two-letter).
   * @link https://wikipedia.org/wiki/ISO_3166-1_alpha-2
   */
  country: string
  /** Season shorthandle when the operator was first introduced to the game.
   *
   *  As example, `Y1S1` for Year 1 Season 1.
   */
  season: string
  /** Height of the operator, in cm. */
  height: number
  /** Weight of the operator, in cm. */
  weight: number
}

interface IOperatorBio {
  /** Real name of the operator. */
  real_name: string
  /** Birthplace of the operator, including the country.*/
  birthplace: string
}

export interface Operator extends IOperator {
  /** ID of the operator. */
  id: string

  /** SVG icon object. */
  svg: {
    /** SVG contents without HTML tags. */
    contents: string
    /** SVG attributes as an object. */
    attributes: {
      [key: string]: unknown
    }
  }
}