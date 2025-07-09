import { useState } from "react";

const Forms1 = () => {
    const [formdata, setFormdata] = useState({ name: "", mail: "", message: "" })
    const [formdone, setFormdone] = useState(false);
    const [error, setError] = useState({});
    const [submittedData, setSubmittedData] = useState();

    const validate = () => {
        const err = {};
        if (!formdata.name) {
            err.name = "FILL THE NAME FIELD"
        }
        if (!formdata.mail) {
            err.mail = "FILL THE MAIL FIELD";
        }
        if (!formdata.message) {
            err.message = "FILL THE MAIL FIELD";
        }
        
        return err;

    }
    const isFormValid = formdata.name && formdata.mail && formdata.message;
    console.log("rerenderig")
    const submitHandler = (e) => {
        console.log(e);
        e.preventDefault();
        const errorvalues = validate();
        if (Object.keys(errorvalues).length !== 0) {
            //alert(Object.values(errorvalues).join("\n"));
            
            setError(errorvalues);
            return;
        }
       
        
    
        setFormdone(true);
        setSubmittedData(formdata);
        setFormdata({ name: "", mail: "", message: "" })


    }
    const handlechange = (e) => {
        
        const { name, value } = e.target

        setFormdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={formdata.name} name="name" onChange={handlechange} placeholder="Enter name"></input><br />
                {error.name && <p>{error.name}</p>}
                <input type="email" value={formdata.mail} name="mail" onChange={handlechange} placeholder="Enter mailId"></input><br />
                {error.mail && <p>{error.mail}</p>}

                <input type="text" value={formdata.message} name="message" onChange={(e)=>{handlechange(e)}} placeholder="Enter Message"></input><br />
                {error.message && <p>{error.message}</p>}

                <button type="submit" disabled={!isFormValid}>Submit</button>

            </form>

            {
                formdone ? (
                    <>
                        <h2>{submittedData.name}</h2>
                        <h2>{submittedData.mail}</h2>
                        <h2>{submittedData.message}</h2>
                    </>

                ) : (
                    <h1>Fill the form</h1>
                )
            }
        </>
    )



}
export default React.memo(Forms1);