class User {
  constructor(
    Username,
    Email,
    Password,
    FirstName,
    LastName,
    City,
    Presentation,
    Avatar,
    CountryName,
    DateJoined,
    CountryID,
    IdGame
  ) {
    this.Username = Username;
    this.Email = Email;
    this.FirstName = FirstName;
    this.Password = Password;
    this.LastName = LastName;
    this.City = City;
    this.Presentation = Presentation;
    this.Avatar = Avatar;
    this.CountryName = CountryName;
    this.DateJoined = DateJoined;
    this.CountryID = CountryID;
    this.IdGame = IdGame;
  }
}

module.exports = User;
