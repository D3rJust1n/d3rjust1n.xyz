import { config, fields, singleton } from '@keystatic/core';

// Schemas

const keyboardSchema =  fields.array(
  fields.object({
    name: fields.text({ label: 'Name' }),
    brand: fields.text({ label: 'Brand' }),
    price: fields.select({
      label: 'Preis',
      options: [
        { label: '0-60€', value: '0-60€' },
        { label: '60-100€', value: '60-100€'},
        { label: '100-150€', value: '100-150€'},
        { label: '150-200€', value: '150-200€'},
        { label: '200-250€', value: '200-250€'},
        { label: '250€ +', value: '250€ +'}
      ],
      defaultValue: '100-150€',
    }),
    layout: fields.multiselect({
      label: 'Layout',
      options: [
        { label: 'ISO', value: 'ISO' },
        { label: 'ANSI', value: 'ANSI' },
      ],
    }),
    features: fields.multiselect({
      label: 'Features',
      options: [
        { label: 'VIA', value: 'VIA' },
        { label: 'QMK', value: 'QMK' },
        { label: 'Bluetooth', value: 'Bluetooth' },
      ],
    }),
    links: fields.array(
      fields.object({
        shop: fields.text({ label: 'Shop' }),
        url: fields.url({ label: 'URL' }),
      }),
      { label: 'Links', itemLabel: (props) => props.fields.shop.value },
    ),
  }),
  { label: 'Tastaturen', itemLabel: (props) => props.fields.name.value },
)

const mouseSchema = fields.array(
  fields.object({
    name: fields.text({ label: 'Name' }),
    brand: fields.text({ label: 'Brand' }),
    grip: fields.select({
      label: 'Grip',
      options: [
        { label: 'Palm', value: 'palm' },
        { label: 'Claw', value: 'claw' },
        { label: 'Fingertip', value: 'fingertip' },
      ],
      defaultValue: 'palm',
    }),
    price: fields.select({
      label: 'Preis',
      options: [
        { label: '0-60€', value: '0-60€' },
        { label: '60-100€', value: '60-100€'},
        { label: '100-150€', value: '100-150€'},
        { label: '150-200€', value: '150-200€'},
        { label: '200-250€', value: '200-250€'},
        { label: '250€ +', value: '250€ +'}
      ],
      defaultValue: '60-100€',
    }),
    links: fields.array(
      fields.object({
        shop: fields.text({ label: 'Shop' }),
        url: fields.url({ label: 'URL' }),
      }),
      { label: 'Links', itemLabel: (props) => props.fields.shop.value },
    ),
  }),
  { label: 'Mäuse', itemLabel: (props) => props.fields.name.value },
)

const numpadSchema = fields.array(
  fields.object({
    name: fields.text({ label: 'Name' }),
    brand: fields.text({ label: 'Brand' }),
    price: fields.select({
      label: 'Preis',
      options: [
        { label: '0-60€', value: '0-60€' },
        { label: '60-100€', value: '60-100€'},
        { label: '100-150€', value: '100-150€'},
        { label: '150-200€', value: '150-200€'},
        { label: '200-250€', value: '200-250€'},
        { label: '250€ +', value: '250€ +'}
      ],
      defaultValue: '100-150€',
    }),
    links: fields.array(
      fields.object({
        shop: fields.text({ label: 'Shop' }),
        url: fields.url({ label: 'URL' }),
      }),
      { label: 'Links', itemLabel: (props) => props.fields.shop.value },
    ),
  }),
  { label: 'Numpads', itemLabel: (props) => props.fields.name.value },
)

export default config({
  storage: {
    // kind: 'local'
    kind: 'github',
    repo: 'D3rJust1n/d3rjust1n.xyz',
    branchPrefix: 'updates/'
  },

  singletons: {
    // Tastaturen – Prebuild
    keyboards_prebuild_60: singleton({
      label: 'Prebuild – 60%',
      path: 'src/data/keyboards/prebuild/sixtypercent',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_prebuild_65: singleton({
      label: 'Prebuild – 65%',
      path: 'src/data/keyboards/prebuild/sixtyfivepercent',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_prebuild_75: singleton({
      label: 'Prebuild – 75%',
      path: 'src/data/keyboards/prebuild/seventyfivepercent',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_prebuild_tkl: singleton({
      label: 'Prebuild – TKL',
      path: 'src/data/keyboards/prebuild/tkl',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_prebuild_fullsize: singleton({
      label: 'Prebuild – Fullsize',
      path: 'src/data/keyboards/prebuild/fullsize',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),

    // Tastaturen – Hall Effect
    keyboards_he_60: singleton({
      label: 'Hall Effect – 60%',
      path: 'src/data/keyboards/he/sixtypercent',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_he_65: singleton({
      label: 'Hall Effect – 65%',
      path: 'src/data/keyboards/he/sixtyfivepercent',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_he_75: singleton({
      label: 'Hall Effect – 75%',
      path: 'src/data/keyboards/he/seventyfivepercent',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_he_tkl: singleton({
      label: 'Hall Effect – TKL',
      path: 'src/data/keyboards/he/tkl',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_he_fullsize: singleton({
      label: 'Hall Effect – Fullsize',
      path: 'src/data/keyboards/he/fullsize',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),

    // Tastaturen – Barebone
    keyboards_barebone_60: singleton({
      label: 'Barebone – 60%',
      path: 'src/data/keyboards/barebone/sixtypercent',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_barebone_65: singleton({
      label: 'Barebone – 65%',
      path: 'src/data/keyboards/barebone/sixtyfivepercent',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_barebone_75: singleton({
      label: 'Barebone – 75%',
      path: 'src/data/keyboards/barebone/seventyfivepercent',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_barebone_tkl: singleton({
      label: 'Barebone – TKL',
      path: 'src/data/keyboards/barebone/tkl',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),
    keyboards_barebone_fullsize: singleton({
      label: 'Barebone – Fullsize',
      path: 'src/data/keyboards/barebone/fullsize',
      format: { data: 'json' },
      schema: { items: keyboardSchema },
    }),

    //Mäuse
    mice: singleton({
      label: 'Mäuse',
      path: 'src/data/mouse/mice',
      format: { data: 'json'},
      schema: { items: mouseSchema},
    }),

    // Numpads
    numpads: singleton({
      label: 'Numpads',
      path: 'src/data/keyboards/numpad/numpad',
      format: { data: 'json' },
      schema: { items: numpadSchema}
    })
  },
})