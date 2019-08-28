export class Teams {
    Key: string;
    TeamID: string;
    City: string;
    Name: string;
    Conference: string;
    Division: string;
    FullName: string;
    StadiumID: string;
    ByeWeek: string;
    HeadCoach: string;
    OffensiveCoordinator: string;
    DefensiveCoordinator: string;
    SpecialTeamsCoach: string;
    OffensiveScheme: string;
    DefensiveScheme: string;
    PrimaryColor: string;
    SecondaryColor: string;
    TertiaryColor: string;
    QuaternaryColor: string;
    WikipediaLogoUrl: string;
    WikipediaWordMarkUrl: string;
    GlobalTeamID: string;
    StadiumDetails: {
        StadiumID: string;
        Name: string;
        State: string;
        Country: string;
        Capacity: string;
        PlayingSurface: string;
        GeoLat: string;
        GeoLong: string;
        Type: string
    }
}