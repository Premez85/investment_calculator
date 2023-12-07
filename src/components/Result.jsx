import {formatter} from '../util/investment'
export default function Result({obj}) {
    function roundingValue(val) {
        return Math.round(val*100)/100
    }
    if(!obj) return false;
    const result = obj.map(val => <tr>
        <td>{val.year}</td>
        <td>{roundingValue(val.interest)}</td>
        <td>{formatter.format(roundingValue(val.valueEndOfYear))}</td>
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