function marsExploration(s) {
  let times = s.length / 3;
  let example = "SOS".repeat(times);

  let changeCount = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== example[i]) {
      changeCount++;
    }
  }
  return changeCount;
}
