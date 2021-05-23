import React from "react";
import { useParams } from "react-router-dom";

function EmailVerification() {
    let { id } = useParams();
    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:4000/email/confirm",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                        },
                        mode: "cors",
                        body: JSON.stringify({ id }),
                    }
                );
                const json = await response.json();
                if (json.success) {
                    console.log("potwierdzono użytkownika");
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    return (
        <React.Fragment>
            <div>Potwierdź email</div>
        </React.Fragment>
    );
}

export default EmailVerification;
