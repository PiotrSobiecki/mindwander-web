import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

const faqItems = [
  {
    question: "Jak mogę zamówić usługę przez DOMIDO?",
    answer:
      "Zamówienie usługi jest proste: pobierz aplikację DOMIDO, zarejestruj się, wybierz rodzaj usługi, preferowany termin oraz fachowca z dostępnej listy. Po zaakceptowaniu kosztów usługa zostanie zamówiona, a Ty otrzymasz powiadomienie o statusie zlecenia.",
  },
  {
    question: "Czy fachowcy w DOMIDO są sprawdzeni?",
    answer:
      "Tak, wszyscy fachowcy przechodzą proces weryfikacji, który obejmuje sprawdzenie dokumentów tożsamości, historii zatrudnienia oraz referencji. Dodatkowo, system ocen i opinii pozwala monitorować jakość świadczonych usług.",
  },
  {
    question: "Co jeśli nie będę zadowolony z usługi?",
    answer:
      "W DOMIDO oferujemy gwarancję satysfakcji. Jeśli nie jesteś zadowolony z jakości wykonanej usługi, zgłoś to nam w ciągu 48 godzin. Postaramy się rozwiązać problem albo zaoferować ponowne wykonanie usługi lub zwrot pieniędzy.",
  },
  {
    question: "Czy mogę anulować zamówioną usługę?",
    answer:
      "Tak, usługę można anulować bezpłatnie do 24 godzin przed planowanym terminem realizacji. Anulowanie w krótszym czasie może wiązać się z opłatą w wysokości 30% wartości zamówienia.",
  },
  {
    question: "Jakie usługi mogę zamówić przez DOMIDO?",
    answer:
      "DOMIDO oferuje szeroki zakres usług domowych, w tym: sprzątanie mieszkań i domów, naprawy hydrauliczne, naprawy elektryczne, montaż mebli, usługi ogrodnicze, odśnieżanie, naprawy i konserwacje AGD, malowanie, gładzie oraz wiele innych.",
  },
  {
    question: "Jak wygląda proces płatności?",
    answer:
      "Płatność za usługi można dokonać bezpośrednio przez aplikację za pomocą karty płatniczej, BLIK-a lub szybkiego przelewu. Możliwa jest również płatność w systemie post-paid po wykonaniu usługi. Wszystkie transakcje są bezpieczne i szyfrowane.",
  },
  {
    question: "Czy DOMIDO jest dostępne w moim mieście?",
    answer:
      "Aktualnie DOMIDO działa w największych miastach Polski, w tym: Warszawa, Kraków, Łódź, Wrocław, Poznań, Gdańsk, Szczecin, Bydgoszcz, Lublin i Katowice. Systematycznie rozszerzamy obszar działania - sprawdź dostępność w aplikacji.",
  },
  {
    question: "Jak zostać fachowcem w DOMIDO?",
    answer:
      "Jeśli posiadasz umiejętności i doświadczenie w świadczeniu usług domowych, możesz dołączyć do platformy jako fachowiec. Wystarczy wypełnić formularz na naszej stronie, przejść proces weryfikacji oraz szkolenie z obsługi aplikacji. Po pozytywnej weryfikacji będziesz mógł przyjmować zlecenia.",
  },
];

export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-white" id="faq">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Często zadawane pytania
          </h2>
          <p className="text-lg text-gray-700">
            Znajdź odpowiedzi na najczęstsze pytania dotyczące platformy DOMIDO
            i procesu zamawiania usług.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-5 py-4 hover:no-underline hover:bg-gray-50">
                  <span className="text-left font-medium text-base md:text-lg">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-2 text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </p>
            <button className="bg-primary text-white rounded-xl py-3 px-6 font-medium hover:bg-primary/90 transition-colors">
              Skontaktuj się z nami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
