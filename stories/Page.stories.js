//IMPORT

//magnifying glass (Kelly)
import {Magnify} from '../comps/MangifyingGlass'

//Phone (kelly)
import {Phone} from '../comps/Phone'

//country (hyerin)
import {Quiz} from '../comps/CountryQuiz';

//recyclebin (hyerin)
import {RecycleBin} from '../comps/RecycleBin';

//DEFAULT
export default {
  title: "Weduce Components"
}

//flags
import {Flag} from '../comps/countryquiz';

//flags true
import {TrueCountry} from '../comps/FlagTrue';

//flags false
import {FalseCountry} from '../comps/FlagFalse';



//EXPORT

export const Microplastic = () => Magnify

export const PhoneQuiz = () => Phone
export const MyQuiz = () => Quiz;
export const MyRecycleBin = () => RecycleBin;
export const FlagQuiz = () => Flag;
export const FlagTrue = () => TrueCountry;
export const FlagFalse = () => FalseCountry;