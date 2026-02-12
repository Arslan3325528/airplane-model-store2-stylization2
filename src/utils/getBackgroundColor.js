//! Для визначення кольору фону картки в залежності від значення "year"
import clsx from "clsx";

export function getBgColorBuiltInStyles(year) {
    let bgColor = '#ffdb92';
    if (year > 1945) bgColor = '#d2fdbd';
    if (year > 1999) bgColor = '#d6f1ff';
    return bgColor;
};
// _____________________________________________________


//todo: var.1
// export function getBgColorVanillaCSS(year) {
//     const classNames = ["planesItem"];
//     if (year > 1945) classNames.push("last");
//     if (year > 1999) classNames.push("current");
//     console.log("classNames:", classNames); //!
//     return classNames;
// };

//todo: var.1.1 - використання бібліотеки clsx
// export function getBgColorVanillaCSS(year) {
//     const classNames = clsx(
//         "planesItem",
//         year > 1945 && "last",
//         year > 1999 && "current",
//     );
//     console.log("classNames:", classNames); //!
//     return classNames;
// };

//todo: var.2
// export function getBgColorVanillaCSS(year) {
//     const classNames = ["planesItem"];
//     if (year < 1946) return classNames;
//     year > 1945 && year < 2000 ? classNames.push("last") : classNames.push("current")
//     return classNames;
// };

//todo: var.2.1 - використання бібліотеки clsx
export function getBgColorVanillaCSS(year) {
    let classNames = "";
    if (year < 1946) return classNames = "planesItem";
    classNames = clsx(
        "planesItem",
        year > 1945 && year < 2000 ? "last" : "current"
    );
    console.log("classNames:", classNames); //!
    return classNames;
};
// _____________________________________________________


//todo: CSS-модулі 
export function getBgColorCSSModule(year) {
    // return "planesItem"

    let className = "planesItem";
    if (year > 1945) className = "planesItemLast";
    if (year > 1999) className = "planesItemCurrent";
    console.log("className:", className); //!
    return className;
};


