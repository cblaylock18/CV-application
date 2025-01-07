import { useState } from "react";
import { Section } from "./Section";

function StaticExperience({ company }) {
    return (
        <>
            <h3 className="company-name-static">{company.name}</h3>
            <p className="position-static">{company.position}</p>
            <p className="responsibilities-static">
                {company.responsibilities}
            </p>
            <p className="start-date-static">{company.start}</p>
            <p className="end-date-static">{company.end}</p>
        </>
    );
}

function EditableExperience({ company, onChange }) {
    return (
        <div className="company">
            <label htmlFor={`${company.name}-${company.id}`}>
                Company Name
            </label>
            <input
                id={`${company.name}-${company.id}`}
                className="company-name-editing"
                name={`${company.name}-${company.id}`}
                type="text"
                placeholder="Enter company's name"
                value={company.name}
                onChange={(e) => onChange(company.id, "name", e.target.value)}
            />
            <label htmlFor={`${company.position}-${company.id}`}>
                Position
            </label>
            <input
                id={`${company.position}-${company.id}`}
                className="position-editing"
                name={`${company.position}-${company.id}`}
                type="text"
                placeholder="Enter position title"
                value={company.position}
                onChange={(e) =>
                    onChange(company.id, "position", e.target.value)
                }
            />
            <label htmlFor={`${company.responsibilities}-${company.id}`}>
                Responsibilities
            </label>
            <textarea
                id={`${company.responsibilities}-${company.id}`}
                className="responsibilities-editing"
                name={`${company.responsibilities}-${company.id}`}
                rows="4"
                cols="50"
                placeholder="Enter your responsibilities while in this position"
                value={company.responsibilities}
                onChange={(e) =>
                    onChange(company.id, "responsibilities", e.target.value)
                }
            />

            <label htmlFor={`${company.start}-${company.id}`}>Start Date</label>
            <input
                id={`${company.start}-${company.id}`}
                className="start-editing"
                name={`${company.start}-${company.id}`}
                type="date"
                placeholder="Enter start date"
                value={company.start}
                onChange={(e) => onChange(company.id, "start", e.target.value)}
            />
            <label htmlFor={`${company.end}-${company.id}`}>End Date</label>
            <input
                id={`${company.end}-${company.id}`}
                className="end-editing"
                name={`${company.end}-${company.id}`}
                type="date"
                placeholder="Enter end date (today if still employed here)"
                value={company.end}
                onChange={(e) => onChange(company.id, "end", e.target.value)}
            />
        </div>
    );
}

function Experience() {
    const [companies, setCompanies] = useState([
        {
            id: crypto.randomUUID(),
            name: "",
            position: "",
            responsibilities: "",
            start: "",
            end: "",
        },
    ]);

    function onChange(id, field, value) {
        setCompanies((prevCompanies) =>
            prevCompanies.map((company) =>
                company.id === id
                    ? { ...company, [field]: value }
                    : { ...company }
            )
        );
    }

    function addCompany(e) {
        e.preventDefault;
        setCompanies((prevCompanies) => [
            ...prevCompanies,
            {
                id: crypto.randomUUID(),
                name: "",
                position: "",
                responsibilities: "",
                start: "",
                end: "",
            },
        ]);
    }

    function removeCompany(id) {
        setCompanies((prevCompanies) =>
            prevCompanies.filter((company) => company.id !== id)
        );
    }

    return (
        <Section header="Experience">
            {(isEditing) => (
                <>
                    {isEditing ? (
                        <>
                            <div className="all-companies">
                                {companies.map((company) => (
                                    <div
                                        className="company-block editing"
                                        key={company.id}
                                    >
                                        <EditableExperience
                                            company={company}
                                            onChange={onChange}
                                        />
                                        <button
                                            onClick={() =>
                                                removeCompany(company.id)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="add-company">
                                <button
                                    className="add-company-btn"
                                    onClick={addCompany}
                                >
                                    Add Company
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="all-companies">
                            {companies.map((company) => (
                                <div
                                    className="company-block static"
                                    key={company.id}
                                >
                                    <StaticExperience company={company} />
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
        </Section>
    );
}

export { Experience };
