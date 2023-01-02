import { Registration } from "../src/registration";
import { Email } from "../src/email";
import { PasswordName } from "../src/password";
import { DateBirthday } from "../src/dateBirthday";
import { Sex } from "../src/sex";
const getRegistration = new Registration();

describe("registration form test_1", function () {
  test("checking email", function () {
    const actual = getRegistration.email(Email.EMAIL_PAGE);
    expect(actual).toBe("progMetoll@gmail.com");
  });
});

describe("registration form test_2", function () {
  test("checking password", function () {
    const actual = getRegistration.password(PasswordName.PASSWORD_PAGE);
    expect(actual).toBe("1118XR564");
  });
});

describe("registration form test_3", function () {
  test("checking the date of birth", function () {
    const actual = getRegistration.dateBirthday(DateBirthday.DATEBIRTHDAY_PAGE);
    expect(actual).toBe("12.10.1967");
  });
});
describe("registration form test_4", function () {
  test("checking the male gender in the registration field", function () {
    const actual = getRegistration.sex(Sex.MALE_PAGE);
    expect(actual).toBe("male");
  });
});
describe("registration form test_5", function () {
  test("checking the female gender in the registration field", function () {
    const actual = getRegistration.sex(Sex.FEMALE_PAGE);
    expect(actual).toBe("female");
  });
});
describe("registration form test_6", function () {
  test("checking an incorrect male page", function () {
    const actual = getRegistration.sex(Sex.MALE_PAGE);
    expect(actual).not.toBe("other");
  });
});
describe("registration form test_7", function () {
  test("checking an incorrect female page", function () {
    const actual = getRegistration.sex(Sex.FEMALE_PAGE);
    expect(actual).not.toBe("other");
  });
});

describe("registration form test_8", function () {
  test("checking an incorrect email", function () {
    const actual = getRegistration.email(Email.EMAIL_PAGE);
    expect(actual).not.toBe("proggMetoll@gmail.com");
  });
});
describe("registration form test_9", function () {
  test("checking an incorrect password", function () {
    const actual = getRegistration.password(PasswordName.PASSWORD_PAGE);
    expect(actual).not.toBe("11118XR564");
  });
});
describe("registration form test_10", function () {
  test("checking an incorrect the date of birth", function () {
    const actual = getRegistration.dateBirthday(DateBirthday.DATEBIRTHDAY_PAGE);
    expect(actual).not.toBe("12.10.67");
  });
});

describe("registration form test_11", function () {
  test("checking the absence of a space in the password", () => {
    const actual = getRegistration.password(PasswordName.PASSWORD_PAGE);
    expect(actual).not.toMatch(/s/);
  });
});
describe("registration form test_12", function () {
  test("checking the absence of a space in the email", () => {
    const actual = getRegistration.email(Email.EMAIL_PAGE);
    expect(actual).not.toMatch(/s/);
  });
});
describe("registration form test_13", function () {
  test("checking the absence of a space in the date of birth", function () {
    const actual = getRegistration.dateBirthday(DateBirthday.DATEBIRTHDAY_PAGE);
    expect(actual).not.toMatch(/s/);
  });
});

describe("registration form test_14", function () {
  test("checking an email with an email address", () => {
    const actual = getRegistration.email(Email.EMAIL_PAGE);
    expect(actual).toMatch(/@gmail.com/);
  });
});

describe("registration form test_15", function () {
  test("checking the password length", function () {
    const actual = getRegistration.password(PasswordName.PASSWORD_PAGE);
    expect(actual.length).toBeGreaterThan(0);
    expect(actual.length).toBeLessThan(12);
  });
});
describe("registration form test_16", function () {
  test("checking for uppercase letters in the password", function () {
    const actual = getRegistration.password(PasswordName.PASSWORD_PAGE);
    expect(actual).toMatch(/^[A-Z\d]*$/);
  });
});
describe("registration form test_17", function () {
  test("checking for the absence of capital letters in the password", function () {
    const actual = getRegistration.password(PasswordName.PASSWORD_PAGE);
    expect(actual).not.toMatch(/^[a-z\d]*$/);
  });
});

describe("registration form test_18", function () {
  test("checking the presence of capital, small letters and @ in the email", function () {
    const actual = getRegistration.email(Email.EMAIL_PAGE);
    expect(actual).toMatch(/^[a-zA-Z"@"“\.”\d]*$/);
  });
});

describe("registration form test_19", function () {
  test("checking the length of the date of birth", function () {
    const actual = getRegistration.dateBirthday(DateBirthday.DATEBIRTHDAY_PAGE);
    expect(actual).toHaveLength(10);
  });
});
describe("registration form test_20", function () {
  test("checking for compliance with the length of the date of birth", function () {
    const actual = getRegistration.dateBirthday(DateBirthday.DATEBIRTHDAY_PAGE);
    expect(actual).not.toHaveLength(9);
    expect(actual).not.toHaveLength(11);
  });
});
describe("registration form test_21", function () {
  test("checking for a value in the date of birth", function () {
    const actual = getRegistration.dateBirthday(DateBirthday.DATEBIRTHDAY_PAGE);
    expect(actual).not.toBeNull();
  });
});
describe("registration form test_22", function () {
  test("checking the date of birth for definition", function () {
    const actual = getRegistration.dateBirthday(DateBirthday.DATEBIRTHDAY_PAGE);
    expect(actual).toBeDefined();
    expect(actual).toBeTruthy();
    expect(actual).not.toBeUndefined();
  });
});
describe("registration form test_23", function () {
  test("checking the email for definition", function () {
    const actual = getRegistration.dateBirthday(Email.EMAIL_PAGE);
    expect(actual).toBeDefined();
    expect(actual).toBeTruthy();
    expect(actual).not.toBeUndefined();
  });
});
describe("registration form test_24", function () {
  test("checking the password for definition", function () {
    const actual = getRegistration.dateBirthday(PasswordName.PASSWORD_PAGE);
    expect(actual).toBeDefined();
    expect(actual).toBeTruthy();
    expect(actual).not.toBeUndefined();
  });
});
