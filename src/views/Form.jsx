import { useState } from "react";
import '../styles/form.css';
import Indicator from "../components/Indicator";

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [interest, setInterest] = useState("");
    const [readyToSubmit, setReadyToSubmit] = useState("");
    const [sumbitted, setSumbitted] = useState(false);
    const [emailNotValid, setEmailNotValid] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        if (!validate(e.target.email.value)) {
            return;
        }
        setName(e.target.name.value);
        setEmail(e.target.email.value);
        setInterest(e.target.interest.value);
        setReadyToSubmit(true);
        waitToSubmit();
    };

    async function waitToSubmit() {
        setTimeout(() => {
            setSumbitted(true);
        }, 1500);
    }

    function validate(emailPendingValidation) {
        const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (emailPattern.test(emailPendingValidation)) {
            setEmailNotValid(false);
            return true;
        }
        setEmailNotValid(true);
        return false;
    }

    return (
        <div className="Form">{
            sumbitted ?
                (<div className="form__comfirmation"> Thanks {name}! I will reach out to you at {email}. Be sure to checkout the upcoming {interest} contents! </div>)
                : (
                    <form onSubmit={handleSubmit}>
                        <fieldset className="form__item">
                            <label className="form__item__name" htmlFor="name">Your Name *</label>
                            <input type="text" className="form__input__name" name="name" placeholder="Required" required />
                        </fieldset>
                        <fieldset className="form__item">
                            <label className="form__item__name" htmlFor="email" type="email" required>Email *</label>
                            <input type="text" className="form__input__email" name="email" placeholder="Required" required />
                            <div className={`${(emailNotValid) ? 'form__email__error--active' : 'form__email__error--hidden'}`}>Your submitted an invalid email. Please re-enter. </ div>
                        </fieldset>
                        <fieldset className="form__item">
                            <label className="form__item__name" htmlFor="subscription">Would you like to join my email list? </label>
                            <input type="checkbox" className="form__checkbox" name="subscription" />
                        </fieldset>
                        <fieldset className="form__item table__item__interest">
                            <label className="form__item__name" htmlFor="interest">Which type of content are you most interested in?: *</label>
                            <select name="interest" className="form__dropdown" required>
                                <option value="" default>Please select (required)</option>
                                <option value="pictures">Pictures</option>
                                <option value="videos">Videos</option>
                                <option value="articles">Articles</option>
                            </select>
                        </fieldset>
                        <input className="form__submit" type="submit" value="Submit" />
                        <div className={`${(readyToSubmit) ? 'indicator--active' : 'indicator--hidden'}`}>
                            <Indicator />
                        </div>
                    </form>
                )
            }
        </div>
    )
}

export default Form
