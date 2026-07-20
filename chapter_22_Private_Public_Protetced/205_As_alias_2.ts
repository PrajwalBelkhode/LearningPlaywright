let element: unknown = {
    tagName: "Button",
    textContext: "Submit",
    id: "Submit-btn",
    disabled: false
}

interface elementI {tagName: string, textContext: string, id: string, disabled: boolean}

let button = element as elementI;

console.log("Tag:", button.tagName);
console.log("Text:",button.textContext);
console.log("ID:",button.id);
console.log("Disabled:",button.disabled);