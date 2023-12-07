import {formatter} from '../util/investment'
export default function Result({obj}) {

    if(!obj) return false;
    const result = obj.map(val => <tr>
        <td>{val.year}</td>
        <td>{val.interest}</td>
        <td>{formatter.format(val.valueEndOfYear)}</td>
        <td>{val.annualInvestment}</td>
    </tr> )
    return (
        <table id='result'>
            <thead>
            <tr>
                <th>year</th>
                <th>interest</th>
                <th>value End Of Year</th>
                <th>annual Investment</th>
            </tr>
            </thead>
            <tbody>
            {...result}
            </tbody>
        </table>
    );
}