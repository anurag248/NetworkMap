import LegendItem from "./LegendItem";

const legendItems = [
    new LegendItem(
        "1,000,000 +",
        "#020873",
        (cases) => cases >= 1_000_000,
        "white"
    ),
    new LegendItem(
        "500,000 - 999,999",
        "#0003c7",
        (cases) => cases >= 500_000 && cases < 1_000_000,
        "white"
    ),
    new LegendItem(
        "200,000 - 499,999",
        "#1510f0",
        (cases) => cases >= 200_000 && cases < 500_000,
    ),
    new LegendItem(
        "50,000 - 199,999",
        "#2c1dff",
        (cases) => cases >= 50_000 && cases < 200_000,
    ),
    new LegendItem(
        "0 - 49,999",
        "#7fb2f0",
        (cases) => cases > 0 && cases < 50_000,
    ),
    new LegendItem("NO DATA", "#ffff", (cases) => true),

];

export default legendItems;