import { mount } from '@vue/test-utils'
import Button from '@/KoFiButton.vue'

describe('HelloWorld.vue', () => {
  it('renders with default message', () => {
    const wrapper = mount(Button, {
      propsData: {
        username: 'linusborg',
      },
    })
    expect(wrapper.find('span').text()).toMatch('Support Me on Ko-fi')
    expect(wrapper.find('a').attributes('href')).toMatch(
      'https://ko-fi.com/linusborg'
    )
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders with custom title', () => {
    const title = 'Gimme my moneys'
    const wrapper = mount(Button, {
      propsData: {
        username: 'linusborg',
        title,
      },
    })
    expect(wrapper.find('span').text()).toMatch(title)
    expect(wrapper.html()).toMatchSnapshot()
  })
  it('renders with custom color from props', () => {
    const wrapper = mount(Button, {
      propsData: {
        username: 'linusborg',
        color: '#CCC',
      },
    })
    expect(wrapper.find('a').element.style.backgroundColor).toMatch(
      'rgb(204, 204, 204)'
    )
  })
})
