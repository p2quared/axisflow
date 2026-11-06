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
    lead: "AxisFlow to szkoła dla psów we Wrocławiu i Brzegu Dolnym. Wspieramy rozwój psa i przewodnika, pomagamy w problemach behawioralnych."
  },

  // gdzie odbywają się zajęcia: box pod ofertą z mapką. tone: green = Axisflow, purple = Loweredogz
  where: {
    title: "Gdzie trenujemy<span class=\"q\">?</span>",
    points: [
      { name: "Brzeg Dolny", lat: 51.2689, lng: 16.7219, tone: "green" },
      { name: "Wrocław", lat: 51.1079, lng: 17.0385, tone: "green" }
    ],
    paragraphs: [
      "Zajęcia prowadzone są głównie w Brzegu Dolnym, ale także we Wrocławiu. Nina i Ania mogą również przyjechać do Ciebie do domu na konsultację lub trening w innych okolicach.",
      "Nosework z Moniką odbywa się w sali w Brzegu Dolnym, a tropienie w terenie, w różnych miejscach na terenie Wrocławia i okolic."
    ]
  },

  steps: [
    { icon: "phone", title: "Kontakt", text: "Napisz lub zadzwoń i opowiedz nam o swoim psie: dokąd chcecie dojść - rozwój umiejętności, poprawa relacji albo wsparcie w trudnej sytuacji. Razem ustalimy termin konsultacji." },
    { icon: "paw", title: "Pierwsze spotkanie", text: "Konsultacja behawioralna to pierwszy etap. Zaczynamy od ankiety, a na spotkaniu poznajemy Ciebie i psa, analizujemy trudności i cele oraz ustalamy kierunek dalszej pracy. Już na konsultacji wprowadzamy pierwsze ćwiczenia i wskazówki. Po spotkaniu dostajesz podsumowanie z zaleceniami." },
    { icon: "trophy", title: "Trening i efekty", text: "Na podstawie konsultacji wybieramy formę pracy: trening indywidualny, grupowy lub dodatkowe zajęcia. Trenujemy regularnie, oceniamy postępy psa i przewodnika i dbamy o to, by efekty przekładały się na codzienne sytuacje." }
  ],

  services: [
    {
      id: "konsultacja",
      icon: "chat",
      title: "Konsultacja behawioralna",
      for: "Na start i przy trudnych zachowaniach",
      text: "Konsultacja behawioralna to punkt wyjścia do świadomej pracy z psem. Przeprowadzamy wywiad, obserwujemy psa i analizujemy jego temperament, motywację oraz genetyczne uwarunkowania zachowania. Na tej podstawie ustalamy kierunek pracy dopasowany do Waszych celów - zarówno gdy chcecie zaplanować rozwój psa, jak i gdy mierzycie się z lękiem, reaktywnością czy agresją. Po spotkaniu dostajecie podsumowanie i plan działania.",
      items: [
        { name: "Konsultacja behawioralna", price: "200 zł" }
      ]
    },
    {
      id: "trening",
      icon: "dog",
      title: "Trening indywidualny",
      for: "Dla psów w każdym wieku",
      text: "Trening indywidualny to praca 1:1 nad Waszymi celami: od posłuszeństwa i przywołania, przez chodzenie na smyczy i kontrolę emocji, po umiejętności sportowe. Pracujemy w oparciu o zbalansowane metody, etologię i kwadrat wzmocnień, dobierając je do temperamentu, motywacji i poziomu zaawansowania psa. Przewodnika uczymy samodzielnej pracy na co dzień. Zajęcia odbywają się w sali szkoleniowej w Brzegu Dolnym i w terenie.",
      items: [
        { name: "Pojedyncze zajęcia", price: "100 zł" },
        { name: "Pakiet 8 zajęć", price: "750 zł" }
      ]
    },
    {
      id: "bitework",
      icon: "tug",
      title: "Bitework",
      for: "Dla psów sportowych i pracujących",
      text: "Bitework to praca oparta na popędzie psa, znana z dyscyplin sportowych. Rozwija koncentrację, pewność siebie i kontrolę emocji i impulsów w warunkach wysokiego pobudzenia.",
      items: [
        { name: "Pojedyncze zajęcia", price: "100 zł" }
      ]
    },
    {
      id: "duo",
      icon: "group",
      title: "Axisflow DUO",
      for: "Dla psów i ich opiekunów",
      text: "AxisFlow DUO to kameralny kurs posłuszeństwa w rotacyjnych parach. Pies uczy się współpracować z przewodnikiem w obecności różnych psów, rozwijając koncentrację, komunikację i umiejętność pracy w rozproszeniach. Kurs obejmuje 8 treningów, elastyczny wybór terminów i maksymalnie dwie osoby na jednym spotkaniu.",
      items: [
        { name: "Kurs grupowy", price: "700 zł" }
      ]
    },
    {
      id: "spacer",
      icon: "dog",
      title: "Spacer socjalizacyjny",
      for: "Dla psów, które uczą się spokoju wśród innych psów",
      text: "Spacery socjalizacyjne to okazja do wspólnego spacerowania, poznawania nowych psów i pracy nad spokojnym funkcjonowaniem w ich obecności. Dołącz do naszej grupy na WhatsApp, gdzie regularnie proponujemy terminy i miejsca spacerów w Brzegu Dolnym i okolicach.",
      items: [
        { name: "Spacer socjalizacyjny", price: "70 zł" }
      ]
    },
    {
      id: "nosework",
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
    // każda trenerka ma własną kartę; instagram Axisflow jest wspólny
    team: [
      {
        name: "Nina",
        photo: "assets/team/nina.webp",
        role: "Trenerka, Axisflow",
        instagram: "https://www.instagram.com/axisflow.szkoleniepsow/",
        handle: "@axisflow.szkoleniepsow",
        bio: "Nina szczególną uwagę poświęca pracy z małymi psami, pokazując, że ich rozmiar nie ogranicza możliwości treningowych. Zajmuje się również posłuszeństwem i rozwijaniem umiejętności psów w codziennym życiu.",
        tags: ["Konsultacje", "Trening", "Axisflow DUO"]
      },
      {
        name: "Ania",
        photo: "assets/team/ania.webp",
        role: "Trenerka, Axisflow",
        instagram: "https://www.instagram.com/axisflow.szkoleniepsow/",
        handle: "@axisflow.szkoleniepsow",
        bio: "Ania specjalizuje się w pracy z problemami behawioralnymi, w tym zachowaniami lękowymi i agresywnymi. Dużą uwagę poświęca budowaniu motywacji, pewności siebie i samodzielności psa. Prowadzi również treningi bitework.",
        tags: ["Konsultacje", "Trening", "Bitework", "Axisflow DUO"]
      }
    ],
    // współpracownik spoza zespołu: pokazywana obok Niny i Ani, w fioletowych akcentach
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

  // opisy zdjęć w galerii dla czytników ekranu (kolejność jak assets/galeria/z01.webp ... z13.webp). Opisz, co widać na zdjęciu.
  gallery: [
    "Trenerka w żółtej bluzie i czapce klęczy na trawie i przytula białego psa",
    "Kobieta w czapce prowadzi psa na smyczy po łące, w tle drzewa bez liści",
    "Collie siedzi na drewnianym mostku z białą balustradą, w tle drzewa",
    "Czarno-biały border collie w szelkach patrzy w bok, obok nogi opiekuna ze smyczą",
    "Pies patrzy w górę, stojąc na trawie między nogami opiekuna w kamizelce",
    "Border collie leży na betonowej posadzce w sali treningowej, w tle ułożone podesty",
    "Mały pies gryzie pomarańczowy włochaty gryzak na sztucznej trawie",
    "Pies w typie owczarka belgijskiego z żółtą piłką w pysku, w pomieszczeniu z zieloną zasłoną",
    "Biały pies leży na szarym podeście na żwirowej drodze, w tle biały mur",
    "Dwa psy siedzą na brukowanym chodniku i patrzą w górę, jeden na czerwonej smyczy",
    "Dwie osoby stoją na trawie w parku, przed nimi leży pies",
    "Kobieta w zielonej bluzie stoi z czarno-brązowym psem na bulwarze nad rzeką, w tle wieża kościoła i dachy miasta",
    "Dwa jamniki na trawie obwąchują się, jeden na różowej smyczy"
  ],

  faq: [
    { q: "Czy muszę mieć problem z psem, żeby przyjść na trening?", a: "Nie. W AxisFlow nie tylko pomagamy rozwiązywać problemy, ale też pracujemy z duetami, które chcą się rozwijać: pogłębiać relację, uczyć się nowych umiejętności i wchodzić na kolejny poziom. Rozwój psa i rozwój przewodnika to cel treningu, a nie tylko odpowiedź na trudności." },
    { q: "Od jakiego wieku psa możemy zacząć?", a: "Pracujemy zarówno ze szczeniętami posiadającymi szczepienia, jak i psami dorosłymi. Świadome budowanie relacji od początku procentuje, ale na rozwój nie ma złego momentu. Pracujemy z psami na każdym etapie i z przewodnikami na każdym poziomie." },
    { q: "Jakie metody stosujecie?", a: "Pracujemy metodami zbalansowanymi: łączymy nagradzanie pożądanych zachowań z jasnymi, konsekwentnie komunikowanymi granicami. Metody dobieramy do konkretnego psa, jego temperamentu i możliwości przewodnika, bo nie ma jednego schematu." },
    { q: "Jak wygląda pierwsze spotkanie?", a: "Zaczynamy od rozmowy i obserwacji: poznajemy psa, jego historię, temperament, motywację i Wasz sposób komunikacji. Na tej podstawie wspólnie wyznaczamy cele i plan pracy. Czas trwania to około 1,5 - 2h." },
    { q: "Ile spotkań będzie potrzebnych?", a: "To zależy od celu, psa i regularności pracy w domu. Nie obiecujemy efektów po jednym spotkaniu, bo rozwój to proces. Po pierwszym spotkaniu powiemy, jak widzimy współpracę z Wami." },
    { q: "Czy pracujecie z psami lękowymi i agresywnymi?", a: "Tak. Pracujemy z psami lękowymi, reaktywnymi i z agresją. Zaczynamy od konsultacji behawioralnej i oceny bezpieczeństwa, potem budujemy plan treningowy dopasowany do psa i Waszej sytuacji. Nie obiecujemy rezultatu w określonym czasie, obiecujemy uczciwy obraz sytuacji i konkretny plan." },
    { q: "Czy przed treningiem warto skonsultować się z weterynarzem?", a: "Przy nagłej zmianie zachowania, lęku, reaktywności czy agresji zalecamy badanie weterynaryjne, bo ból i choroby mogą wpływać na zachowanie psa." },
    { q: "Trening indywidualny czy zajęcia grupowe - co wybrać?", a: "Zajęcia grupowe uczą pracy wśród innych psów i ludzi i sprawdzają się u psów, które dobrze funkcjonują w grupie. Trening indywidualny to praca 1:1 nad Waszymi celami, lepsza przy bardzo konkretnym celu, wymagającym temperamencie lub trudnym zachowaniu. Nie wiesz, co wybrać? Odezwij się, a doradzimy." },
    { q: "Czy pracujecie z małymi psami?", a: "Tak, i traktujemy je poważnie. Małe psy mają takie same potrzeby uczenia się, kontroli emocji i budowania relacji jak duże." },
    { q: "Co zabrać na pierwszy trening?", a: "Smycz, obrożę, nagrody, które pies lubi (jedzenie, zabawkę) i wodę." },
    { q: "Jak umówić się na trening i jak go odwołać?", a: "Napisz lub zadzwoń. Wspólnie wybierzemy formę i termin. Odwołać zajęcia można najpóźniej 24h przed planowanymi zajęciami." },
    { q: "Czy dojeżdżacie do domu klienta?", a: "Tak, jest możliwość konsultacji / treningu w domu klienta. Do ceny zajęć doliczany jest wtedy koszt dojazdu." }
  ]
};
