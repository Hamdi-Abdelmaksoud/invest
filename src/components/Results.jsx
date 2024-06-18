import {calculateInvestmentResults, formatter} from '../util/investment.js';
export default function Results({input}){
  const resultsData = calculateInvestmentResults(input);
   return(
<table id='result'>
<thead>
  <tr>
    <th>Year</th>
    <th>Investment Value</th>
    <th>Interest Year</th>
    <th>Total Interest</th>
    <th>invested Capital</th>
  </tr>
</thead>
<tbody>
  <th></th>
</tbody>
{resultsData.map(yearData=>{
  const totalInterest =yearData.valueEndOfYear - yearData.annualInvestment * yearData.year; 
  const totalAmountInvested=yearData.valueEndOfYear - totalInterest;
  return( <tr key={yearData.year}>
    <td>{yearData.year}</td>
    <td> {formatter.format(yearData.valueEndOfYear)}   </td>
    <td> {formatter.format(yearData.interest)}   </td>
    <td>{formatter.format(totalInterest)}    </td>
    <td> {formatter.format(totalAmountInvested)}   </td>
 
  </tr>);
})}
</table>
);
}