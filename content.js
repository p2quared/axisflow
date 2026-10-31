// =====================================================
// AXISFLOW — cała treść strony w jednym miejscu.
// Edytuj teksty, ceny, opinie i FAQ tutaj. Nie ruszaj reszty plików.
// Wartości w [nawiasach kwadratowych] to miejsca do uzupełnienia.
// =====================================================
window.SITE = {
  name: "Axisflow",
  city: "Wrocław · Brzeg Dolny",
  phone: "+48 578 903 753",
  phoneHref: "+48578903753",
  email: "axisflow.szkoleniepsow@gmail.com",
  whatsapp: "48578903753", // numer bez + i spacji
  address: "[Ulica 00, 00-000 Miasto]",
  mapUrl: "https://maps.google.com/?q=Axis+Flow",
  hours: "Pn–Pt 9:00–19:00 · Sob 9:00–14:00",
  social: { igHandle: "@axisflow.szkoleniepsow", facebook: "https://www.facebook.com/share/192w8w4BSU/", facebookReviews: "https://www.facebook.com/profile.php?id=61575505922728&sk=reviews", instagram: "https://www.instagram.com/axisflow.szkoleniepsow/" },

  hero: {
    title: "<span class=\"l1\">Znajdź swój <mark>kierunek</mark> z psem</span>",
    // zmieniający się nagłówek: "Znajdź [pre] [word] z psem". pre może być puste.
    swap: [
      { pre: "swój", word: "kierunek" },
      { pre: "wspólny", word: "język" },
      { pre: "swój", word: "rytm" },
      { pre: "", word: "równowagę" }
    ],
    swapEvery: 3600, // ms
    lead: "AxisFlow to szkoła dla psów i ich przewodników we Wrocławiu i Brzegu Dolnym. Łączymy zbalansowane metody treningowe z wiedzą etologiczną. Razem wyznaczymy kierunek, w którym chcecie iść."
  },

  // gdzie odbywają się zajęcia: box pod ofertą z mapką. tone: green = Axisflow, purple = Loweredogz
  where: {
    title: "Gdzie trenujemy<span class=\"q\">?</span>",
    points: [
      { name: "Brzeg Dolny", lat: 51.2689, lng: 16.7219, tone: "green" },
      { name: "Wrocław", lat: 51.1079, lng: 17.0385, tone: "green" }
    ],
    paragraphs: [
      "Zajęcia prowadzimy w Brzegu Dolnym, w naszej sali, oraz we Wrocławiu. Nina i Ania mogą też przyjechać do Ciebie do domu na konsultację lub trening.",
      "Nosework z Moniką odbywa się w sali w Brzegu Dolnym, a tropienie w terenie, w różnych miejscach Wrocławia."
    ]
  },

  steps: [
    { icon: "phone", title: "Kontakt", text: "Napisz lub zadzwoń. Opowiedz nam o swoim psie i dokąd chcecie dojść: rozwój umiejętności, głębsza relacja, sport albo wsparcie w trudnej sytuacji. Razem ustalimy termin konsultacji." },
    { icon: "paw", title: "Pierwsze spotkanie", text: "Konsultacja behawioralna to pierwszy etap naszej współpracy. Zaczynamy od ankiety, a podczas spotkania poznajemy Ciebie i Twojego psa, analizujemy trudności i cele oraz ustalamy kierunek dalszej pracy. Już na konsultacji wprowadzamy pierwsze ćwiczenia i rozwiązania. Po spotkaniu otrzymujesz podsumowanie wraz z zaleceniami do dalszej pracy." },
    { icon: "trophy", title: "Trening i efekty", text: "Na podstawie konsultacji wybieramy formę pracy: trening indywidualny, zajęcia grupowe czy dodatkowe zajęcia. Trenujemy regularnie, na bieżąco oceniamy postępy psa i przewodnika i pracujemy nad tym, by efekty były widoczne w codziennych sytuacjach, nie tylko na zajęciach." }
  ],

  services: [
    {
      id: "konsultacja",
      photo: "assets/gallery/11.webp",
      icon: "chat",
      title: "Konsultacja behawioralna",
      for: "Na start i przy trudnych zachowaniach",
      text: "Konsultacja behawioralna to punkt wyjścia do świadomej pracy z psem. Przeprowadzamy szczegółowy wywiad, obserwujemy psa i analizujemy temperament, motywację oraz genetyczne uwarunkowania zachowania. Na tej podstawie powstaje plan pracy dopasowany do Waszych celów. Konsultacja sprawdza się zarówno wtedy, gdy chcecie zaplanować rozwój psa, jak i wtedy, gdy mierzycie się z lękiem, reaktywnością czy agresją. Po niej otrzymujecie podsumowanie oraz propozycję z dalszym planem działania.",
      items: [
        { name: "Konsultacja", price: "200 zł" }
      ]
    },
    {
      id: "trening",
      photo: "assets/gallery/7.webp",
      icon: "dog",
      title: "Trening indywidualny",
      for: "Dla psów w każdym wieku",
      text: "Trening indywidualny to praca 1:1 nad Waszymi celami: od posłuszeństwa codziennego i przywołania, przez chodzenie na smyczy i kontrolę emocji, po umiejętności sportowe. Dobieramy metody do psa - jego temperamentu, motywacji i poziomu zaawansowania - i uczymy przewodnika, jak samodzielnie prowadzić psa na co dzień. Pracujemy w oparciu o zbalansowane metody, etologię i kwadrat wzmocnień. Zajęcia odbywają się w sali szkoleniowej w Brzegu Dolnym oraz w terenie.",
      items: [
        { name: "Pojedyncze zajęcia", price: "100 zł" },
        { name: "Pakiet 8 zajęć", price: "720 zł" }
      ]
    },
    {
      id: "bitework",
      photo: "assets/gallery/8.webp",
      icon: "tug",
      title: "Bitework",
      for: "Dla psów sportowych i pracujących",
      text: "Praca z szarpakiem i aportem w kontrolowanych warunkach. Rozwija motywację, pewność siebie i kontrolę nad emocjami, a bezpieczeństwo psa i opiekuna jest zawsze na pierwszym miejscu.",
      items: [
        { name: "Pojedyncze zajęcia", price: "80 zł" }
      ]
    },
    {
      id: "grupowe",
      photo: "assets/gallery/2.webp",
      icon: "group",
      wide: true,
      title: "Zajęcia grupowe",
      for: "Dla psów i ich opiekunów",
      text: "Pracuj ze swoim psem w towarzystwie innych psów i ucz się, jak utrzymać jego uwagę wśród rozproszeń. Chcesz wiedzieć, kiedy startują najbliższe zajęcia? Skontaktuj się z nami, a podamy terminy i wolne miejsca.",
      cta: "Skontaktuj się z nami"
    },
    {
      id: "nosework",
      photo: "assets/gallery/6.webp",
      icon: "scent",
      title: "Nosework",
      collab: "Loweredogz",
      for: "Dla psów aktywnych, wrażliwych i seniorów",
      text: "Praca węchowa, czyli szukanie zapachów, która męczy głowę zamiast nóg. Uspokaja psy pobudzone, buduje pewność siebie u lękliwych i daje radość każdemu psu.",
      items: [
        { name: "Pojedyncze zajęcia", price: "70 zł" },
        { name: "Pakiet 4 zajęć", price: "240 zł" }
      ]
    },
    {
      id: "tropienie",
      photo: "assets/gallery/9.webp",
      icon: "trail",
      title: "Tropienie",
      collab: "Loweredogz",
      for: "Dla psów, które lubią pracować nosem",
      text: "Pies podąża za śladem zapachowym, a Ty uczysz się czytać jego sygnały. Zajęcia w terenie, na świeżym powietrzu, wzmacniają współpracę i koncentrację.",
      items: [
        { name: "Pierwsze zajęcia", price: "70 zł" },
        { name: "Pojedyncze zajęcia", price: "100 zł" },
        { name: "Pakiet 5 zajęć", price: "400 zł" }
      ]
    }
  ],

  about: {
    title: "Poznaj nasz <mark>zespół</mark>",
    // zdjęcia: wrzuć pliki do assets/team/ (nina.webp, ania.webp, monika.webp), najlepiej pionowe 4:5
    team: [
      { name: "Nina", photo: "assets/team/nina.webp" },
      { name: "Ania", photo: "assets/team/ania.webp" }
    ],
    // wspólna karta Niny i Ani: jeden opis i jedna lista specjalizacji
    duo: {
      title: "Nina & Ania",
      photo: "assets/team/nina-ania.webp", // wspólne zdjęcie, najlepiej poziome 16:9
      role: "Trenerki, Axisflow",
      instagram: "https://www.instagram.com/axisflow.szkoleniepsow/",
      handle: "@axisflow.szkoleniepsow",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      tags: ["Konsultacja behawioralna", "Trening indywidualny", "Bitework", "Zajęcia grupowe"]
    },
    // współpracownik spoza zespołu: pokazywany pod Niną i Anią, w fioletowych akcentach
    partner: {
      name: "Monika",
      photo: "assets/team/monika.webp",
      role: "Trenerka, Loweredogz",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      tags: ["Nosework", "Tropienie"],
      instagram: "https://www.instagram.com/loweredogz/",
      handle: "@loweredogz"
    }
  },

  // zdjęcie przy opinii: photo (plik w assets/), pos = kadrowanie (np. "center 30%")
  // opinie skopiowane z Google (wizytówka "AxisFlow Szkolenie Psów"); aktualizuj ręcznie
  reviewsMeta: {
    rating: "5,0",
    count: 10,
    url: "https://www.google.com/maps/place/AxisFlow+Szkolenie+Ps%C3%B3w/@51.2684188,16.7196032,13z/data=!4m8!3m7!1s0x6b697a5c3cba68fd:0x1358fc2135da2eef!8m2!3d51.2684188!4d16.7196032!9m1!1b1!16s%2Fg%2F11zyxbb6d3"
  },

  reviews: [
    { text: "Trafiłam na szkolenie z powodu ciągnięcia na smyczy, szczekania na inne psy oraz dużych emocji i nadpobudliwości. Od samego początku ujęło mnie spokojne, pozbawione presji podejście behawiorystek. Wszystko było dokładnie tłumaczone — nie tylko co robić, ale przede wszystkim dlaczego, z dużym naciskiem na emocje psa i pracę małymi krokami.\n\nJako opiekunka dostałam jasne instrukcje, zero oceniania i realne wsparcie także między spotkaniami. Behawiorystki wykazują się ogromną cierpliwością, uważnością na sygnały psa, dużą wiedzą i bardzo indywidualnym podejściem.\n\nDzięki temu szkoleniu lepiej rozumiem swojego psa, czuję więcej spokoju i zdecydowanie mniej frustracji. To mądra, empatyczna praca, która realnie poprawia codzienne funkcjonowanie. Z całego serca polecam szczególnie opiekunkom psów reaktywnych.", who: "Wiktoria J.", dog: "🐶 Nel", alt: "Smukły biały pies Nel idzie na smyczy po parkowej alejce i patrzy w górę na opiekunkę", photo: "assets/reviews/1.webp", pos: "center 46%" },
    { text: "Z całego serca polecam zajęcia u dziewczyn! 🐾 Chodzę z moim psem już od pół roku – zarówno na treningi indywidualne, jak i spacery socjalizacyjne – i widzę ogromne postępy. Podejście do psów jest pełne cierpliwości, zrozumienia i przede wszystkim szacunku do ich potrzeb.\n\nZajęcia są świetnie prowadzone, zawsze w przyjaznej atmosferze, a wskazówki są konkretne i łatwe do wprowadzenia w codziennym życiu. Spacery socjalizacyjne to strzał w dziesiątkę – pies uczy się prawidłowych zachowań wśród innych psów, a ja nabieram pewności jako opiekun.\n\nJeśli ktoś szuka profesjonalnego wsparcia i jednocześnie ciepłej, ludzkiej atmosfery – naprawdę warto! 🐶💛", who: "Katarzyna M.", dog: "🐶 Budyń", alt: "Rudy pudel Budyń w czerwonych szelkach leży na posłaniu i wystawia język", photo: "assets/reviews/2.webp", pos: "center 8%" },
    { text: "Bardzo polecam !\nPo kilku nieudanych próbach szukania pomocy trafiliśmy wraz z Brunem na Anie i Nine. Dziewczyny miały nie lada wyzwanie z mocno lękliwym i charakternym 5 letnim Belgiem, który bardzo często nie potrafił sobie poradzić z opanowaniem emocji i trudno skupić jego uwagę zwłaszcza w otoczeniu wielu rozpraszających bodźców. Chodzenie na smyczy nie należała do najłatwiejszych wyzwań. 🫣 ale ich indywidualne podejście, cierpliwość oraz troska doprowadziły, że spacery to teraz przyjemność ❤️\nPomoc o każdej porze, ogromna wiedza i troska jak o pupila tak i o właściciela, bo jak wiadomo to nie tylko o psa chodzi, ale także o przewodnika 😉\nZ całego serca wraz z Brunem polecamy i czekamy na kolejne spotkania", who: "Sylwia P.", dog: "🐶 Bruno", alt: "Brązowo-czarny pies Bruno siedzi na trawie z otwartym pyskiem", photo: "assets/reviews/3.webp", pos: "center 25%" },
    { text: "Polecam, świetne trenerki, zajęcia dostosowane do indywidualnych potrzeb piesków zarówno uczestniczyłyśmy z Figą na spacerach socjalizacyjnych w ciekawych miejscach oraz super atmosferze jak i indywidualnych zajęciach gdzie uczymy się z Figą zarówno ćwiczeń tłumaczonych przez Anię i Ninę jak i zrozumienia i lepszego poznania się ze swoim pieskiem - zrozumienia potrzeb 😊. Efekty było widać już po pierwszych zajęciach 😊. Jeszcze dużo pracy przed nami ale zawsze możemy liczyć na pomoc i cierpliwość jeśli czegoś nie rozumiemy bądź idzie słabiej. Jeszcze raz polecam 🫶😊", who: "Oliwia R.", dog: "🐶 Figa", alt: "Czarno-biały border collie Figa siedzi na brzegu jeziora, w tle niebo z chmurami", photo: "assets/reviews/4.webp", pos: "center 90%", flat: true },
    { text: "Dziewczyny są niesamowite 💗\n\nMamy dość wymagającą rasę - cocker spaniel, dziewczyny cudownie prowadzą nas od kilku miesięcy. Perfekcyjnie planują zajęcia i dostosowują to aktualnego poziomu postępu Abi ☺️\n\nCo najważniejsze widać naprawdę duży postęp ☺️\n\nPolecam serdeczne z całego serca naprawdę!", who: "Ola R.", dog: "🐶 Abi", alt: "Cocker spaniel Abi leży na sztucznej trawie i patrzy w obiektyw", photo: "assets/reviews/5.webp", pos: "center 40%" },
    { text: "Cudowne, z prawdziwym podejściem do psa jak i do człowieka. Pokazują jak przyjemny może być spacer z psim przyjacielem i jak łatwiej się dogadywać.\nOgromnie polecamy 🥰", who: "Edyta K.", dog: "🐶 Roki", alt: "Brązowy pies Roki w obroży leży na parkowej alejce wśród drzew", photo: "assets/reviews/6.webp", pos: "center 40%" }
  ],

  // opisy zdjęć w galerii dla czytników ekranu (kolejność jak assets/gallery/1.webp ... 13.webp). Opisz, co widać na zdjęciu.
  gallery: [
    "Dwa psy, corgi i yorkshire terrier, biegną razem drogą w świetle zachodzącego słońca",
    "Corgi i yorkshire terrier biegną ścieżką wśród wysokich traw, z wywieszonymi językami",
    "Młody golden retriever siedzi na kamiennej ścieżce z żółtym tulipanem w pysku",
    "Biały, kudłaty piesek biegnie radośnie po trawie z rozwianymi uszami",
    "Czarno-biały border collie z otwartym pyskiem patrzy w górę",
    "Szczeniak owczarka australijskiego z jednym niebieskim okiem leży na ziemi i patrzy w obiektyw",
    "Border collie biegnie po zielonej trawie z kolorową piłką w pysku",
    "Mężczyzna w lesie w blasku zachodzącego słońca głaszcze siedzącego przed nim czarnego labradora",
    "Osoba w czapce siedzi na pniu nad jeziorem, obok stoi brązowy pies",
    "Kobieta w kombinezonie stoi w sosnowym lesie, obok niej czarny pies",
    "Mężczyzna siedzi na skałach nad rzeką i trzyma na kolanach czarnego psa",
    "Pies z wywieszonym językiem siedzi w jesiennym lesie obok osoby w dżinsowej kurtce",
    "Uśmiechnięta kobieta siedzi w jesiennym lesie obok rudo-białego psa"
  ],

  faq: [
    { q: "Od kiedy można zacząć szkolenie?", a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { q: "Czy mój pies musi być zaszczepiony?", a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
    { q: "Jak odwołać lub przełożyć zajęcia?", a: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { q: "Jakich metod używacie?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { q: "Czy możecie zagwarantować efekty?", a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
    { q: "Jak się zapisać?", a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." }
  ]
};
