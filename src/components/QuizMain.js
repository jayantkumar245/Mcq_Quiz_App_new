import { Component } from "react";
import Question from "./Question/Question";
import Answer from "./Answer/Answer";
import ProgressBars from "./ProgressBar/ProgressBars";
import "./QuizMain.css";

export default class Quiz extends Component {
  state = {
    percentages: {
      1: "5",
      2: "10",
      3: "15",
      4: "20",
      5: "25",
      6: "30",
      7: "35",
      8: "40",
      9: "45",
      10: "50",
      11: "55",
      12: "60",
      13: "65",
      14: "70",
      15: "75",
      16: "80",
      17: "85",
      18: "90",
      19: "95",
      20: "100"
    },
    numbers: {
      1: "Question 01 of 20",
      2: "Question 02 of 20",
      3: "Question 03 of 20",
      4: "Question 04 of 20",
      5: "Question 05 of 20",
      6: "Question 06 of 20",
      7: "Question 07 of 20",
      8: "Question 08 of 20",
      9: "Question 09 of 20",
      10: "Question 10 of 20",
      11: "Question 11 of 20",
      12: "Question 12 of 20",
      13: "Question 13 of 20",
      14: "Question 14 of 20",
      15: "Question 15 of 20",
      16: "Question 16 of 20",
      17: "Question 17 of 20",
      18: "Question 18 of 20",
      19: "Question 19 of 20",
      20: "Question 20 of 20"
    },
    difficultys: {
      1: "★★★",
      2: "★☆☆",
      3: "★★★",
      4: "★☆☆",
      5: "★★☆",
      6: "★☆☆",
      7: "★★☆",
      8: "★☆☆",
      9: "★★☆",
      10: "★★☆",
      11: "★★★",
      12: "★★☆",
      13: "★★☆",
      14: "★★☆",
      15: "★☆☆",
      16: "★★★",
      17: "★★☆",
      18: "★☆☆",
      19: "★★☆",
      20: "★★★"
    },
    questions: {
      1: "What was the name of the hero in the 80s animated video game Dragon Lair ?",
      2: "What is the scientific name for modern day humans ?",
      3: "What is Ron Weasley's middle name ?",
      4: "Who is the creator of the comic series The Walking Dead ?",
      5: "At the start of a standard game of the Monopoly if you throw a double six which square would you land on ?",
      6: "What is the capital of Jamaica ?",
      7: "When did Jamaica recieve its independence from England ?",
      8: "Kangaroos keep food in their pouches next to their children ?",
      9: "In 2013 how much money was lost by Nigerian scams  ?",
      10: "How old was Lyndon B. Johnson when he assumed the role of President of the United States  ?",
      11: "In World of Warcraft lore who organized the creation of the Paladins ?",
      12: "In the game Subnautica a Cave Crawler will attack you ?",
      13: "What is the name of the device that allows for infinite energy in the anime Dimension W  ?",
      14: "What is the name of Cream the Rabbit's mom in the Sonic the Hedgehog series ?",
      15: "These two countries held a commonwealth from the 16th to 18th century ?",
      16: "Which of these voices wasn't a choice for the House AI in The Simpsons Treehouse of Horror short House of Whacks  ?",
      17: "From which album is the Gorillaz song On Melancholy Hill featured in  ?",
      18: "Scotland voted to become an independent country during the referendum from September 2014 ?",
      19: "In Left 4 Dead which campaign has the protagonists going through a subway in order to reach a hospital for evacuation ?",
      20: "What was the last colony the UK ceded marking the end of the British Empire ?"
    },
    answers: {
      1: {
        1: "Arthur",
        2: "Sir Toby Belch",
        3: "Dirk the Daring",
        4: "Guy of Gisbourne"
      },
      2: {
        1: "Homo Ergaster",
        2: "Homo Sapiens",
        3: "Homo Erectus",
        4: "Homo Neanderthalensis"
      },
      3: {
        1: "Dominic",
        2: "Arthur",
        3: "John",
        4: "Bilius"
      },
      4: {
        1: "Robert Crumb",
        2: "Robert Kirkman",
        3: "Stan Lee",
        4: "Malcolm Wheeler-Nicholson"
      },
      5: {
        1: "Water Works",
        2: "Chance",
        3: "Community Chest",
        4: "Electric Company"
      },
      6: {
        1: "Dar es Salaam",
        2: "Kingston",
        3: "Rio de Janeiro",
        4: "Kano"
      },
      7: {
        1: "1962",
        2: "1963",
        3: "1492",
        4: "1987"
      },
      8: {
        1: "False",
        2: "True"
      },
      9: {
        1: "242.7Billion",
        2: "2495 Million",
        3: "2495.6Million",
        4: "2412.7 Billion"
      },
      10: {
        1: "50",
        2: "55",
        3: "54",
        4: "60"
      },
      11: {
        1: "Alexandros Mograine",
        2: "Uther the Lightbringer",
        3: "Alonsus Faol",
        4: "Sargeras The Daemon Lor"
      },
      12: {
        1: "False",
        2: "True"
      },
      13: {
        1: "Wires",
        2: "Collectors",
        3: "Coils",
        4: "Tesla"
      },
      14: {
        1: "Strawberry",
        2: "Peach",
        3: "Mint",
        4: "Vanilla"
      },
      15: {
        1: "Poland and Lithuania",
        2: "North Korea and South Korea",
        3: "Bangladesh and Bhutan",
        4: "Hutu and Rwanda"
      },
      16: {
        1: "Dennis Miller",
        2: "Pierce Brosnan",
        3: "George Clooney",
        4: "Matthew Perry"
      },
      17: {
        1: "Demon Days",
        2: "Humanz",
        3: "The Fall",
        4: "Plastic Beach"
      },
      18: {
        1: "False",
        2: "True"
      },
      19: {
        1: "Hospital Havoc",
        2: "Blood Harvest",
        3: "Subway Sprint",
        4: "No Mercy"
      },
      20: {
        1: "India",
        2: "HongKong",
        3: "Australia",
        4: "Ireland"
      }
    },
    correctAnswers: {
      1: "3",
      2: "2",
      3: "4",
      4: "3",
      5: "4",
      6: "2",
      7: "1",
      8: "1",
      9: "4",
      10: "2",
      11: "3",
      12: "2",
      13: "3",
      14: "4",
      15: "1",
      16: "3",
      17: "4",
      18: "1",
      19: "4",
      20: "2"
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0
  };

  checkAnswer = (answer) => {
    const { correctAnswers, step, score } = this.state;
    if (answer === correctAnswers[step]) {
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        clickedAnswer: answer
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer
      });
    }
  };

  nextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0
    });
  };

  render() {
    let {
      numbers,
      questions,
      answers,
      correctAnswer,
      clickedAnswer,
      step,
      difficultys,
      percentages,
      score
    } = this.state;
    return (
      <div className="Content">
        {step <= Object.keys(questions).length ? (
          <>
            <ProgressBars percentage={percentages[step]} />
            <Question
              question={questions[step]}
              number={numbers[step]}
              difficult={difficultys[step]}
            />
            <Answer
              answer={answers[step]}
              step={step}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            <div className="Btn">
              <button
                className="NextStep"
                disabled={
                  clickedAnswer && Object.keys(questions).length >= step
                    ? false
                    : true
                }
                onClick={() => this.nextStep(step)}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div className="finalPage">
            <h1>You have completed the quiz!</h1>
            <p>
              Your score is: {score} of {Object.keys(questions).length}
            </p>
            <p>Thank you!</p>
          </div>
        )}
      </div>
    );
  }
}
