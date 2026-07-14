import { fields } from '@keystatic/core';

export const mouseSchema = fields.array(
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
);