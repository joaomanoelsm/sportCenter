interface ThemeI {
  color: {
    primary: string;
    secondary: string;
    greyScale: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    };
  };
  font: {
    fontTitleXL: string;
    fontTitleX: string;
    fontTitleM: string;
    fontTitleS: string;
    fontTextM: string;
    fontTextS: string;
  };
  spacings: {
    10: string;
    20: string;
    24: string;
    32: string;
    40: string;
    60: string;
    80: string;
    100: string;
  };
  zIndex: {
    backDrop: number;
    popUp: number;
  };
  screenWidth: {
    size1: string;
    size2: string;
  };
}

const theme: ThemeI = {
  color: {
    primary: "#FF5B26",
    secondary: "#000000",
    greyScale: {
      100: "#f6f9fc",
      200: "#e9ecef",
      300: "#dee2e6",
      400: "#ced4da",
      500: "#adb5bd",
      600: "#8898aa",
      700: "#525f7f",
      800: "#32325d",
      900: "#212529",
    },
  },
  font: {
    fontTitleXL: "10rem",
    fontTitleX: "6.4rem",
    fontTitleM: "4.0rem",
    fontTitleS: "3.2rem",
    fontTextM: "2.4rem",
    fontTextS: "1.6rem",
  },
  spacings: {
    10: "10px",
    20: "20px",
    24: "24px",
    32: "32px",
    40: "40px",
    60: "60px",
    80: "80px",
    100: "100px",
  },
  zIndex: {
    backDrop: 10,
    popUp: 100,
  },
  screenWidth: {
    size1: "112.4rem",
    size2: "90%",
  },
};

export default theme;
