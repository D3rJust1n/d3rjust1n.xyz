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
        { label: '0-30€', value: '0-30€' },
        { label: '30-50€', value: '30-50€'},
        { label: '50-80€', value: '50-80€'},
        { label: '80-110€', value: '80-110€'},
        { label: '110-150€', value: '110-150€'},
        { label: '150€ +', value: '150€ +'}
      ],
      defaultValue: '80-110€',
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