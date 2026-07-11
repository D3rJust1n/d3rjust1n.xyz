import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';

const FilterableMice = ({ mice = [] }) => {
  const [selectedGrip, setselectedGrip] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const grip = useMemo(() => {
    return [...new Set(mice.map((mouse) => mouse.grip))].filter(Boolean).sort();
  }, [mice]);

  const priceRanges = useMemo(() => {
    const unique = [...new Set(mice.map((kb) => kb.price))].filter(Boolean);
    const getLowerBound = (price) => {
      const match = price.match(/\d+/);
      return match ? parseInt(match[0], 10) : Infinity;
    };
    return unique.sort((a, b) => getLowerBound(a) - getLowerBound(b));
  }, [mice]);

  const gripLabels = {
    claw: 'Claw',
    palm: 'Palm',
    fingertip: 'Fingertip',
  };

  const toggleFilter = (setter, value, currentArray) => {
    if (currentArray.includes(value)) {
      setter(currentArray.filter((item) => item !== value));
    } else {
      setter([...currentArray, value]);
    }
  };

  const clearAllFilters = () => {
    setselectedGrip([]);
    setSelectedPrice([]);
    setSearchTerm('');
  };

  const filteredMice = useMemo(() => {
    return mice.filter((mouse) => {
      const matchesGrip =
        selectedGrip.length === 0 || selectedGrip.includes(mouse.grip);
      const matchesPrice =
        selectedPrice.length === 0 || selectedPrice.includes(mouse.price);
      const matchesSearch =
        searchTerm === '' ||
        mouse.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        mouse.brand.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesGrip && matchesPrice && matchesSearch;
    });
  }, [mice, selectedGrip, selectedPrice, searchTerm]);

  const activeFilterCount = selectedGrip.length + selectedPrice.length;

  if (mice.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <div className="max-w-7xl mx-auto text-center py-12">
          <p className="text-slate-500 text-lg">Keine Maus-Daten gefunden</p>
          <p className="text-slate-400 text-sm mt-2">
            Bitte übergebe die Mice-Daten als Props
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Search Bar */}
      <div className="mb-6 relative">
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Suche nach Name oder Hersteller..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border opacity-80 focus:opacity-100 focus:ring-2 outline-none transition-all bg-transparent text-white"
          style={{ borderColor: 'var(--border-color, #e2e8f0)' }}
        />
      </div>

      {/* Filter Section */}
      <div
        className="rounded-xl p-6 mb-6 border"
        style={{
          backgroundColor: 'var(--card-bg, rgba(255,255,255,0.05))',
          borderColor: 'var(--border-color, rgba(255,255,255,0.1))',
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-lg font-semibold">Filter</h1>
          {activeFilterCount > 0 && (
            <button
              onClick={clearAllFilters}
              className="flex items-center gap-2 text-sm opacity-60 hover:opacity-100 hover:text-red-600 text-red-600 transition-colors"
            >
              <X size={16} />
              Alle zurücksetzen ({activeFilterCount})
            </button>
          )}
        </div>

        {/* Grip Filter */}
        {grip.length > 0 && (
          <div className="mb-4">
            <h1 className="text-sm font-medium opacity-70 mb-2">Grip</h1>
            <div className="flex flex-wrap gap-2">
              {grip.map((grip) => (
                <button
                  key={grip}
                  onClick={() =>
                    toggleFilter(setselectedGrip, grip, selectedGrip)
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedGrip.includes(grip)
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-300 hover:bg-opacity-80'
                  }`}
                  style={
                    !selectedGrip.includes(grip)
                      ? {
                          backgroundColor:
                            'var(--button-bg, rgba(255,255,255,0.15))',
                          borderColor:
                            'var(--border-color, rgba(255,255,255,0.3))',
                          border: '1px solid',
                        }
                      : {}
                  }
                >
                  {gripLabels[grip] || grip}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Price Filter */}
        {priceRanges.length > 0 && (
          <div className="mb-4">
            <h1 className="text-sm font-medium opacity-70 mb-2">
              Preisbereich
            </h1>
            <div className="flex flex-wrap gap-2">
              {priceRanges.map((price) => (
                <button
                  key={price}
                  onClick={() =>
                    toggleFilter(setSelectedPrice, price, selectedPrice)
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedPrice.includes(price)
                      ? 'bg-green-600 text-white shadow-md'
                      : 'text-gray-300 hover:bg-opacity-80'
                  }`}
                  style={
                    !selectedPrice.includes(price)
                      ? {
                          backgroundColor:
                            'var(--button-bg, rgba(255,255,255,0.15))',
                          borderColor:
                            'var(--border-color, rgba(255,255,255,0.3))',
                          border: '1px solid',
                        }
                      : {}
                  }
                >
                  {price}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mb-4 flex items-center justify-between">
        <p className="opacity-70">
          <span className="font-semibold opacity-100">
            {filteredMice.length}
          </span>{' '}
          {filteredMice.length === 1 ? 'Mäuse gefunden' : 'Mäuse gefunden'}
        </p>
      </div>

      {/* Mouse Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMice.map((mouse) => {
          // Links können entweder ein Array von Objekten oder eine einzelne URL sein
          const hasMultipleLinks = mouse.links && Array.isArray(mouse.links);
          const singleUrl = !hasMultipleLinks
            ? mouse.url || (mouse.links && mouse.links[0]?.url)
            : null;

          return (
            <div
              key={mouse.name}
              className="rounded-xl shadow-sm hover:shadow-lg transition-all p-5 border group flex flex-col"
              style={{
                backgroundColor: 'var(--card-bg, rgba(255,255,255,0.05))',
                borderColor: 'var(--border-color, rgba(255,255,255,0.1))',
              }}
            >
              <div className="mb-4">
                <h2 className="font-semibold text-white text-2xl leading-tight mb-2 mt-0">
                  {mouse.name}
                </h2>
                <span
                  className="inline-block text-xs font-bold px-2 py-1 rounded"
                  style={{
                    color: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                  }}
                >
                  {mouse.price}
                </span>
              </div>

              <div className="space-y-2 text-sm mb-4 grow">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Marke:</span>
                  <span className="font-medium text-gray-200">
                    {mouse.brand}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Grip:</span>
                  <span className="font-medium text-gray-200">
                    {gripLabels[mouse.grip] || mouse.grip}
                  </span>
                </div>
              </div>

              {/* Links Section - immer am unteren Ende */}
              <div className="mt-auto">
                {hasMultipleLinks ? (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400 mb-2">Verfügbar bei:</p>
                    <div className="flex flex-wrap gap-2">
                      {mouse.links.map((link) => (
                        <a
                          key={link.shop}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs px-3 py-1.5 rounded-lg transition-all hover:scale-105"
                          style={{
                            backgroundColor: 'rgba(59, 130, 246, 0.2)',
                            color: '#60a5fa',
                            border: '1px solid rgba(59, 130, 246, 0.3)',
                          }}
                        >
                          {link.shop}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : singleUrl ? (
                  <a
                    href={singleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-sm px-4 py-2 rounded-lg transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      color: '#60a5fa',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                    }}
                  >
                    Zum Shop →
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      {filteredMice.length === 0 && (
        <div
          className="text-center py-12 rounded-xl shadow-sm border"
          style={{
            backgroundColor: 'var(--card-bg, rgba(255,255,255,0.05))',
            borderColor: 'var(--border-color, rgba(255,255,255,0.1))',
          }}
        >
          <p className="text-lg mb-2 opacity-70">Keine Mäuse gefunden</p>
          <p className="text-sm opacity-50">
            Versuche andere Filter-Einstellungen
          </p>
        </div>
      )}
    </div>
  );
};

export default FilterableMice;
