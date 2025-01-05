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

function EditableSchool({ school, onChange }) {
    return (
        <div className="school">
            <label htmlFor={`${school.name}-${school.id}`}>School Name</label>
            <input
                id={`${school.name}-${school.id}`}
                className="school-name-editing"
                name={`${school.name}-${school.id}`}
                type="text"
                placeholder="Enter school's name"
                value={school.name}
                onChange={(e) => onChange(school.id, "name", e.target.value)}
            />
            <label htmlFor={`${school.degree}-${school.id}`}>Degree</label>
            <input
                id={`${school.degree}-${school.id}`}
                className="degree-editing"
                name={`${school.degree}-${school.id}`}
                type="text"
                placeholder="Enter degree"
                value={school.degree}
                onChange={(e) => onChange(school.id, "degree", e.target.value)}
            />
            <label htmlFor={`${school.graduation}-${school.id}`}>
                Graduation
            </label>
            <input
                id={`${school.graduation}-${school.id}`}
                className="graduation-editing"
                name={`${school.graduation}-${school.id}`}
                type="date"
                placeholder="Enter graduation date"
                value={school.graduation}
                onChange={(e) =>
                    onChange(school.id, "graduation", e.target.value)
                }
            />
        </div>
    );
}

function Education() {
    const [schools, setSchools] = useState([
        { id: crypto.randomUUID(), name: "", degree: "", graduation: "" },
    ]);

    function onChange(id, field, value) {
        setSchools((prevSchools) =>
            prevSchools.map((school) =>
                school.id === id ? { ...school, [field]: value } : { ...school }
            )
        );
    }

    function addSchool(e) {
        e.preventDefault;
        setSchools((prevSchools) => [
            ...prevSchools,
            { id: crypto.randomUUID(), name: "", degree: "", graduation: "" },
        ]);
    }

    function removeSchool(id) {
        setSchools((prevSchools) =>
            prevSchools.filter((school) => school.id !== id)
        );
    }

    return (
        <Section header="Education">
            {(isEditing) => (
                <>
                    {isEditing ? (
                        <>
                            {schools.map((school) => (
                                <div className="school-block" key={school.id}>
                                    <EditableSchool
                                        school={school}
                                        onChange={onChange}
                                    />
                                    <button
                                        onClick={() => removeSchool(school.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                            <div className="add-school">
                                <button
                                    className="add-school-btn"
                                    onClick={addSchool}
                                >
                                    Add School
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            {schools.map((school) => (
                                <div className="school-block" key={school.id}>
                                    <StaticSchool school={school} />
                                </div>
                            ))}
                        </>
                    )}
                </>
            )}
        </Section>
    );
}

export { Education };
