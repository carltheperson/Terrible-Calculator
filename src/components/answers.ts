interface Answer {
  answer: string;
  condition: boolean;
}

export const answers: ((num: number) => Answer)[] = [
  (num) => {
    return { answer: "Thats at least 10", condition: num > 10 };
  },
  (num) => {
    return { answer: "I think it's " + num, condition: true };
  },
  (num) => {
    return { answer: "Thats a very big number", condition: num > 1000 };
  },
  (num) => {
    return { answer: "I have no idea", condition: true };
  },
  (num) => {
    return { answer: "Your guess is as good as mine", condition: true };
  },
  (num) => {
    return { answer: "You should know this", condition: true };
  },
  (num) => {
    const answer = Math.floor(
      Math.random() * (num + 3 - (num - 2) + 1) + (num - 2)
    );
    return { answer: "I'm pretty sure it's " + answer, condition: true };
  },
  (num) => {
    return { answer: "Thats " + (num + 3), condition: num < 100 };
  },
  (num) => {
    return {
      answer: "I'm sure it's " + (num + (Math.floor(Math.random() * 6) + 1)),
      condition: num < 500,
    };
  },
  (num) => {
    return { answer: "It's below 0", condition: num < 0 };
  },
  (num) => {
    return {
      answer: "I'm 100% sure it's " + (num + 1),
      condition: num > 10 && num < 200,
    };
  },
  (num) => {
    return {
      answer: "I know what it is but I won't tell you",
      condition: true,
    };
  },
  (num) => {
    return {
      answer: "The answer is WAY to big",
      condition: num > 1500,
    };
  },
  (num) => {
    return { answer: "Your answer is " + (num - 0.01), condition: true };
  },
  (num) => {
    return { answer: num.toString(), condition: true };
  },
  (num) => {
    return { answer: (num - 1).toString(), condition: true };
  },
  (num) => {
    return { answer: (num + 1).toString(), condition: true };
  },
  (num) => {
    return {
      answer: `It's either ${num + Math.floor(Math.random() * 2)} or ${
        num - Math.floor(Math.random() * 3)
      }`,
      condition: num < 100,
    };
  },
  (num) => {
    return {
      answer: (3.14159265359).toString(),
      condition: num < 6,
    };
  },
];
