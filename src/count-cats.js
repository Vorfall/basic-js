const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  count =0

  for(i=0;i<matrix.length;i++)
  {
      tmp=matrix[i].length
      for(j=0;j<tmp;j++)
      { 
        if(matrix[i][j]==="^^")
        {
           count++
        }
      }
  }
  return count
};
