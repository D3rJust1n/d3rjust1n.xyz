import React, { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';

const sizeOrder = [
  '60%',
  '65%',
  '75%',
  'TKL',
  'Fullsize'
];

const FilterableKeyboards = ({ keyboards: keyboardsProp = [] }) => {
  const keyboards = useMemo(
    () =>
      (Array.isArray(keyboardsProp) ? keyboardsProp : []).filter(
        (kb) => kb && kb.name && kb.name.trim() !== ''
      ),
    [keyboardsProp]
  );

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedLayout, setSelectedLayout] = useState([]);
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = useMemo(() => {
    return [...new Set(keyboards.map((kb) => kb.category))]
      .filter(Boolean)
      .sort();
  }, [keyboards]);

  const sizes = useMemo(() => {
    const unique = [...new Set(keyboards.map((kb) => kb.size))].filter(Boolean);
    return unique.sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b));
  }, [keyboards]);

  const priceRanges = useMemo(() => {
    const unique = [...new Set(keyboards.map((kb) => kb.price))].filter(
      Boolean
    );
    const getLowerBound = (price) => {
      const match = price.match(/\d+/);
      return match ? parseInt(match[0], 10) : Infinity;
    };
    return unique.sort((a, b) => getLowerBound(a) - getLowerBound(b));
  }, [keyboards]);

  const layouts = useMemo(() => {
    return [
      ...new Set(
        keyboards
          .flatMap((kb) => (Array.isArray(kb.layout) ? kb.layout : [kb.layout]))
          .filter(Boolean)
      ),
    ].sort();
  }, [keyboards]);

  const features = useMemo(() => {
    const allFeatures = keyboards.flatMap((kb) => kb.features || []);
    return [...new Set(allFeatures)].sort();
  }, [keyboards]);

  const toggleFilter = (setter, value, currentArray) => {
    if (currentArray.includes(value)) {
      setter(currentArray.filter((item) => item !== value));
    } else {
      setter([...currentArray, value]);
    }
  };

  const clearAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSize([]);
    setSelectedPrice([]);
    setSelectedLayout([]);
    setSelectedFeatures([]);
    setSearchTerm('');
  };

  const filteredKeyboards = useMemo(() => {
    return keyboards.filter((kb) => {
      const matchesCategory =
        selectedCategory === 'all' || kb.category === selectedCategory;
      const matchesSize =
        selectedSize.length === 0 || selectedSize.includes(kb.size);
      const matchesPrice =
        selectedPrice.length === 0 || selectedPrice.includes(kb.price);

      const kbLayouts = Array.isArray(kb.layout) ? kb.layout : [kb.layout];
      const matchesLayout =
        selectedLayout.length === 0 ||
        selectedLayout.some((layout) => kbLayouts.includes(layout));
      const matchesFeatures =
        selectedFeatures.length === 0 ||
        selectedFeatures.every((f) => (kb.features || []).includes(f));
      const matchesSearch =
        searchTerm === '' ||
        kb.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        kb.brand.toLowerCase().includes(searchTerm.toLowerCase());

      return (
        matchesCategory &&
        matchesSize &&
        matchesPrice &&
        matchesLayout &&
        matchesFeatures &&
        matchesSearch
      );
    });
  }, [
    keyboards,
    selectedCategory,
    selectedSize,
    selectedPrice,
    selectedLayout,
    selectedFeatures,
    searchTerm,
  ]);

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    selectedSize.length +
    selectedPrice.length +
    selectedLayout.length +
    selectedFeatures.length;

  const categoryLabels = {
    prebuild: 'Prebuild',
    he: 'Hall Effect',
    barebone: 'Barebone',
    numpad: 'Numpad'
  };

  if (keyboards.length === 0) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-4 md:p-8">
        <div className="max-w-7xl mx-auto text-center py-12">
          <p className="text-slate-500 text-lg">
            Keine Tastatur-Daten gefunden
          </p>
          <p className="text-slate-400 text-sm mt-2">
            Bitte übergebe die Keyboards-Daten als Props
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

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mb-4">
            <h1 className="text-sm font-medium opacity-70 mb-2">Kategorie</h1>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-300 hover:bg-opacity-80'
                }`}
                style={
                  selectedCategory !== 'all'
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
                Alle
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setSelectedCategory(selectedCategory === cat ? 'all' : cat)
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'text-gray-300 hover:bg-opacity-80'
                  }`}
                  style={
                    selectedCategory !== cat
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
                  {categoryLabels[cat] || cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Size Filter */}
        {sizes.length > 0 && (
          <div className="mb-4">
            <h1 className="text-sm font-medium opacity-70 mb-2">Größe</h1>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() =>
                    toggleFilter(setSelectedSize, size, selectedSize)
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedSize.includes(size)
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-300 hover:bg-opacity-80'
                  }`}
                  style={
                    !selectedSize.includes(size)
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
                  {size}
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

        {/* Layout Filter */}
        {layouts.length > 0 && (
          <div className="mb-4">
            <h1 className="text-sm font-medium opacity-70 mb-2">Layout</h1>
            <div className="flex flex-wrap gap-2">
              {layouts.map((layout) => (
                <button
                  key={layout}
                  onClick={() =>
                    toggleFilter(setSelectedLayout, layout, selectedLayout)
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedLayout.includes(layout)
                      ? 'bg-green-800 text-white shadow-md'
                      : 'text-gray-300 hover:bg-opacity-80'
                  }`}
                  style={
                    !selectedLayout.includes(layout)
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
                  {layout}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Features Filter */}
        {features.length > 0 && (
          <div>
            <h1 className="text-sm font-medium opacity-70 mb-2">Features</h1>
            <div className="flex flex-wrap gap-2">
              {features.map((feature) => (
                <button
                  key={feature}
                  onClick={() =>
                    toggleFilter(setSelectedFeatures, feature, selectedFeatures)
                  }
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedFeatures.includes(feature)
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-gray-300 hover:bg-opacity-80'
                  }`}
                  style={
                    !selectedFeatures.includes(feature)
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
                  {feature}
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
            {filteredKeyboards.length}
          </span>{' '}
          {filteredKeyboards.length === 1
            ? 'Tastatur gefunden'
            : 'Tastaturen gefunden'}
        </p>
      </div>

      {/* Keyboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredKeyboards.map((kb, idx) => {
          const hasMultipleLinks = kb.links && Array.isArray(kb.links);
          const singleUrl = !hasMultipleLinks
            ? kb.url || (kb.links && kb.links[0]?.url)
            : null;

          return (
            <div
              key={idx}
              className="rounded-xl shadow-sm hover:shadow-lg transition-all p-5 border group flex flex-col"
              style={{
                backgroundColor: 'var(--card-bg, rgba(255,255,255,0.05))',
                borderColor: 'var(--border-color, rgba(255,255,255,0.1))',
              }}
            >
              <div className="mb-4 shrink-0" style={{ minHeight: '5.5rem' }}>
                <h2
                  className="font-semibold text-white text-2xl leading-tight mb-2 mt-0"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    minHeight: '3.5rem',
                  }}
                >
                  {kb.name}
                </h2>
                <span
                  className="inline-block text-xs font-bold px-2 py-1 rounded"
                  style={{
                    color: '#22c55e',
                    backgroundColor: 'rgba(34, 197, 94, 0.2)',
                  }}
                >
                  {kb.price}
                </span>
              </div>

              <div className="space-y-2 text-sm grow-0">
                {kb.category && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Kategorie:</span>
                    <span className="text-gray-200">
                      {categoryLabels[kb.category] || kb.category}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <span className="text-gray-400">Marke:</span>
                  <span className="font-medium text-gray-200">{kb.brand}</span>
                </div>

                {kb.size && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Größe:</span>
                    <span className="font-medium text-gray-200">{kb.size}</span>
                  </div>
                )}

                {(Array.isArray(kb.layout) ? kb.layout : [kb.layout]).filter(
                  Boolean
                ).length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Layout:</span>
                    <div className="flex gap-1.5">
                      {(Array.isArray(kb.layout) ? kb.layout : [kb.layout])
                        .filter(Boolean)
                        .map((layout, i) => (
                          <span
                            key={i}
                            className="font-medium text-gray-200 text-xs px-2 py-1 rounded"
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            }}
                          >
                            {layout}
                          </span>
                        ))}
                    </div>
                  </div>
                )}

                <div className="pt-2 min-h-8">
                  {kb.features && kb.features.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {kb.features.map((feature, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 rounded-full border"
                          style={{
                            backgroundColor: 'rgba(59, 130, 246, 0.1)',
                            color: '#60a5fa',
                            borderColor: 'rgba(59, 130, 246, 0.3)',
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-auto">
                {hasMultipleLinks ? (
                  <div className="space-y-2">
                    <p className="text-xs text-gray-400 mb-2">Verfügbar bei:</p>
                    <div className="flex flex-wrap gap-2">
                      {kb.links.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
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

      {filteredKeyboards.length === 0 && (
        <div
          className="text-center py-12 rounded-xl shadow-sm border"
          style={{
            backgroundColor: 'var(--card-bg, rgba(255,255,255,0.05))',
            borderColor: 'var(--border-color, rgba(255,255,255,0.1))',
          }}
        >
          <p className="text-lg mb-2 opacity-70">Keine Tastaturen gefunden</p>
          <p className="text-sm opacity-50">
            Versuche andere Filter-Einstellungen
          </p>
        </div>
      )}
    </div>
  );
};

export default FilterableKeyboards;
