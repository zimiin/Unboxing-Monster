export const generateProbability = (
  itemPrices: number[],
  boxPrice: number,
  alpha = 0.5,
): number[] => {
  const semiProbabilities = [];
  let baseProb = 1;

  for (let i = 0; i < itemPrices.length; i++) {
    let prob;
    if (i === itemPrices.length - 1) prob = baseProb;
    else {
      const remain = itemPrices.slice(i + 1);
      const nextBoxPrice =
        alpha * Math.min(remain[0], boxPrice) +
        (1 - alpha) * remain[remain.length - 1];
      const p = (boxPrice - nextBoxPrice) / (itemPrices[i] - nextBoxPrice);
      prob = baseProb * p;
      baseProb -= prob;
      boxPrice = nextBoxPrice;
    }
    semiProbabilities.push(prob);
  }

  const counter: { [keys: number]: number } = {};
  const prob: { [keys: number]: number } = {};

  for (let i = 0; i < itemPrices.length; i++) {
    const price = itemPrices[i];
    const sProb = semiProbabilities[i];

    if (counter[price]) {
      counter[price] += 1;
      prob[price] += sProb;
    } else {
      counter[price] = 1;
      prob[price] = sProb;
    }
  }

  return itemPrices.map((price) => {
    return prob[price] / counter[price];
  });
}