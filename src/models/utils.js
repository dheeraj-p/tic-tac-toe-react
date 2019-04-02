const isSubset = function(subsetCandidate, superSet) {
  return subsetCandidate.every(element => superSet.includes(element));
};

module.exports = { isSubset };
