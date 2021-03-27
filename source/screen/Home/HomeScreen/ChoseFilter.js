const choseFilter = (key) => {
    switch (key) {
      case 1: {
        setColorFilter(defaultColor);
        return setColorFilter((state) => {
          return {
            ...state,
            color1: "red",
          };
        });
      }
      case 2: {
        setColorFilter(defaultColor);
        return setColorFilter((state) => {
          return {
            ...state,
            color2: "red",
          };
        });
      }
      case 3: {
        setColorFilter(defaultColor);
        return setColorFilter((state) => {
          return {
            ...state,
            color3: "red",
          };
        });
      }
      case 4: {
        setColorFilter(defaultColor);
        return setColorFilter((state) => {
          return {
            ...state,
            color4: "red",
          };
        });
      }
    }
  };
  export default choseFilter;