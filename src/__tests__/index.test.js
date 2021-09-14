/* eslint-env jest */
import apply from '../index'
import h from 'hastscript'
import render from 'hast-util-to-html'

it('exports a function', () => {
  expect(typeof apply).toEqual('function')
})

// prettier-ignore
const expected =
  h('table', [
    h('tbody', [
      h('tr', [
        h('td', 'Hello'),
        h('td', 'World'),
      ]),
      h('tr.row.separator', [
        h('td', ''),
        h('td', ''),
      ]),
      h('tr', [
        h('td', 'Hola'),
        h('td', 'Mundo'),
      ]),
    ]),
  ])

it('works', () => {
  // prettier-ignore
  const input =
    h('table', [
      h('tbody', [
        h('tr', [
          h('td', 'Hello'),
          h('td', 'World')
        ]),
        h('tr.row', [
          h('td', '-'),
          h('td', '---')
        ]),
        h('tr', [
          h('td', 'Hola'),
          h('td', 'Mundo')
        ])
      ])
    ])

  const output = apply(input)
  expect(render(output)).toEqual(render(expected))
})

it('works with blanks', () => {
  // prettier-ignore
  const input =
    h('table', [
      h('tbody', [
        h('tr', [
          h('td', 'Hello'),
          h('td', 'World'),
        ]),
        h('tr.row', [
          h('td', ''),
          h('td', ''),
        ]),
        h('tr', [
          h('td', 'Hola'),
          h('td', 'Mundo'),
        ])
      ])
    ])

  const output = apply(input)
  expect(render(output)).toEqual(render(expected))
})

it('works with empties', () => {
  // prettier-ignore
  const input =
    h('table', [
      h('tbody', [
        h('tr', [
          h('td', 'Hello'),
          h('td', 'World'),
        ]),
        h('tr.row', [
          h('td'),
          h('td'),
        ]),
        h('tr', [
          h('td', 'Hola'),
          h('td', 'Mundo'),
        ])
      ])
    ])

  const output = apply(input)
  expect(render(output)).toEqual(render(expected))
})
