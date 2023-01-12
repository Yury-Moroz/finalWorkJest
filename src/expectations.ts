export class Expectations {
  correctEmail = "progMetoll@gmail.com";
  inCorrectEmail = "proggMetoll@gmail.com";
  correctPassword = "1118XR564";
  inCorrectPassword = "11118XR564";
  correctDateBirthday = "12.10.1967";
  inCorrectDateBirthday = "12.10.67";
  sexFemale = "female";
  sexMale = "male";
  sexOther = "other";
  space = /s/;
  emailAddress = /@gmail.com/;
  toBeGreaterThan = 0;
  toBeLessThan = 12;
  toBeLessThanEmail = 12;
  toBeGreaterThanEmail = 9;
  uppercase = /^[A-Z\d]*$/;
  absenceCapitalLetters = /^[a-z\d]*$/;
  differentSigns = /^[a-zA-Z"@"“\.”\d]*$/;
  haveLength = 10;
}
