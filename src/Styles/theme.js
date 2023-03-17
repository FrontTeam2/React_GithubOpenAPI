const PALETTE = {
    primary: {
        100: "#CCFFF9",
        200: "#00E5C9",
        300: "#00C7AE",
    },
    subColor: "#EBF1F4",
    fontColor: "#FFFFFF",
    error: "#FF0000",
    white: "#FFFFFF",
    black: "#000000",
    gray: {
        100: "#E9E9E9",
        200: "#D9D9D9",
        300: "#656565",
    },
};

const FONT_SIZE = {
    tiny: "12px",
    small: "16px",
    medium: "20px",
    large: "24px",
    big: "28px",
};

const FONT_WEIGHT = {
    thin: "100",
    regular: "400",
    bold: "800",
};

const theme = {
    PALETTE,
    FONT_SIZE,
    FONT_WEIGHT,
};
// const theme = (mode) =>{return{}};
//                매개변수 가능 -> App.js에서 한번에 관리 가능

export default theme;
