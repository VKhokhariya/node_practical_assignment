function getProgrammingLanguageInfo(language) {
  const languages = {
    javascript: {
      name: "JavaScript",
      description: "JavaScript is a high-level, interpreted programming language.",
      popularity: "It is one of the most popular programming languages used for web development.",
    },
    python: {
      name: "Python",
      description: "Python is an interpreted, high-level, general-purpose programming language.",
      popularity: "It is known for its simplicity and readability, making it great for beginners.",
    },
    java: {
      name: "Java",
      description: "Java is a general-purpose, high-level programming language.",
      popularity: "It is widely used for building enterprise-level applications.",
    },
  };

  if (language.toLowerCase() in languages) {
    const { name, description, popularity } = languages[language.toLowerCase()];
    return `
        Language: ${name}
        Description: ${description}
        Popularity: ${popularity}
      `;
  } else {
    return `Sorry, I don't have information about the programming language '${language}'.`;
  }
}

module.exports = {
  getProgrammingLanguageInfo,
};