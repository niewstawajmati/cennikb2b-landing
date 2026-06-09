# Prompt dla Claude Design — CennikB2B v2

Wklej ten prompt do Claude Design razem z obecnym plikiem `index.html` (lub `index_v2.html` jako punkt startowy).

---

## Kontekst

Strona CennikB2B (one-pager) prezentuje usługę automatyzacji sprzedaży B2B dla firm produkcyjnych. Dotychczas strona opisywała jeden produkt — Generator Cenników. Teraz chcemy pokazać cały ciąg czterech produktów/etapów, które można wdrażać kolejno lub wybiórczo.

**Paleta kolorów (nie zmieniaj):**
- Granat: `#0F2040`
- Pomarańcz/żółty (akcent): `#F97316`
- Beżowy: `#F2F4F7`
- Białe tło sekcji: `#ffffff`
- Tekst muted: `#6B7280`

**Fonty (nie zmieniaj):** Inter (sans-serif), Lora (serif)

---

## Co chcemy osiągnąć

Dodaj do strony sekcję **"Cztery etapy automatyzacji sprzedaży B2B"** (id="produkty"), która prezentuje cztery produkty w układzie 2×2 (desktop) lub 1 kolumna (mobile). Sekcja powinna pojawić się wczesnie — zaraz po sekcji hero lub zaraz po sekcji z problemami (#problem).

---

## Treść do wstawienia — cztery karty produktów

### Karta 01 — Generator Cenników
**Status:** Dostępny (zielony badge)
**Tytuł:** Generator Cenników
**JTBD:** Spersonalizowany cennik B2B dla każdego klienta w 15 minut — bez grafika, bez Excela, bez czekania tygodniami.
**Problemy które rozwiązuje:**
- ✗ Zmiana cen = tygodnie czekania i kolejne zlecenie do grafika
- ✗ Każdy klient ma inne warunki — ręczne dostosowywanie przy każdej ofercie
- ✗ Klient dostaje standardowy cennik z dopiskiem "tu odjąć 5%"

**Rozwijana sekcja "Idealny dla Ciebie, jeśli…":**
- Firma produkcyjna lub dystrybucyjna z katalogiem do ~1000 SKU
- Kilku lub więcej klientów B2B z różnymi rabatami i warunkami
- Handlowiec traci czas na przygotowywanie ofert zamiast sprzedawać
- Koszty wytworzenia zmieniają się kilka razy w roku

**Rozwijana sekcja "Co musisz mieć gotowe":**
- Dane produktów w ERP, Sheets lub CSV (powiemy Ci, jakiej dokładnie struktury)
- Szkic lub gotowy layout cennika — lub zamawiasz projekt graficzny u nas

**Cena:** od 9 900 PLN
**CTA:** "Zobacz demo →" linkuje do #katalog

---

### Karta 02 — Generator Wycen
**Status:** Dostępny (zielony badge)
**Tytuł:** Generator Wycen
**JTBD:** Gotowa wycena custom dla klienta w 10 minut — z naturalnej rozmowy z AI, nie z godzin w Excelu.
**Problemy które rozwiązuje:**
- ✗ Każde zapytanie inne — handlowiec wycenia od zera za każdym razem
- ✗ Brak standardu: każda oferta wygląda inaczej, marże liczone ręcznie
- ✗ Klient czeka kilka dni — przez ten czas pyta konkurencję

**Rozwijana sekcja "Idealny dla Ciebie, jeśli…":**
- Każde zamówienie jest unikalne — nie masz stałego cennika bazowego dla klientów
- Handlowiec traci 2+ godziny na przygotowanie jednej wyceny
- Marże i warunki są negocjowane indywidualnie przy każdym zapytaniu

**Rozwijana sekcja "Co musisz mieć gotowe":**
- Cennik bazowy lub koszty TKW w arkuszu kalkulacyjnym
- Zasady marżowania i rabatowania (lub gotowość ich opisania z nami)

**Cena:** Wycena indywidualna
**CTA:** "Zobacz demo →" linkuje do #demo-wycen

---

### Karta 03 — Integracja CRM
**Status:** Wkrótce (żółty/bursztynowy badge, karta przyciemniona opacity ~0.6)
**Tytuł:** Integracja CRM
**JTBD:** Dane klienta z CRM zaciągają się do wyceny automatycznie — zero szukania historii przed każdą rozmową.
**Problemy które rozwiązuje:**
- ✗ Handlowiec szuka historii zamówień w mailach przed każdą rozmową
- ✗ Wyceny bez kontekstu — bez wiedzy o poprzednich warunkach klienta
- ✗ CRM i narzędzia do ofertowania to dwa osobne światy

**Informacja:** "W trakcie budowy. Daj nam znać, że Cię to interesuje — dostaniesz dostęp jako pierwszy."
**CTA:** "Daj mi znać →" linkuje do #kontakt

---

### Karta 04 — Integracja ERP
**Status:** Wkrótce (żółty/bursztynowy badge, karta przyciemniona)
**Tytuł:** Integracja ERP
**JTBD:** Zaakceptowana oferta trafia prosto do produkcji — bez przepisywania między systemami, bez opóźnień.
**Problemy które rozwiązuje:**
- ✗ Przyjęte zamówienie przepisywane ręcznie do ERP — ryzyko błędu i opóźnienie
- ✗ Gap między "klient zapłacił" a "idziemy do produkcji"
- ✗ Każde zamówienie wymaga interwencji człowieka w kilku systemach

**Informacja:** "W trakcie budowy. Daj nam znać, że Cię to interesuje — dostaniesz dostęp jako pierwszy."
**CTA:** "Daj mi znać →" linkuje do #kontakt

---

## Dodatkowe zmiany do wprowadzenia

### 1. Hero section
- **Tag line** (mały tekst nad headline): zmień z "Dedykowany cennik dla każdego klienta. W około 15 minut." na "Automatyzacja sprzedaży B2B — od cennika do zamówienia."
- **Trzeci headline w slajderze**: zmień z obecnego (o 15 minutach) na: "Klient pyta o wycenę. Twój handlowiec ma ją gotową w 10 minut."
- **Subtitle pod CTA**: zmień na "Generuj spersonalizowane cenniki i wyceny B2B automatycznie — klient dostaje gotowy dokument w minutach, nie dniach."
- **Nawigacja**: dodaj link "Produkty" → #produkty obok przycisku "Kontakt"

### 2. Sekcja "Dla kogo" (#dla-kogo)
- Zmień tytuł z "Czy CennikB2B jest dla Ciebie?" na "Generator Cenników — czy to dla Ciebie?"
- Dodaj na końcu listy "To NIE jest dla Ciebie": punkt "Każde zamówienie jest w pełni unikalne i nie masz stałego katalogu — w takim przypadku sprawdź Generator Wycen (etap 02)"

### 3. Sekcja "Jak to działa" (#jak-dziala)
- Zmień tytuł z "Jak to działa? — kroki" na "Jak działa Generator Cenników?"

### 4. Sekcja "Katalog preview" (#katalog)
- Zmień tytuł z "Zobacz przykładowy katalog" na "Generator Cenników — przykładowy katalog"

### 5. Nowa sekcja — demo Generatora Wycen
Dodaj nową sekcję z id="demo-wycen" zaraz **po** sekcji #katalog (ta sekcja ma ciemne tło, kontynuuj tło ciemne).

Treść:
- Tytuł: "Generator Wycen — zobacz jak działa"
- Subtitle: "Handlowiec prowadzi naturalną rozmowę z AI. System generuje gotową wycenę z cenami, marżami i historią klienta — w 10 minut."
- Placeholder na embed Loom (prostokąt z obramowaniem przerywany, min-height 360px, z ikoną play i tekstem "[ Tu pojawi się Loom demo Generatora Wycen ]")
- Przycisk: "Umów demo na żywo →" → calendly link

### 6. FAQ — dodaj nowe pytanie (jako pierwsze)
**Pytanie:** Czym różni się Generator Cenników od Generatora Wycen?
**Odpowiedź:** Oba narzędzia przyspieszają ofertowanie, ale rozwiązują różne problemy. Generator Cenników sprawdza się, gdy masz stosunkowo stały katalog produktów i wielu klientów B2B z różnymi rabatami — generujesz dla każdego jego własny, wizualny cennik ze wszystkimi produktami i indywidualnymi cenami. Generator Wycen odpowiada na zapytania custom — kiedy klient prosi o konkretne zamówienie, handlowiec prowadzi rozmowę z AI i dostaje gotową wycenę HTML z pozycjami, cenami i wyliczonymi marżami. Możesz wdrożyć jedno lub oba — patrz sekcja "Cztery etapy" na początku strony.

### 7. FAQ — zaktualizuj odpowiedź "Co po cenniku?"
Zmień odpowiedź na: "Generator Cenników i Generator Wycen to pierwsze dwa etapy z planowanego ciągu czterech automatyzacji — kolejne to Integracja CRM i Integracja ERP. Możesz zacząć od jednego etapu i dokładać kolejne, kiedy jesteś gotowy. W ramach samego Generatora Cenników możliwe rozszerzenia to: dodatkowa wersja językowa (jedna w cenie), nowy layout po rebrandingu, karty produktów."

---

## Co zachować bez zmian

- Cały design system (kolory, fonty, spacing, sekcje z dividerami)
- Sekcja #problem (problemy biznesowe) — bez zmian
- Sekcja #porownanie (before/after tabela) — bez zmian
- Sekcja #cennik (tabela kosztów i pakiety cenowe) — bez zmian
- Sekcja #opinie (testimonials) — bez zmian
- Sekcja #mta-group — bez zmian
- Sekcja #kontakt (formularz + telefon + Calendly) — bez zmian
- Footer — bez zmian
- Wszystkie CTA linki (Calendly, telefon)

---

## Priorytet wizualny dla kart produktów

Karty P1 i P2 (dostępne) powinny wyraźnie wyróżniać się od P3 i P4 (wkrótce). Sugestia: karty "wkrótce" ze zmniejszoną opacity lub efektem blur/szarości. Karty "dostępne" z wyraźnym cieniem i pełnym kolorem.

Liczba 01/02/03/04 na każdej karcie powinna być duża i widoczna (akcent żółty `#F97316`), żeby wizualnie kommunikować "jesteś na etapie X z 4".

Rozwijane sekcje ("Idealny jeśli..." i "Co musisz mieć") — użyj HTML `<details>/<summary>` lub podobnego accordion patternu.
