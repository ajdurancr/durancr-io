import React from 'react'
import { shallow } from 'enzyme'

import Component from './Component'
import { component } from '../../mocks/contentful/components'
import * as componentsHelper from '../../helpers/components'

const TestComponent = () => <div>Test Component</div>

componentsHelper.getComponentsMap = () => ({
  testComponent: TestComponent,
})

describe('Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Component {...component} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly unknown component', () => {
    const unknownComponent = {
      ...component,
      fields: {
        ...component.fields,
        contentType: 'Unknown component',
      },
    }
    const wrapper = shallow(<Component {...unknownComponent} />)

    expect(wrapper).toMatchSnapshot()
  })
})
