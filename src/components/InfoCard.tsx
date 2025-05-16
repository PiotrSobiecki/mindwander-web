import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function InfoCard() {
  return (
    <div className="max-w-4xl mx-auto my-20">
      <div className="bg-gradient-to-r from-[#d0ebff] to-[#a5d8ff] rounded-lg p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-block bg-[#1c7ed6] text-white text-xs font-semibold px-2.5 py-1 rounded mb-2">
              BETA
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Dołącz do programu beta dla rozszerzenia
            </h2>
            <p className="text-gray-700">
              Pomóż nam testować i udoskonalać MindWander. Napisz do nas, aby
              uzyskać dostęp do wersji testowej.
            </p>
          </div>
          <div className="flex-shrink-0">
            <a
              href="mailto:info@mind-wander.org"
              className="bg-white text-[#1c7ed6] hover:bg-[#d0ebff] px-5 py-3 rounded-md font-medium flex items-center group transition-colors"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              info@mind-wander.org
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
