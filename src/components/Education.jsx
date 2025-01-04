import { useState } from "react";
import { Section } from "./Section";

function StaticSchool({ school }) {
    return (
        <>
            <h3 className="school-name-static">{school.name}</h3>
            <p className="degree-static">{school.degree}</p>
            <p className="graduation-static">{school.graduation}</p>
        </>
    );
}

function EditableSchool({ school }) {
    //need to pass some variable to update school object when things are updated
    return (
        <>
            <label htmlFor={`${school.name}-${school.index}`}>
                School Name
            </label>
            <input
                id={`${school.name}-${school.index}`}
                className="school-name-editing"
                name={`${school.name}-${school.index}`}
                type="text"
                placeholder="Enter school's name"
                value={school.name}
                // onChange={(e) => setSchoolName(e.target.value)}
            />
            <label htmlFor="degree">Degree</label>
            <input
                id="degree"
                name="degree"
                type="text"
                placeholder="Enter degree"
                value={school.degree}
                // onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="graduation">=Graduation</label>
            <input
                id="graduation"
                name="graduation"
                type="date"
                placeholder="Enter graduation date"
                value={school.date}
                // onChange={(e) => setPhone(e.target.value)}
            />
        </>
    );
}

// need ability to add and remove schools as needed

function Education() {
    const [schools, setSchools] = useState([
        { name: "", degree: "", graduation: "" },
    ]);

    return (
        <Section header="Education">
            {(isEditing) => (
                <>
                    {isEditing ? (
                        <>
                            {schools.map((school, index) => (
                                <EditableSchool key={index} school={school} />
                                // need appropriate onchange events to update schools correctly
                            ))}
                        </>
                    ) : (
                        <>{/* if not editing */}</>
                    )}
                </>
            )}
        </Section>
    );
}

export { Education };
