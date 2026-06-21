function isPalindrome(word) {
  if (typeof word !== "string") return false;

  const normalized = word.toLowerCase();
  const reversed = normalized.split("").reverse().join("");

  return normalized === reversed;
}

function findPalindromeBreaks(words) {
  if (!Array.isArray(words) || words.length === 0) return [];

  const breaks = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }

  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  if (
    !Array.isArray(words) ||
    phraseLength >= words.length ||
    phraseLength <= 0
  ) {
    return [];
  }

  const map = new Map();
  const result = [];

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");

    if (!map.has(phrase)) {
      map.set(phrase, []);
    }

    map.get(phrase).push(i);
  }

  for (const indices of map.values()) {
    if (indices.length > 1) {
      result.push(...indices);
    }
  }

  return result.sort((a, b) => a - b);
}

function analyzeTexts(texts, phraseLength) {
  if (!Array.isArray(texts) || texts.length === 0) return [];

  const results = [];

  for (const words of texts) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words),
    });
  }

  return results;
}