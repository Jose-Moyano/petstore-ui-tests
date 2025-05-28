module.exports = {
    default: {
        require: [
            "step-definitions/**/*.ts",
            "support/**/*.ts"
        ],
        requireModule: ["ts-node/register"],
        format: ["progress"]
    }
}

