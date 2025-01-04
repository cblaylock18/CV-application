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
        <>
            <h2 className={header}>{header}</h2>
            {children(isEditing)}
            <button className={`edit edit-${header}`} onClick={onEdit}>
                Edit
            </button>
            <button className={`submit submit-${header}`} onClick={onSubmit}>
                Submit
            </button>
        </>
    );
}

export { Section };
