import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124,
      img: require("./images/HarryPotter.jpg"),
      description:
        "Harry Potter is an orphaned boy brought up by his unkind Muggle (non-magical) aunt and uncle. At the age of eleven, half-giant Rubeus Hagrid informs him that he is actually a wizard and that his parents were murdered by an evil wizard named Lord Voldemort.",
      review:
        "I think it is great but I haven't read it yet but the cover looks awesome which means its going to be an awesome book. I love all Harry Potter books and movies. Harry  Potter is an huge part in my life because I am a geek and weird and don't have a lot of friends , I always felt alone all the time and while reading the books and watching the movies it wasn't like I was watching Harry, Ron and Hermione face death or trying to stay alive it was like i was there with them."
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 2566124,
      img: require("./images/GOT.jpg"),
      description:
        "Game of Thrones is an HBO series that tells the story of a medieval country's civil war. The series, which premiered in April 2011, is set on the fictional continents of Westeros and Essos in a world where seasons stretch on for years.",
      review:
        "It may still be the holiday season, for a few more days, but I'm already suffering from PCD - Post Christmas Depression. If it's not a thing, it should be. It sucks taking down beautiful decorations, after spending 3 months with them, while binging on holiday fare. Having done my share of Christmas reviews From comedies like the 'Home Alone' movies, to warm/nostalgic inducing pieces like 'A Child's Christmas in Wales'. There can be only one cure for the blues... Bloodshed. And naked women!"
    },
    {
      name: "Inception",
      price: "$10",
      id: 23524,
      img: require("./images/Inception.jpg"),
      description:
        "The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person's idea into a target's subconscious.",
      review:
        "Definitely a great thriller open for interpretation and probably the film Christopher Nolan will forever be remembered by if people can ever stop talking about the dark knight and how great it is. Although it doesn't have any sexual or particularly violent content I'd still only recommend teenagers and up as to fully enjoy this film you HAVE to be a critical thinker, anyone under twelve is going to be out of there mind confused. The point is you don't know the ending."
    },
    {
      name: "Blow",
      price: "$10",
      id: 22752,
      img: require("./images/Blow.jpg"),
      description:
        "'Blow' stars Johnny Depp in a biopic about George Jung, a man who claims that in the late 1970s he imported about 85 percent of all the cocaine in America. That made him the greatest success story in drugs, an industry that has inspired more movies than any other.",
      review:
        "An emotional ride, you start from laughters and fun and then you end up crying . you simply cant help ,in the end you will be evetually in tears when you will feel the compulsions of father , the problems with money , the needs for survival of family , the betrayal, and all those issues take over the love and bonding between father and daughter! Johnny Depp never ever disappoints !"
    },
    {
      name: "Pineapple Express",
      price: "$10",
      id: 26342,
      img: require("./images/PineappleExpress.jpg"),
      description:
        "The plot centers on a process server and his marijuana dealer as they are forced to flee from hitmen and a corrupt police officer after witnessing them commit a murder. Producer Judd Apatow, who previously worked with Rogen and Goldberg on Knocked Up and Superbad, assisted in developing the story.",
      review:
        "A classic comedy, so many good moments and quotable lines. If you are looking for something that doesn't take itself too seriously, this is a solid choice. Craig Robinson and Kevin Corrigan do great as two henchmen chasing the protagonists, their interactions are priceless."
    },
    {
      name: "House of Cards",
      price: "$10",
      id: 24312,
      img: require("./images/HouseofCards.jpg"),
      description:
        "House of Cards is set in Washington, D.C., and is the story of Congressman Frank Underwood (Kevin Spacey), a Democrat from South Carolina's 5th congressional district and House Majority Whip, and his equally ambitious wife Claire Underwood (Robin Wright).",
      review:
        "Well, there are some parts where I felt incomplete but Claire Hale Underwood character portrayed by Robin Wright is one of the promising and the best things of this season; along with Michael Kelly as Doug Stamper. It seems that she's become even more ruthless than her husband. And the climax in the end too was the best thing albeit the after part scene could have been extended some more, wrapping up the overall story. Anyway, Claire has fulfilled the absence of Frank in every possible way."
    },
    {
      name: "The Queens Gambit",
      price: "$10",
      id: 16352,
      img: require("./images/QueensGambit.jpg"),
      description:
        "One of the most popular shows of the year is the Netflix limited series 'The Queen's Gambit,' which has been streamed by more than 62 million households. It's about an orphaned girl who becomes a chess prodigy, then a chess pro in a male-dominated world.",
      review:
        "It's really one of the best that came out of Netflix this past year and maybe even in a few years. Anya Taylor-Joy is magnificent, she draws you into her world, her beautiful mind in a way that you can feel and see her thoughts very clearly. Her complex character is mesmerizing, capturing your complete attention in every episode, from a little girl to the young woman she becomes. Her younger version played by Isla Johnston is capturing as well and leads you to the older version flawlessly."
    },
    {
      name: "Killing Eve",
      price: "$10",
      id: 152432,
      img: require("./images/KillingEve.jpg"),
      description:
        "Killing Eve is a British dark comedy-drama spy thriller television series, produced in the United Kingdom by Sid Gentle Films for BBC America and BBC iPlayer. The series follows Eve Polastri (Sandra Oh), a British intelligence investigator tasked with capturing psychopathic assassin Villanelle (Jodie Comer).",
      review:
        "I am just watching Killing Eve, Episode 3 of Series 3. What can i say. What a superb story to follow. My Favourite 2 actress's Sandra Oh and Jodie Comer. Wow!!!!!!  My Congratulations to all of the Actors and Film crew and also Directors of the Thriller, who have made an excellent production. I will keep watching this Fantastic TV Thriller. Thank you. I wish Jodie Comer was my next door Neighbour who i could have a Coffee and a very good conversation with."
    }
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
