//IMPORT

//magnifying glass
import {Magnify} from '../comps/MangifyingGlass'

//Phone 
import {Phone} from '../comps/Phone'


//country (hyerin back up)
// import {Quiz} from '../comps/CountryQuiz';

//recyclebin (hyerin back up)
// import {RecycleBin} from '../comps/RecycleBin';

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

//recycle
import {RecycleBin} from '../comps/RecycleBin';

//recycle false
import {FalseRecycle} from '../comps/RecycleFalse';

//recycle true
import {TrueRecycle} from '../comps/RecycleTrue';





//EXPORT

export const Microplastic = () => Magnify

export const PhoneQuiz = () => Phone
// export const MyQuiz = () => Quiz;
// export const MyRecycleBin = () => RecycleBin;
export const FlagQuiz = () => Flag;
export const FlagTrue = () => TrueCountry;
export const FlagFalse = () => FalseCountry;
export const RecycleQuiz = () => RecycleBin;
export const RecycleFalse = () => FalseRecycle;
export const RecycleTrue = () => TrueRecycle;

