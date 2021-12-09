let count = 0;

function cc(card) {
  if (card > 1  && card < 7) {
      count +=1
      return count + " Bet"
  }
  else if ( card > 6 && card < 10) {
    return count > 0 ? count + " Bet" : count + ' Hold'
  }
  else {
    count += - 1
    return count > 0 ? count + " Bet" : count + ' Hold'
  }
}

cc(2); cc(3); cc(7); cc('K'); cc('A');