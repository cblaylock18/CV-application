import { useState } from "react";

function Section({ header, children }) {
    const [isEditing, setIsEditing] = useState(true);

    function onEdit(e) {
        e.preventDefault;
        setIsEditing(true);
    }

    function onSubmit(e) {
        e.preventDefault;
        setIsEditing(false);
    }

    return (
        <section className={`${header.replace(/\s/g, "")}-block`}>
            <h2 className={header.replace(/\s/g, "")}>{header}</h2>
            {children(isEditing)}
            {isEditing ? (
                <button
                    className={`submit submit-${header.replace(/\s/g, "")}`}
                    onClick={onSubmit}
                >
                    Submit
                </button>
            ) : (
                <button
                    className={`edit edit-${header.replace(/\s/g, "")}`}
                    onClick={onEdit}
                >
                    Edit
                </button>
            )}
        </section>
    );
}

export { Section };
