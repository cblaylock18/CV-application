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
            <h2 className={header}>{header}</h2>
            {children(isEditing)}
            {isEditing ? (
                <button
                    className={`submit submit-${header}`}
                    onClick={onSubmit}
                >
                    Submit
                </button>
            ) : (
                <button className={`edit edit-${header}`} onClick={onEdit}>
                    Edit
                </button>
            )}
        </section>
    );
}

export { Section };
