import { calculateInvestmentResults } from "../util/investment";
import { formatter } from "../util/investment";
export default function Results({ value }) {
    console.log('value', value);
    const calVal = calculateInvestmentResults(value);
    return (
        <table id="result">
            <thead>
                <tr>
                    <td>Year</td>
                    <td>Investment value</td>
                    <td>Interest</td>
                    <td>Total Interest</td>
                    <td>Capital</td>
                </tr>
            </thead>

            <tbody>{
                calVal.map(val => {
                    const totalInt = val.valueEndOfYear - val.annualInvestment * val.year - value.initialInvestment;
                    const capital = val.valueEndOfYear - totalInt;
                    return (
                        <tr key={val.year}>
                            <td>{val.year}</td>
                            <td>{formatter.format(val.valueEndOfYear)}</td>
                            <td>{formatter.format(val.interest)}</td>
                            <td>{formatter.format(totalInt)}</td>
                            <td>{formatter.format(capital)}</td>
                        </tr>
                    )
                })}</tbody>
        </table>
    )
}