//IMPORT

//magnifying glass
import {Magnify} from '../comps/MangifyingGlass'

//Phone 
import {Phone} from '../comps/Phone'


//country (hyerin back up)
// import {Quiz} from '../comps/CountryQuiz';

//recyclebin (hyerin back up)
// import {RecycleBin} from '../comps/RecycleBin';


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

//"LEARN THE IMPORTANCE OF" header
import {Introhead} from '../comps/Intro-header';

//RECYCLING header
import {IntroRecycleHeader} from '../comps/recycle-head';

//BODY TEXT MONTSERRAT
import {textbody} from '../comps/body-text';

//SUB CATEGORY HEADINGS
import {Subhead} from '../comps/sub-category';

//Fish
import {FishTrap} from '../comps/fish';

//bag
import {Bag} from '../comps/bag';

//plastic debris
import {Debris} from '../comps/debris';

// WENDY THE WHALE
import {MyWhale} from '../comps/wendy';


//DEFAULT
export default {
  title: "Weduce Components"
}


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
export const IntroHeader = () => Introhead;
export const IntroRecycle = () => IntroRecycleHeader;
export const BodyText = () => textbody;
export const Mysubheader = () => Subhead;
export const TrappedFish = () => FishTrap;
export const BagUI = () => Bag;
export const MyDebris = () => Debris;
export const WhaleWendy = () => MyWhale;

