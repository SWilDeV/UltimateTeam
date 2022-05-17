class User {
  constructor(
    Username,
    Email,
    Password,
    FirstName,
    LastName,
    City,
    UserID,
    Presentation,
    Avatar,
    CountryName,
    DateJoined
  ) {
    this.Username = Username;
    this.Email = Email;
    this.FirstName = FirstName;
    this.Password = Password;
    this.LastName = LastName;
    this.City = City;
    this.UserID = UserID;
    this.Presentation = Presentation;
    this.Avatar = Avatar;
    this.CountryName = CountryName;
    this.DateJoined = DateJoined;
  }
}

module.exports = User;
