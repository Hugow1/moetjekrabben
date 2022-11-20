async function getData() {
  const newDate = new Date();
  const today = JSON.stringify(newDate).slice(1, 11);
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=52.3738&longitude=4.8910&hourly=temperature_2m,relativehumidity_2m&start_date=${today}&end_date=${today}`,
    { next: { revalidate: 500 } }
  );
  return res.json();
}

export default async function page() {
  const data = await getData();
  const temps = data.hourly.temperature_2m.slice(0, 7);
  const humidity = data.hourly.relativehumidity_2m.slice(0, 7);
  const avarageTemp = temps.reduce((a, b) => a + b, 0) / temps.length;
  const avarageHum = humidity.reduce((a, b) => a + b, 0) / humidity.length;

  function calculator() {
    if (avarageHum > 80 && avarageTemp < 2) {
      return "Ja 🥶, waarschijnlijk moet je krabben";
    } else {
      return "Waarschijnlijk hoef je niet te krabben 🎉";
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-5 bg-slate-700">
      <div className="max-w-3xl text-center text-white">
        <h1 className="mb-4 text-5xl">Moet je vandaag krabben?</h1>
        <p className="mb-10 text-xl">{calculator()}</p>
        <p className="mb-4">
          Dit antwoord is gebaseerd op het gemiddelde weerbericht voor vandaag
          voor Nederland. Hiermee heb je een tool waarmee je zou kunnen bepalen
          of je vandaag een aantal minuten eerder de deur uit moet gaan om je
          autoruiten te krabben.
        </p>
        <p>
          Of je de ruiten van je auto moet krabben hangt samen met de
          temperatuur en de lucht vochtigheid. Als het vochtig en koud genoeg is
          geweest, kan er ijs ontstaan op de ruiten.
        </p>
        <p>
          Daar door is het niet altijd dat als je moet krabben, de ruiten
          daadwerkelijk ook dicht gevroren zijn. Met de lagere temperatuur kan
          er ook minder vocht in de lucht zitten.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 text-white">
        <a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a>
        <a href="https://www.hugowinder.com">Project by Hugo Winder</a>
      </div>
    </div>
  );
}
