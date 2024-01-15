
export default function UserInput({ onValueChange, inputValue }) {

    return (
        <div id="user-input" className="input-group">

            <div>
                <label>Initial Investment</label>
                <input type="number"
                    value={inputValue.initialInvestment}
                    onChange={(event) => onValueChange('initialInvestment', event.target.value)}
                    required />
                <label>Annual Investment</label>
                <input type="number"
                    value={inputValue.annualInvestment}
                    onChange={(event) => onValueChange('annualInvestment', event.target.value)}
                    required />
            </div>
            <div>
                <label>Expected return</label>
                <input type="number"
                    value={inputValue.expectedReturn}
                    onChange={(event) => onValueChange('expectedReturn', event.target.value)}
                    required />
                <label>Duration</label>
                <input type="number"
                    value={inputValue.duration}
                    onChange={(event) => onValueChange('duration', event.target.value)}
                    required />
            </div>


        </div>
    )
}