import { useState } from "react";
import { Section } from "./Section";

function GeneralInfo() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    return (
        <Section header="General Info">
            {(isEditing) => (
                <>
                    {isEditing ? (
                        <>
                            <label htmlFor="name">First and Last Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="phone">Phone</label>
                            <input
                                id="phone"
                                name="phone"
                                type="phone"
                                placeholder="Enter your phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </>
                    ) : (
                        <>
                            <p>Name: {name}</p>
                            <p>Email: {email}</p>
                            <p>Phone: {phone}</p>
                        </>
                    )}
                </>
            )}
        </Section>
    );
}

export { GeneralInfo };
