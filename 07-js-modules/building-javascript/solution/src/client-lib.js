import Chart from "chart.js";

export async function startSearch(searchStr) {
  const [city, state] = searchStr.split(",");
  const [result] = await fetch(`/${city}/${state}`).then((res) => res.json());
  return result;
}

export function create5Day(canvas, { forecast }) {
  const labels = forecast.map((f) => `${f.day} - ${f.skytextday}`);
  const highs = forecast.map((f) => f.high);
  const lows = forecast.map((f) => f.low);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Highs",
          data: highs,
          backgroundColor: "red",
        },
        {
          label: "Lows",
          data: lows,
          backgroundColor: "blue",
        },
      ],
    },
  });
}
