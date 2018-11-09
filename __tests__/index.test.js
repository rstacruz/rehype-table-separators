/* @jsx h */
/* eslint-env jest */
import apply from '../src/index'
import h from 'hastscript'
import render from 'hast-util-to-html'

it('exports a function', () => {
  expect(typeof apply).toEqual('function')
})

it('works', () => {
  const input = (
    <table>
      <tbody>
        <tr>
          <td>Hello</td>
          <td>World</td>
        </tr>
        <tr className="row">
          <td>-</td>
          <td>---</td>
        </tr>
        <tr>
          <td>Hola</td>
          <td>Mundo</td>
        </tr>
      </tbody>
    </table>
  )

  const expected = (
    <table>
      <tbody>
        <tr>
          <td>Hello</td>
          <td>World</td>
        </tr>
        <tr className="row separator">
          <td>{''}</td>
          <td>{''}</td>
        </tr>
        <tr>
          <td>Hola</td>
          <td>Mundo</td>
        </tr>
      </tbody>
    </table>
  )

  const output = apply(input)
  expect(render(output)).toEqual(render(expected))
})

it('works with blanks', () => {
  const input = (
    <table>
      <tbody>
        <tr>
          <td>Hello</td>
          <td>World</td>
        </tr>
        <tr className="row">
          <td>{''}</td>
          <td>{''}</td>
        </tr>
        <tr>
          <td>Hola</td>
          <td>Mundo</td>
        </tr>
      </tbody>
    </table>
  )

  const expected = (
    <table>
      <tbody>
        <tr>
          <td>Hello</td>
          <td>World</td>
        </tr>
        <tr className="row separator">
          <td>{''}</td>
          <td>{''}</td>
        </tr>
        <tr>
          <td>Hola</td>
          <td>Mundo</td>
        </tr>
      </tbody>
    </table>
  )

  const output = apply(input)
  expect(render(output)).toEqual(render(expected))
})

it('works with empties', () => {
  const input = (
    <table>
      <tbody>
        <tr>
          <td>Hello</td>
          <td>World</td>
        </tr>
        <tr className="row">
          <td />
          <td />
        </tr>
        <tr>
          <td>Hola</td>
          <td>Mundo</td>
        </tr>
      </tbody>
    </table>
  )

  const expected = (
    <table>
      <tbody>
        <tr>
          <td>Hello</td>
          <td>World</td>
        </tr>
        <tr className="row separator">
          <td>{''}</td>
          <td>{''}</td>
        </tr>
        <tr>
          <td>Hola</td>
          <td>Mundo</td>
        </tr>
      </tbody>
    </table>
  )

  const output = apply(input)
  expect(render(output)).toEqual(render(expected))
})
