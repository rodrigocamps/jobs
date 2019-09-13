const getResponseObject = () => {
        ({
                "1a": "This is an exercise.",
                1b: "You must fix the error",
                "1c": "and make a PR."
        });
};

const main = () => Object.values(getResponseObject()).join(" ");

console.log(main());
