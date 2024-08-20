function calculateAgeInDays(birthYear, birthMonth, birthDay) {
    var birthDate = new Date(birthYear, birthMonth - 1, birthDay); // Month is zero-based
    var today = new Date();
    var differenceInMilliseconds = today - birthDate;
    var days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    return days;
}

// Example usage:
var ageInDays = calculateAgeInDays(2002, 8, 13); // Change the birthdate as needed
console.log("Your age in days is: " + ageInDays);



